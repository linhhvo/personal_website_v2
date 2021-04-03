import React from 'react';

export const SocialIcons = () => {
  return (
    <svg width="0" height='0' style={{position: 'absolute'}}>
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(130)">
          <stop offset="-30%" stopColor="var(--social-stop-1)" />
          <stop offset="100%" stopColor="var(--social-stop-2)" />
        </linearGradient>

        <symbol id='Linkedin' viewBox="0 0 30 30">
          <path
            d="M 15.056127,0.11384999 C 6.7723769,0.11384999 0.0561269,6.8301 0.0561269,15.11385 c 0,8.28375 6.71625,14.999999 15.0000001,14.999999 8.283751,0 15,-6.716249 15,-14.999999 0,-8.28375 -6.716249,-15.00000001 -15,-15.00000001 z M 9.4261264,6.8676001 c 1.0524996,0 1.7537516,0.70125 1.7537516,1.63625 0,0.935 -0.701252,1.6362499 -1.8700015,1.6362499 -1.0525,0.0012 -1.7537496,-0.7012499 -1.7537496,-1.6362499 0,-0.935 0.7012496,-1.63625 1.8699995,-1.63625 z M 11.306126,21.36385 H 7.5561269 v -9.999999 h 3.7499991 z m 12.5,0 h -3.529998 v -5.464999 c 0,-1.51125 -0.94125,-1.860001 -1.293751,-1.860001 -0.352501,0 -1.530001,0.232501 -1.530001,1.860001 0,0.232499 0,5.464999 0,5.464999 h -3.64625 v -9.999999 h 3.647501 v 1.395 c 0.470001,-0.813751 1.41125,-1.395 3.176251,-1.395 1.764999,0 3.176248,1.395 3.176248,4.535 z" />
        </symbol>
        <symbol id='Github' viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </symbol>
        <symbol id='Email' viewBox="0 0 24 24">
          <path
            d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
        </symbol>

      </defs>
    </svg>
  );
};
