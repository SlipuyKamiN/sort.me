import styled from '@emotion/styled';
import { transition, colors } from 'styles/common/vars';
import { Link } from 'react-router-dom';

export const CityList = styled.ul`
  padding: 20px;
  margin: auto;

  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CityLink = styled(Link)`
  display: block;
  cursor: pointer;

  width: 120px;

  padding: 5px 10px;
  border: 1px solid #0a0a11;
  border-radius: 6px;

  font-weight: 600;
  font-size: 18px;

  transition: ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.primaryWhite};
    background-color: ${colors.gray};
  }
`;
