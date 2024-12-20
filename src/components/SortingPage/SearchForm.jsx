import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ButtonsListWrapper,
  FormInput,
  RefreshButton,
  SearchButton,
  SearchFormWrapper,
} from './SearchForm.styled';
import { useEffect } from 'react';

const validationSchema = yup.object().shape({
  parcelID: yup.string().required(),
});

export const SearchForm = ({ getParcel }) => {
  const { register, handleSubmit, reset, setFocus, control, setValue } =
    useForm({
      resolver: yupResolver(validationSchema),
    });

  const handleFormSubmit = ({ parcelID }) => {
    getParcel(parcelID.trim());
    setTimeout(reset, 100);
  };

  useEffect(() => {
    setFocus('parcelID');
  }, [setFocus]);

  return (
    <SearchFormWrapper
      autoComplete="off"
      control={control}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      {/* <label htmlFor="parcelID">Відскануйте ШК:</label> */}
      <FormInput
        type="text"
        {...register('parcelID')}
        id="parcelID"
        onInput={e => {
          setValue('parcelID', e.target.value);
          if (e.target.value.length >= 14) {
            handleSubmit(handleFormSubmit)();
          }
        }}
        onKeyUp={e => {
          setValue('parcelID', e.target.value);

          if (e.target.value.length >= 14) {
            handleSubmit(handleFormSubmit)();
          }
        }}
        onPaste={e => {
          setValue('parcelID', e.target.value);

          if (e.target.value.length >= 14) {
            handleSubmit(handleFormSubmit)();
          }
        }}
        maxLength={14}
        placeholder="Відскануйте ШК"
        required
        autoFocus
      />
      <ButtonsListWrapper>
        <li>
          <RefreshButton type="button" onClick={() => window.location.reload()}>
            Оновити
          </RefreshButton>
        </li>
        <li>
          <SearchButton type="submit">Знайти</SearchButton>
        </li>
      </ButtonsListWrapper>
    </SearchFormWrapper>
  );
};
