import React from 'react';

const Default = ({ width, height, color, ...props }) => (
  <svg
    fill="none"
    height="512"
    viewBox="0 0 20 20"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <linearGradient
      id="paint0_linear_3139_70"
      gradientUnits="userSpaceOnUse"
      x1="10"
      x2="10"
      y1="1"
      y2="19"
    >
      <stop offset="0" stop-color="#ee9ae5" />
      <stop offset="1" stop-color="#5961f9" />
    </linearGradient>
    <g fill="url(#paint0_linear_3139_70)">
      <path d="m17.5 1h-3.5v6h5v-4.5c0-.82843-.6716-1.5-1.5-1.5z" />
      <path d="m19 9h-5v10h3.5c.8284 0 1.5-.6716 1.5-1.5z" />
      <path d="m1 14h11v5h-9.5c-.82843 0-1.5-.6716-1.5-1.5z" />
      <path d="m2.5 1c-.82843 0-1.5.67157-1.5 1.5v9.5h11v-11z" />
    </g>
  </svg>
);

export default Default;
