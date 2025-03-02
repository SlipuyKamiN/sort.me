import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const RootWrapper = styled.main`
  width: 100%;
  min-height: 100vh;

  color: ${colors.primaryAccent};

  transition: ${transition.duration};

  &.darkMode {
    color: ${colors.secondary};

    header.darkMode {
      border-bottom: 3px solid ${colors.secondary};
      box-shadow: ${colors.secondary} 0px 0px 10px;
    }

    button.darkMode {
      border-color: ${colors.secondary};

      color: ${colors.secondary};
    }

    input.darkMode {
      color: ${colors.secondary};
      border-color: ${colors.secondary};

      &::placeholder {
        color: #ffffff66;
      }
    }
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
