import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  padding: 0 20px;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 60px;
  border-bottom: 3px solid black;
  backdrop-filter: blur(10px);

  box-shadow: #000000 0px 0px 10px;
`;

export const LogoLink = styled(Link)`
  display: block;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
`;
