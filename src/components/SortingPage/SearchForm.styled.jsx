import styled from '@emotion/styled';
import { Form } from 'react-hook-form';
import { colors, transition } from 'styles/common/vars';

export const SearchFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;

  font-size: 18px;
  font-weight: 600;

  border-radius: 6px;
  border: 2px solid #000000;

  &::placeholder {
    color: #00000066;
  }
`;
export const ButtonsListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 10px;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;

  width: 140px;

  padding: 10px;
  border: 1px solid #0a0a11;
  border-radius: 6px;

  font-weight: 600;
  font-size: 18px;

  color: ${colors.primaryBlack};
  background-color: transparent;
  transition: ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.primaryWhite};
    background-color: ${colors.gray};
  }
`;

export const SearchButton = styled(Button)``;

export const RefreshButton = styled(Button)``;
