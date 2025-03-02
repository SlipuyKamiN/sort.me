import { DarkModeToggler, Header, LogoLink } from './Header.styled';
import { useParcels } from 'context/ParcelsContext';
import { BsMoonStars, BsSun } from 'react-icons/bs';

export const PageHeader = ({ toggleDarkMode, isDarkMode }) => {
  const { selectedCityData, setCityID } = useParcels();

  return (
    <Header className="darkMode">
      <LogoLink to="/" onClick={() => setCityID('')}>
        SORT.{selectedCityData?.cityName || 'ME'}
      </LogoLink>
      <DarkModeToggler onClick={toggleDarkMode} className="darkMode">
        {isDarkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
      </DarkModeToggler>
    </Header>
  );
};
