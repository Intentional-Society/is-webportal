import React, { useState } from 'react';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';
import CenteredColumn from '../components/centered-column';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';

const slideTexts = [
  'Welcome to the Orientation!',
  "Intentional Society's core purpose.",
];

const NamedDefault = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalImageSlides = 19;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, totalImageSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  return (
    <Layout>
      <div style={{ height: '5vh' }}></div>
      <CenteredColumn>
        <Typography variant="h3" style={{ textAlign: 'center', marginBottom: '20px' }}>Orientation</Typography>

        {/* Image Carousel */}
        <div style={{ marginBottom: '40px', textAlign: 'center', position: 'relative' }}>
          <img
            src={`/images/orientation/${currentSlide + 1}.png`}
            alt={`Slide ${currentSlide + 1}`}
            style={{ width: '100%', maxWidth: '720px', borderRadius: '10px' }}
          />
          <p style={{ fontSize: '1.2em', marginTop: '15px' }}>
            {slideTexts[currentSlide] || ''}
          </p>

          {/* Navigation Buttons for Image Carousel */}
          <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
            <IconButton onClick={prevSlide} disabled={currentSlide === 0}>
              <ArrowBackIosIcon />
            </IconButton>
          </div>
          <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
            <IconButton onClick={nextSlide} disabled={currentSlide === totalImageSlides - 1}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
          <Typography variant="body2" style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)' }}>
            {currentSlide + 1} / {totalImageSlides}
          </Typography>
        </div>

        {/* Static Content Below Carousel */}
        <p>
          Welcome! These slides walk you through the Intentional Society orientation. They're meant to give you a visual and contextual intro to our purpose, vibe, and how to get involved.
        </p>
      </CenteredColumn>
    </Layout>
  );
};

export default NamedDefault;