import React from 'react';

export const ThemeSwitch = () => {
  return (
    <svg viewBox="0 0 32 32">
      <linearGradient id="switch-gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stopColor="var(--switch-stop-1)" />
        <stop offset="100%" stopColor="var(--switch-stop-2)" />
      </linearGradient>
      <path fill='url(#switch-gradient)' d="M16.13 1.781c-5.371 0-8.19 4.236-8.19 8.090 0 4.324 4.024 7.043 4.024 14.114h4.075c0 0 3.827 0.018 3.943 0.018 0.116-7.123 4.078-9.925 4.078-14.166 0.001-3.619-2.559-8.056-7.93-8.056zM19.474 25.031h-7c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h7c0.275 0 0.5-0.224 0.5-0.5s-0.225-0.5-0.5-0.5zM19.474 27.031h-7c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h7c0.275 0 0.5-0.224 0.5-0.5s-0.225-0.5-0.5-0.5zM12.974 29.031c0 0 0 0.447 0 1 0 0.552 0.447 1 1 1h4.014c0.553 0 1-0.448 1-1 0-0.553 0-1 0-1h-6.014z" />
    </svg>
  );
};
