import '@testing-library/jest-dom/vitest';
import React, { ComponentProps } from 'react';
import { vi } from 'vitest';


vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, ...props }: ComponentProps<'img'>) =>
    React.createElement('img', { src, alt, width, height, ...props }),
}));
