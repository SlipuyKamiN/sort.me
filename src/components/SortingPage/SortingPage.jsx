import { useState } from 'react';
import { ParcelInfo } from './ParcelInfo';
import { SearchForm } from './SearchForm';
import { useParcels } from 'context/ParcelsContext';

export const SortingPage = () => {
  const { allParcels } = useParcels();
  const [currentParcel, setCurrentParcel] = useState({});

  const getParcel = parcelID => {
    const parcel = allParcels.find(parcel => parcel['Visit Name'] === parcelID);

    setCurrentParcel(
      parcel || { 'Visit Name': parcelID, 'Driver Name': 'Немає в маршруті' }
    );
  };

  return (
    <section>
      <ParcelInfo currentParcel={currentParcel || ''} />
      <SearchForm getParcel={getParcel} />
    </section>
  );
};
