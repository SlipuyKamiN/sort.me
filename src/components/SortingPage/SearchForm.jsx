import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ButtonsListWrapper,
  FormInput,
  LoadingBlinker,
  RefreshButton,
  SearchButton,
  SearchFormWrapper,
} from './SearchForm.styled';
import { useEffect } from 'react';
import { useParcels } from 'context/ParcelsContext';

const validationSchema = yup.object().shape({
  parcelID: yup.string().required(),
});

export const SearchForm = ({ getParcel }) => {
  const { isLoading } = useParcels();
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
        placeholder={isLoading ? 'Завантаження...' : 'Відскануйте ШК'}
        required
        autoFocus
        disabled={isLoading}
      />
      {isLoading && <LoadingBlinker />}
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
