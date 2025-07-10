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
} from './SearchForm.styled';
import { useEffect } from 'react';
import { useParcels } from 'context/ParcelsContext';

const validationSchema = yup.object().shape({
  parcelID: yup
    .string()
    .required('Відскануйте номер ШК')
    .test(
      'length-4-or-14',
      'Номер ШК має містити 4 або 14 символів',
      value => value && (value.length === 4 || value.length === 14)
    )
    .max(14, 'Довжина рядка не може перевищувати 14 символів')
    .matches(/[^a-zA-Z]/, 'Номер ШК, повинен містити цифри'),
});

export const SearchForm = ({ getParcel }) => {
  const { isLoading } = useParcels();
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    control,
    setValue,
    formState: { errors },
  } = useForm({
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
onKeyDown={(e)=>{
if(e.key === "Enter") {e.preventDefault();}
}}
    >
      <FormInput
        className="darkMode"
        type="text"
        {...register('parcelID')}
        id="parcelID"
        onInput={({ target: { value } }) => {
          setValue('parcelID', value);
          if (value.length >= 14) {
            handleSubmit(handleFormSubmit)();
          }
        }}
        onKeyUp={({ target: { value } }) => {
          setValue('parcelID', value);

          if (value.length >= 14) {
            handleSubmit(handleFormSubmit)();
          }
        }}
        onPaste={({ target: { value } }) => {
          setValue('parcelID', value);

          if (value.length >= 14) {
            handleSubmit(handleFormSubmit)();
          }
        }}
        maxLength={14}
        placeholder={isLoading ? 'Завантаження...' : 'Відскануйте ШК'}
        required
        autoFocus
        disabled={isLoading}
      />
      {errors.parcelID && <ErrMessage>{errors.parcelID.message}</ErrMessage>}
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
