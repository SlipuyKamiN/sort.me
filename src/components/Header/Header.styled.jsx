import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors } from 'styles/common/vars';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  padding: 0 20px;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 60px;
  backdrop-filter: blur(10px);

  border-bottom: 3px solid ${colors.primaryAccent};
  box-shadow: ${colors.primaryAccent} 0px 0px 10px;
`;

export const LogoLink = styled(Link)`
  display: block;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const DarkModeToggler = styled.button`
  background-color: transparent;
  color: ${colors.primaryAccent};
`;
