import { useEffect, useState } from 'react';
import { useParcels } from 'context/ParcelsContext';
import { SortingPageContainer } from '../SortingPage/SortingPage.styled';
import { lockScreen } from 'helpers/screenLock';
import { CheckingForm } from './CheckingForm';

export const CheckingPage = () => {
  const { allParcels } = useParcels();
  const [currentParcel, setCurrentParcel] = useState({
    'Visit Name': '-',
    'Driver Name': '-',
  });

  const detectRoute = parcelID => {
    const parcel = allParcels.find(parcel => {
      return (
        parcel['Visit Name'] === parcelID ||
        parcel['Visit Name']?.includes(parcelID) ||
        false
      );
    });

    setCurrentParcel(
      parcel || { 'Visit Name': parcelID, 'Driver Name': 'Немає в маршруті' }
    );
  };

  useEffect(() => {
    lockScreen();
  }, []);

  return (
    <SortingPageContainer>
      Checking Page
      {/* <ParcelInfo currentParcel={currentParcel} /> */}
      <CheckingForm />
    </SortingPageContainer>
  );
};
