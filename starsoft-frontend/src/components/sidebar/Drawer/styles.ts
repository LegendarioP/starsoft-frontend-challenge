import { motion } from "motion/react";
import styled from "styled-components";

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
`;

export const DrawerPanel = styled(motion.div)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.125rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 42.4375rem;
  height: 100%;
  right: 0;
  padding: 3.9375rem 1.9375rem;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: max-content;
  padding: 0 4.375rem;
  display: flex;
  flex-direction: row;
  gap: 5.25rem;
  align-items: center;
`;

export const BackButton = styled.button`
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #373737;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ArrowIcon = styled.div`
  width: 2.0625rem;
  height: 2.0625rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6875rem;
  overflow-x: hidden;
  overflow-y: scroll;
  flex: 1;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0.5rem;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.grayCustom};
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  padding-top: 4.375rem;
  gap: 4.375rem;
`;

export const TotalRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const TotalLabel = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  align-items: center;
`;

export const TotalValue = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1.8125rem 0;
  border-radius: 0.5rem;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary}e6;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
