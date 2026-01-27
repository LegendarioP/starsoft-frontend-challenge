import { motion } from "motion/react";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.main`
  flex: 1;
  padding: 11.8125rem 8.53125rem;
  display: flex;
  flex-direction: column;
  gap: 11.8125rem;
`;

export const ProductGrid = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5625rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaginationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6875rem;
  width: max-content;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 0.625rem;
  background-color: #393939;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const ProgressBar = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
`;

export const LoadMoreButton = styled.button`
  padding: 1.875rem 7.9375rem;
  width: max-content;
  background-color: #393939;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.625rem;
  font-weight: 600;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
