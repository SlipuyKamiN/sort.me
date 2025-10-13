import styled from '@emotion/styled';

export const RoutesList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  li:not(:first-of-type) {
    opacity: 0.5;
    font-size: 25px;
  }

  li:first-of-type {
    font-size: 40px;
  }
`;

export const CheckTitle = styled.h2`
  padding: 40px 0 0;
`;

export const CheckLists = styled.ul`
  padding: 20px 0;

  display: flex;
  justify-content: space-between;

  line-height: 1.5;
`;
