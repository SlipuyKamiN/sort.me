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

const validationSchema = yup.object().shape({
  parcelID: yup.string(),
});

export const SearchForm = ({ getParcel }) => {
  const { selectedCityData, setCityID } = useParcels();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = ({ parcelID }) => {
    getParcel(parcelID);
    reset();
  };

  return (
    <SearchFormWrapper
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <label htmlFor="parcelID">Відскануйте ШК:</label>
      <FormInput type="text" {...register('parcelID')} id="parcelID" />

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
