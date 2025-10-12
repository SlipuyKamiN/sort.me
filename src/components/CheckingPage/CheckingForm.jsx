import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ButtonsListWrapper,
  ErrMessage,
  FormInput,
  LoadingBlinker,
  RefreshButton,
  SearchButton,
  SearchFormWrapper,
} from '../SortingPage/SearchForm.styled';
import { useEffect } from 'react';
import { useParcels } from 'context/ParcelsContext';

const validationSchema = yup.object().shape({
  dirtyText: yup
    .string()
    .required('Відскануйте номер ШК')
    .min(14, 'Довжина рядка не може перевищувати 14 символів'),
});

const extractParcels = dirtyString => {
  const pattern = /SH[A-Z]{2}\d{10}/gi;
  const clearArray = dirtyString
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/\s+/g, '')
    .toUpperCase()
    .match(pattern);
  return clearArray ? clearArray : [];
};

const sortParcelsByRoutes = ({ allParcels, clearArray }) => {
  const sortedScannedParcels = {};

  clearArray.forEach(parcelID => {
    const parcel = allParcels.find(
      parcel =>
        parcel['Visit Name'] === parcelID ||
        parcel['Visit Name']?.includes(parcelID)
    );

    if (parcel) {
      const routeName = parcel['Vehicle plate'];
      if (!sortedScannedParcels[routeName]) {
        sortedScannedParcels[routeName] = [];
      }
      sortedScannedParcels[routeName].push(parcel);
    }
  });

  return sortedScannedParcels;
};

export const CheckingForm = () => {
  const { allParcels } = useParcels();
  const { isLoading } = useParcels();
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = ({ dirtyText }) => {
    setTimeout(() => {
      sortParcelsByRoutes({
        allParcels,
        clearArray: extractParcels(dirtyText),
      });
      reset();
      requestAnimationFrame(() => {
        setFocus('dirtyText');
      });
    }, 125);
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      setFocus('dirtyText');
    });
  }, [setFocus]);

  return (
    <SearchFormWrapper
      autoComplete="off"
      control={control}
      onSubmit={handleSubmit(handleFormSubmit)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    >
      <FormInput
        className="darkMode"
        type="text"
        {...register('dirtyText')}
        id="dirtyText"
        placeholder={isLoading ? 'Завантаження...' : 'Відскануйте ШК'}
        required
        autoFocus
        disabled={isLoading}
      />
      {errors.dirtyText && <ErrMessage>{errors.dirtyText.message}</ErrMessage>}
      {isLoading && <LoadingBlinker />}
      <ButtonsListWrapper>
        <li>
          <RefreshButton
            className="darkMode"
            type="button"
            onClick={() => window.location.reload()}
          >
            Оновити
          </RefreshButton>
        </li>
        <li>
          <SearchButton className="darkMode" type="submit">
            Знайти
          </SearchButton>
        </li>
      </ButtonsListWrapper>
    </SearchFormWrapper>
  );
};
