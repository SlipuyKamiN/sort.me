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
} from '../SortingPage/SearchForm.styled';
import { useEffect } from 'react';
import { useParcels } from 'context/ParcelsContext';
import { CheckingFormWrapper } from './CheckingPage.styled';

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
    setFocus,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
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
    <CheckingFormWrapper
      className="plausible-event-name=check"
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormInput
        {...register('dirtyText')}
        className="darkMode"
        type="text"
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
    </CheckingFormWrapper>
  );
};
