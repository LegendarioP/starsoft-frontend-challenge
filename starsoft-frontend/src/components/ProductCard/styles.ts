import { motion } from "motion/react";
import styled from "styled-components";

export const CardContainer = styled(motion.li)`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 1.625rem 1.5rem;
  width: 100%;
  max-width: 21.5625rem;
  border-radius: 0.5rem;
  height: max-content;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.0625rem;
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.slateCustom};
  width: 100%;
  height: 16.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayCustom};
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1.25rem;
`;

export const PriceRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3125rem;
  align-items: center;
`;

export const PriceText = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
`;

export const BuyButton = styled(motion.button)`
  width: 100%;
  padding: 1.375rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
