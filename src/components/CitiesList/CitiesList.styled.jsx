import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CityList = styled.ul`
  margin: auto;

  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CityLink = styled(Link)`
  display: block;

  width: 120px;

  padding: 5px 10px;
  background-color: tomato;
  border-radius: 4px;
`;
