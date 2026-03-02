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

const mapFromFormExport = row => {
  const fullName = String(row[1] || '').trim(); // Column B
  const email = String(row[2] || '').trim(); // Column C
  const shortBio = String(row[3] || '').trim(); // Column D
  const roughLocation = String(row[4] || '').trim(); // Column E
  const status = String(row[17] || '').trim(); // Column R

  return {
    fullName,
    roughLocation,
    shortBio,
    openToCalls: toOpenToCalls(status),
    contactInformation: email,
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
  return placeholder(member.fullName);
};

export const loadDirectoryMembers = async () => {
  try {
    const response = await fetch(DIRECTORY_CONFIG.csvPath, { method: 'GET' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const csvText = await response.text();
    const rows = parseCsv(csvText);
    const members = rows
      .slice(1) // header row
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
      statusMessage: 'Could not load the local CSV.',
    };
  }
};
