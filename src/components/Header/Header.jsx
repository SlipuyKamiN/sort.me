import { NavLink } from 'react-router-dom';
import { Header } from './Header.styled';
import { useParcels } from 'context/ParcelsContext';

export const PageHeader = () => {
  const { selectedCityData, setCityID } = useParcels();
  // console.log(selectedCityData);

  return (
    <Header>
      <NavLink to="/" onClick={() => setCityID('')}>
        SORT.{selectedCityData?.cityName || 'ME'}
      </NavLink>
    </Header>
  );
};
