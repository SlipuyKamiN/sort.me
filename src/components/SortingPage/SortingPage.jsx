import { useState } from 'react';
import { ParcelInfo } from './ParcelInfo';
import { SearchForm } from './SearchForm';
import { useParcels } from 'context/ParcelsContext';
import { SortingPageContainer } from './SortingPage.styled';

export const SortingPage = () => {
  const { allParcels } = useParcels();
  const [currentParcel, setCurrentParcel] = useState({});

  const getParcel = parcelID => {
    const parcel = allParcels.find(parcel => parcel['Visit Name'] === parcelID);
    console.log(parcel);

    setCurrentParcel(
      parcel || { 'Visit Name': parcelID, 'Driver Name': 'Немає в маршруті' }
    );
  };

  return (
    <SortingPageContainer>
      <ParcelInfo currentParcel={currentParcel || ''} />
      <SearchForm getParcel={getParcel} />
    </SortingPageContainer>
  );
};
