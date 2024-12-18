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
import { useParcels } from 'context/ParcelsContext';
import { useEffect } from 'react';

const validationSchema = yup.object().shape({
  parcelID: yup.string(),
});

export const SearchForm = ({ getParcel }) => {
  const { selectedCityData, setCityID } = useParcels();

  const { register, handleSubmit, reset, getValues, setFocus } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = ({ parcelID }) => {
    getParcel(parcelID);
    reset();
  };

  useEffect(() => {
    setFocus('parcelID');
  }, [setFocus]);

  return (
    <SearchFormWrapper
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <label htmlFor="parcelID">Відскануйте ШК:</label>
      <FormInput
        type="text"
        {...register('parcelID')}
        id="parcelID"
        onKeyUp={() => {
          if (getValues('parcelID').length >= 14) {
            handleSubmit(handleFormSubmit)();
          }
        }}
        onKeyDown={() => {
          if (getValues('parcelID').length >= 14) {
            handleSubmit(handleFormSubmit)();
          }
        }}
        maxLength={14}
        required
        autoFocus
      />
      <ButtonsListWrapper>
        <li>
          <RefreshButton
            type="button"
            onClick={() => setCityID(selectedCityData.cityID)}
          >
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
