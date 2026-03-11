import React, { useEffect, useMemo, useState } from 'react';
import Typography from '@mui/material/Typography';
import * as styles from './members-directory.module.css';
import {
  getMemberFallbackImage,
  getMemberImage,
  placeholder,
} from '../data/members-directory';

const DirectoryCard = ({ member, onSelect }) => {
  const openDetails = () => onSelect(member);
  const defaultImage = useMemo(() => getMemberImage(member), [member]);
  const fallbackImage = useMemo(() => getMemberFallbackImage(member), [member]);
  const [imageSrc, setImageSrc] = useState(defaultImage);
  const [attemptedFallback, setAttemptedFallback] = useState(false);

  useEffect(() => {
    setImageSrc(defaultImage);
    setAttemptedFallback(false);
  }, [defaultImage]);

  const onKeyDown = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openDetails();
    }
  };

  return (
    <div
      className={styles.memberCard}
      onClick={openDetails}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open member details for ${member.fullName}`}
    >
      <div className={styles.memberPhotoWrap}>
        <img
          src={imageSrc}
          alt={member.fullName}
          className={styles.memberPhoto}
          onError={() => {
            if (!attemptedFallback && fallbackImage && fallbackImage !== imageSrc) {
              setAttemptedFallback(true);
              setImageSrc(fallbackImage);
              return;
            }
            setImageSrc(placeholder(member.fullName));
          }}
        />
      </div>
      <div className={styles.memberCardContent}>
        <Typography variant="h6" sx={{ fontSize: '1.08rem', lineHeight: 1.2, margin: 0 }}>
          {member.fullName}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '4px', marginBottom: 0 }}>
          {member.roughLocation || 'Location not listed'}
        </Typography>
      </div>
    </div>
  );
};

export default DirectoryCard;
