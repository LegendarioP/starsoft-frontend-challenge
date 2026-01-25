import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.4375rem 2.6875rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.21);
  height: max-content;
`;

export const CartButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5625rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.625rem;
  cursor: pointer;
  background: transparent;
  border: none;

  p {
    margin: 0;
  }
`;
