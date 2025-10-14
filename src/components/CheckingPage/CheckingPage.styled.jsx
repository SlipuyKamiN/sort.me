import styled from '@emotion/styled';
import { transition } from 'styles/common/vars';

export const CheckingFormWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

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
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;

  line-height: 1.5;

  li:not(:last-of-type) {
    margin-bottom: 1px;
  }

  h3 {
    margin-bottom: 10px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    width: 16px;
    height: 20px;
    opacity: 0.5;
    margin-left: auto;

    transition: ${transition.duration};
  }

  a:hover,
  a:focus {
    opacity: 1;
  }
`;

export const LostedCheckbox = styled.input`
  position: relative;
  width: 18px;
  height: 18px;

  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #00000033;
  appearance: none;

  &:checked::after {
    content: '✔';
    position: absolute;
    top: -12px;
    left: 0;
    font-size: 24px;
    opacity: 0.8;
  }
`;
