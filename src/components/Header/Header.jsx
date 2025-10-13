import { DarkModeToggler, Header, LogoLink } from './Header.styled';
import { useParcels } from 'context/ParcelsContext';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

export const PageHeader = ({ toggleDarkMode, isDarkMode }) => {
  const { selectedCityData, setCityID } = useParcels();
  const { pathname } = useLocation();

  return (
    <Header className="darkMode">
      <LogoLink to="/" onClick={() => setCityID('')}>
        {pathname.includes('checking') ? 'CHECK' : 'SORT'}.
        {selectedCityData?.cityName || 'ME'}
      </LogoLink>
      <DarkModeToggler onClick={toggleDarkMode} className="darkMode">
        {isDarkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
      </DarkModeToggler>
    </Header>
  );
};
