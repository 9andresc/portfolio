import React from 'react';

import { Container, IconProps } from './common';

export function VSCode({ size = 'medium', styles, title = 'vscode', titleId = 'vscode' }: IconProps) {
  return (
    <Container ratio={1} size={size} styles={styles} title={title} titleId={titleId} viewBox="0 0 100 100">
      <path
        d="M91.8148 14.7157L73.271 5.78714C71.1247 4.75366 68.5593 5.1896 66.8746 6.87415L6.16849 62.224C4.53565 63.7129 4.53753 66.2835 6.17254 67.7699L11.1312 72.2777C12.4679 73.493 14.481 73.5823 15.9202 72.4907L89.0245 17.032C91.477 15.1715 94.9996 16.9207 94.9996 19.9992V19.7839C94.9996 17.623 93.7618 15.6532 91.8148 14.7157Z"
        fill="#0065A9"
      />
      <path
        d="M91.8148 85.2835L73.271 94.2121C71.1247 95.2454 68.5593 94.8094 66.8746 93.1251L6.16849 37.7752C4.53565 36.2864 4.53753 33.7157 6.17254 32.2293L11.1312 27.7214C12.4679 26.5062 14.481 26.4168 15.9202 27.5086L89.0245 82.9671C91.477 84.8275 94.9996 83.0785 94.9996 79.9999V80.2154C94.9996 82.3761 93.7618 84.3459 91.8148 85.2835Z"
        fill="#007ACC"
      />
      <path
        d="M73.272 94.2136C71.125 95.2461 68.5597 94.8098 66.875 93.1251C68.9506 95.2007 72.5 93.7305 72.5 90.795V9.20489C72.5 6.26934 68.9506 4.79919 66.875 6.87495C68.5597 5.19025 71.125 4.75369 73.272 5.78626L91.8127 14.7026C93.7611 15.6395 95 17.6101 95 19.7719V80.2284C95 82.3902 93.7611 84.3607 91.8127 85.2976L73.272 94.2136Z"
        fill="#1F9CF0"
      />
      <defs>
        <clipPath id="clip0">
          <rect width="90" height="90" fill="white" transform="translate(5 5)" />
        </clipPath>
      </defs>
    </Container>
  );
}
