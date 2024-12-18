import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  parcelID: yup.string(),
});

export const SearchForm = ({ getParcel }) => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = ({ parcelID }) => {
    getParcel(parcelID);
    reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
      <label htmlFor="parcelID">Відскануйте ШК:</label>
      <input type="text" {...register('parcelID')} id="parcelID" />
      <button type="button" onClick={() => getParcel('SHUA8017159134')}>
        Оновити
      </button>
      <button type="submit">Знайти</button>
    </form>
  );
};
