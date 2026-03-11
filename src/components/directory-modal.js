import React, { useEffect, useMemo, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as styles from './members-directory.module.css';
import {
  getMemberFallbackImage,
  getMemberImage,
  placeholder,
} from '../data/members-directory';

const renderContact = contact => {
  if (!contact) return 'Not provided';

  const isUrl = contact.startsWith('http://') || contact.startsWith('https://');
  if (isUrl) {
    return (
      <a href={contact} target="_blank" rel="noopener noreferrer">
        {contact}
      </a>
    );
  }

  const isEmail = contact.includes('@');
  if (isEmail) {
    return <a href={`mailto:${contact}`}>{contact}</a>;
  }

  return contact;
};

const DirectoryModal = ({ member, open, onClose }) => {
  const defaultImage = useMemo(() => (member ? getMemberImage(member) : ''), [member]);
  const fallbackImage = useMemo(
    () => (member ? getMemberFallbackImage(member) : ''),
    [member]
  );
  const [imageSrc, setImageSrc] = useState(defaultImage);
  const [attemptedFallback, setAttemptedFallback] = useState(false);

  useEffect(() => {
    setImageSrc(defaultImage);
    setAttemptedFallback(false);
  }, [defaultImage]);

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="member-profile-title">
      <Box className={styles.modalBox}>
        <IconButton
          onClick={onClose}
          aria-label="Close member details"
          className={styles.closeButton}
          size="small"
        >
          <CloseIcon />
        </IconButton>

        {member && (
          <div className={styles.modalTopRow}>
            <img
              src={imageSrc}
              alt={member.fullName}
              className={styles.modalImage}
              onError={() => {
                if (!attemptedFallback && fallbackImage && fallbackImage !== imageSrc) {
                  setAttemptedFallback(true);
                  setImageSrc(fallbackImage);
                  return;
                }
                setImageSrc(placeholder(member.fullName));
              }}
            />
            <div>
              <Typography id="member-profile-title" variant="h4" sx={{ marginBottom: '8px' }}>
                {member.fullName}
              </Typography>
              <Typography variant="subtitle1" sx={{ marginBottom: '16px' }}>
                {member.roughLocation || 'Location not listed'}
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 700, marginBottom: '6px' }}>
                Short bio
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '6px' }}>
                A little about this member:
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '18px' }}>
                {member.shortBio || 'No bio provided yet.'}
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Open to cold calls / meetings
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                {member.openToCalls || 'Not specified'}
              </Typography>

              <div className={styles.contactBlock}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  Contact information
                </Typography>
                <Typography variant="body2">
                  {renderContact(member.contactInformation)}
                </Typography>
              </div>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default DirectoryModal;
