// Members directory expects a local runtime CSV at:
// static/data/members.csv -> served by Gatsby as /data/members.csv
export const DIRECTORY_CONFIG = {
  pageSize: 20,
  csvPath: '/data/members.csv',
};

const parseCsv = csvText => {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i += 1) {
    const ch = csvText[i];
    const next = csvText[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === ',' && !inQuotes) {
      row.push(cell);
      cell = '';
      continue;
    }

    if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i += 1;
      row.push(cell);
      if (row.some(value => String(value || '').trim() !== '')) rows.push(row);
      row = [];
      cell = '';
      continue;
    }

    cell += ch;
  }

  row.push(cell);
  if (row.some(value => String(value || '').trim() !== '')) rows.push(row);

  return rows;
};

const toOpenToCalls = rawStatus => {
  const value = String(rawStatus || '').trim().toLowerCase();
  if (value === 'active') return 'Yes';
  if (value === 'quiet' || value === 'canceled' || value === 'cancelled') {
    return 'No';
  }
  return value ? 'Not specified' : '';
};

const extractDriveFileId = rawUrl => {
  const value = String(rawUrl || '').trim();
  if (!value) return null;

  const openMatch = value.match(/[?&]id=([^&]+)/);
  if (openMatch?.[1]) {
    return openMatch[1];
  }

  const fileMatch = value.match(/\/file\/d\/([^/]+)/);
  if (fileMatch?.[1]) {
    return fileMatch[1];
  }

  const idLike = value.match(/^[a-zA-Z0-9_-]{20,}$/);
  if (idLike) {
    return value;
  }

  return null;
};

const toDirectGoogleDriveUrl = fileId => {
  if (!fileId) return '';
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

const toDriveThumbnailUrl = fileId => {
  if (!fileId) return '';
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;
};

const mapFromFormExport = row => {
  const fullName = String(row[1] || '').trim(); // Column B
  const email = String(row[2] || '').trim(); // Column C
  const shortBio = String(row[3] || '').trim(); // Column D
  const roughLocation = String(row[4] || '').trim(); // Column E
  const picture = String(row[6] || '').trim(); // Column G
  const status = String(row[17] || '').trim(); // Column R
  const fileId = extractDriveFileId(picture);

  return {
    fullName,
    roughLocation,
    shortBio,
    openToCalls: toOpenToCalls(status),
    contactInformation: email,
    profilePicture: fileId ? toDirectGoogleDriveUrl(fileId) : picture,
    profilePictureFallback: toDriveThumbnailUrl(fileId),
  };
};

export const placeholder = name => {
  const initials = (name || 'IS Member')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(chunk => chunk[0]?.toUpperCase() || '')
    .join('');
  const label = (initials || 'IS').replace(/[^A-Z0-9]/gi, '').slice(0, 3) || 'IS';

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><rect width='100%' height='100%' fill='#E8F0EC'/><text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' font-family='Gudea, Helvetica, Arial, sans-serif' font-size='180' font-weight='600' fill='#24818E'>${label}</text></svg>`
  )}`;
};

export const getMemberImage = member => {
  return member?.profilePicture || placeholder(member?.fullName);
};

export const getMemberFallbackImage = member => {
  return member?.profilePictureFallback || placeholder(member?.fullName);
};

export const loadDirectoryMembers = async () => {
  try {
    const response = await fetch(DIRECTORY_CONFIG.csvPath, { method: 'GET' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const csvText = await response.text();
    const rows = parseCsv(csvText);
    const members = rows
      .slice(1)
      .map(mapFromFormExport)
      .filter(member => member.fullName);

    if (!members.length) {
      return {
        members: [],
        statusMessage: 'No members found in CSV.',
      };
    }

    return { members, statusMessage: '' };
  } catch (error) {
    return {
      members: [],
      statusMessage:
        'Could not load /data/members.csv. Add your local members.csv file to static/data/.',
    };
  }
};
