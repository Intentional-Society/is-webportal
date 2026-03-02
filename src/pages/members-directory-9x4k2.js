import React, { useEffect, useMemo, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Layout from '../components/layout';
import DirectoryCard from '../components/directory-card';
import DirectoryModal from '../components/directory-modal';
import {
  DIRECTORY_CONFIG,
  loadDirectoryMembers,
} from '../data/members-directory';
import * as styles from '../components/members-directory.module.css';

const MembersDirectoryPage = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('Loading members...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const result = await loadDirectoryMembers();
      if (!isMounted) return;

      setMembers(result.members);
      setStatus(result.statusMessage);
      setLoading(false);
    };

    init();
    return () => {
      isMounted = false;
    };
  }, []);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(members.length / DIRECTORY_CONFIG.pageSize));
  }, [members]);

  const pageMembers = useMemo(() => {
    const start = (currentPage - 1) * DIRECTORY_CONFIG.pageSize;
    return members.slice(start, start + DIRECTORY_CONFIG.pageSize);
  }, [currentPage, members]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  return (
    <Layout>
      <div style={{ height: '3vh' }}></div>
      <div className={styles.pageShell}>
        <header className={styles.pageIntro}>
          <Typography variant="subtitle2" className={styles.eyebrow}>
            Members Only
          </Typography>
          <Typography variant="h3">IS Web Member Directory</Typography>
          <Typography variant="body1" className={styles.subtitle}>
            Discover and connect with fellow members.
          </Typography>
        </header>

        {loading ? (
          <div className={styles.statusBox}>Loading members...</div>
        ) : (
          <>
            {status && <div className={styles.statusBox}>{status}</div>}
            {members.length > 0 && (
              <>
                <div className={styles.memberGrid}>
                  {pageMembers.map(member => (
                    <DirectoryCard
                      key={member.fullName}
                      member={member}
                      onSelect={setSelectedMember}
                    />
                  ))}
                </div>

                {members.length > DIRECTORY_CONFIG.pageSize && (
                  <nav className={styles.pagination} aria-label="Directory pagination">
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ textTransform: 'inherit', borderRadius: '999px' }}
                      onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                      disabled={currentPage <= 1}
                    >
                      Previous
                    </Button>
                    <Typography variant="body2" className={styles.pageIndicator}>
                      Page {currentPage} of {totalPages}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ textTransform: 'inherit', borderRadius: '999px' }}
                      onClick={() =>
                        setCurrentPage(page => Math.min(totalPages, page + 1))
                      }
                      disabled={currentPage >= totalPages}
                    >
                      Next
                    </Button>
                  </nav>
                )}
              </>
            )}
          </>
        )}
      </div>

      <DirectoryModal
        member={selectedMember}
        open={Boolean(selectedMember)}
        onClose={() => setSelectedMember(null)}
      />
    </Layout>
  );
};

export default MembersDirectoryPage;

export const Head = () => (
  <>
    <title>Members Directory</title>
    <meta name="robots" content="noindex, nofollow" />
  </>
);
