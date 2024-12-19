import styled from '@emotion/styled';
import { transition, colors } from 'styles/common/vars';
import { Link } from 'react-router-dom';

export const CityListSection = styled.section`
  padding: 20px;
  margin: auto;
`;

export const SectionDescription = styled.p`
  margin-bottom: 10px;
`;

export const CityList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CityLink = styled(Link)`
  display: block;
  margin: 0 auto;
  cursor: pointer;

  width: 100%;
  max-width: 340px;

  padding: 10px;
  border: 1px solid #0a0a11;
  border-radius: 6px;

  font-weight: 600;
  font-size: 18px;
  text-align: center;

  transition: ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.primaryWhite};
    background-color: ${colors.gray};
  }
`;
