import React from 'react';

import { theme } from 'utils/styles';

import { Container, IconProps } from './common';

export function LinkedIn({ color, size, title, titleId }: IconProps) {
  return (
    <Container ratio={1} size={size} title={title} titleId={titleId} viewBox="0 0 50 50">
      <path
        d="M25 0C11.195 0 0 11.195 0 25C0 38.805 11.195 50 25 50C38.805 50 50 38.805 50 25C50 11.195 38.805 0 25 0ZM17.7353 37.793H11.6467V19.4752H17.7353V37.793ZM14.6912 16.9739H14.6515C12.6083 16.9739 11.2869 15.5674 11.2869 13.8096C11.2869 12.0121 12.6488 10.6445 14.7316 10.6445C16.8144 10.6445 18.0962 12.0121 18.1358 13.8096C18.1358 15.5674 16.8144 16.9739 14.6912 16.9739ZM39.6896 37.793H33.6018V27.9934C33.6018 25.5306 32.7202 23.851 30.5172 23.851C28.8353 23.851 27.8336 24.984 27.3933 26.0777C27.2324 26.469 27.1931 27.0161 27.1931 27.5635V37.793H21.1048C21.1048 37.793 21.1845 21.1937 21.1048 19.4752H27.1931V22.0688C28.0022 20.8206 29.4498 19.0453 32.6801 19.0453C36.6859 19.0453 39.6896 21.6633 39.6896 27.2896V37.793Z"
        fill={color}
      />
    </Container>
  );
}

LinkedIn.defaultProps = {
  color: theme.colors.dark,
  size: 1,
  title: 'linkedin',
  titleId: 'linkedin',
};
