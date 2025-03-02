import { DarkModeToggler, Header, LogoLink } from './Header.styled';
import { useParcels } from 'context/ParcelsContext';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { toggleDarkMode } from 'helpers/toggleDarkMode';

export const PageHeader = ({ setDarkMode, isDarkMode }) => {
  const { selectedCityData, setCityID } = useParcels();

  return (
    <Header className="darkMode">
      <LogoLink to="/" onClick={() => setCityID('')}>
        SORT.{selectedCityData?.cityName || 'ME'}
      </LogoLink>
      <DarkModeToggler
        onClick={() => toggleDarkMode(isDarkMode, setDarkMode)}
        className="darkMode"
      >
        {isDarkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
      </DarkModeToggler>
    </Header>
  );
};
