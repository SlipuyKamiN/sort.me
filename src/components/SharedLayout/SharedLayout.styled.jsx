import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const RootWrapper = styled.div`
  color: ${colors.primaryAccent};
  background-color: ${colors.secondary};

  transition: ${transition.duration};

  &.darkMode {
    color: ${colors.secondary};
    background-color: ${colors.primaryAccent};
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 60px 0 0;

  /* outline: tomato 1px solid; */

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 78px 0 0;
  }
`;
