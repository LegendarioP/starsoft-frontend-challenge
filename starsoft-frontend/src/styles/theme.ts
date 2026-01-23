export const theme = {
  colors: {
    background: '#232323',
    foreground: '#171717',
    primary: '#FF8310',
    card: '#191A20',
    grayCustom: '#CCCCCC',
    slateCustom: '#22232C',
    white: '#FFFFFF',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

export type Theme = typeof theme;
