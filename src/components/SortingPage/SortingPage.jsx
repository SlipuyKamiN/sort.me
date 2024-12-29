import { useEffect, useState } from 'react';
import { ParcelInfo } from './ParcelInfo';
import { SearchForm } from './SearchForm';
import { useParcels } from 'context/ParcelsContext';
import { SortingPageContainer } from './SortingPage.styled';
import { lockScreen } from 'helpers/screenLock';

export const SortingPage = () => {
  const { allParcels } = useParcels();
  const [currentParcel, setCurrentParcel] = useState({
    'Visit Name': '-',
    'Driver Name': '-',
  });

  const getParcel = parcelID => {
    const parcel = allParcels.find(
      parcel =>
        parcel['Visit Name'] === parcelID ||
        parcel['Visit Name'].includes(parcelID)
    );

    setCurrentParcel(
      parcel || { 'Visit Name': parcelID, 'Driver Name': 'Немає в маршруті' }
    );
  };

  useEffect(() => {
    lockScreen();
  }, []);

  return (
    <SortingPageContainer>
      <ParcelInfo currentParcel={currentParcel} />
      <SearchForm getParcel={getParcel} />
    </SortingPageContainer>
  );
};
