import React from 'react';

// Torn-paper top edges rendered as SVG masks. Each variant is a different
// hand-drawn ragged line so consecutive sections don't repeat, and the SVG
// scales to any width without the tiling artifacts of the old PNG masks.
const TORN_PATHS = [
  'M0,26 L0,40 L1000,40 L1000,22 L978,27 L951,18 L919,29 L897,21 L866,31 L838,20 L811,28 L781,17 L748,26 L723,33 L692,19 L664,27 L633,15 L601,25 L574,32 L543,20 L512,28 L481,16 L452,26 L424,34 L396,21 L367,29 L339,18 L308,27 L281,35 L252,22 L224,30 L196,17 L167,26 L138,33 L109,20 L82,29 L54,18 L27,25 Z',
  'M0,18 L0,40 L1000,40 L1000,28 L971,20 L944,31 L912,17 L887,29 L858,23 L826,33 L799,16 L768,27 L741,35 L713,19 L682,28 L651,15 L622,26 L596,34 L565,21 L534,30 L502,17 L473,27 L447,36 L418,22 L387,31 L356,18 L329,28 L303,34 L272,20 L243,29 L213,16 L186,27 L158,35 L128,21 L99,30 L71,17 L42,26 Z',
  'M0,30 L0,40 L1000,40 L1000,16 L974,26 L942,19 L916,30 L884,22 L853,32 L827,17 L794,28 L766,21 L737,31 L706,18 L678,29 L648,36 L617,20 L588,28 L557,15 L529,25 L498,33 L468,19 L441,29 L409,17 L382,27 L353,35 L323,21 L294,30 L263,18 L237,28 L206,34 L178,20 L149,29 L119,16 L92,26 L63,33 L33,22 Z',
  'M0,22 L0,40 L1000,40 L1000,25 L969,32 L938,18 L907,28 L879,16 L848,26 L822,34 L791,20 L759,30 L732,17 L701,27 L673,35 L644,21 L612,29 L583,16 L556,26 L524,33 L493,19 L466,28 L436,36 L407,22 L377,31 L348,18 L318,27 L292,34 L261,20 L232,29 L202,16 L174,26 L146,33 L116,19 L88,28 L58,17 L29,24 Z',
];

const maskFor = (variant, height) => {
  const d = TORN_PATHS[variant % TORN_PATHS.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 40' preserveAspectRatio='none'><path d='${d}' fill='black'/></svg>`;
  const uri = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  return {
    maskImage: `${uri}, linear-gradient(#000,#000)`,
    WebkitMaskImage: `${uri}, linear-gradient(#000,#000)`,
    maskRepeat: 'no-repeat, no-repeat',
    WebkitMaskRepeat: 'no-repeat, no-repeat',
    maskSize: `100% ${height}px, 100% calc(100% - ${height - 1}px)`,
    WebkitMaskSize: `100% ${height}px, 100% calc(100% - ${height - 1}px)`,
    maskPosition: 'top, left bottom',
    WebkitMaskPosition: 'top, left bottom',
    marginTop: `-${height}px`,
  };
};

// Wraps a full-width section and tears its top edge into the section above.
const TornSection = ({ variant = 0, height = 36, style = {}, children, ...rest }) => (
  <section style={{ position: 'relative', zIndex: 3, ...maskFor(variant, height), ...style }} {...rest}>
    {children}
  </section>
);

export default TornSection;
