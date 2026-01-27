import { motion } from "motion/react";
import styled from "styled-components";

export const CheckoutContainer = styled(motion.div)`
  width: 100%;
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-direction: row;
  gap: 1.9375rem;
  background-color: #2b2b2b;
  border-radius: 0.5rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  width: 10.0625rem;
  height: 10.0625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.slateCustom};
  border-radius: 0.5rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  min-width: 0;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ProductName = styled.span`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
`;

export const ProductDescription = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 300;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.grayCustom};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ActionsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuantityControl = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  max-width: 7.1875rem;
`;

export const QuantityButton = styled.button`
  padding: 1rem 0.5rem;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.2s;

  &:hover svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const QuantityInput = styled(motion.input)`
  outline: none;
  width: 100%;
  text-align: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
`;

export const RemoveButton = styled.button`
  width: 2.6875rem;
  height: 2.6875rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}e6;
  }
`;
