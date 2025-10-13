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
    .required('Внесіть список ШК')
    .min(14, 'Довжина рядка має перевищувати 14 символів'),
});

export const CheckingForm = ({ checkRoute }) => {
  const { isLoading } = useParcels();
  const {
    register,
    handleSubmit,
    reset,
    control,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = ({ dirtyText }) => {
    checkRoute(dirtyText);

    reset();
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
        placeholder={isLoading ? 'Завантаження...' : 'Внесіть список ШК'}
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
            Перевірити
          </SearchButton>
        </li>
      </ButtonsListWrapper>
    </SearchFormWrapper>
  );
};
