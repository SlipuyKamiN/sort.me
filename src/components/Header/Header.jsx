import { NavLink } from 'react-router-dom';
import { Header, LogoLink } from './Header.styled';
import { useParcels } from 'context/ParcelsContext';

export const PageHeader = () => {
  const { selectedCityData, setCityID } = useParcels();
  // console.log(selectedCityData);

  return (
    <Header>
      <LogoLink to="/" onClick={() => setCityID('')}>
        SORT.{selectedCityData?.cityName || 'ME'}
      </LogoLink>
    </Header>
  );
};
