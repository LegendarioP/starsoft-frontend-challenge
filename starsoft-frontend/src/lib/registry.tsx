import { GlobalStyles } from '@/styles/globals';
import { theme } from '@/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
