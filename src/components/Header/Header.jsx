import {
  DarkModeToggler,
  Header,
  LogoLink,
  LogoWrapper,
} from './Header.styled';
import { useParcels } from 'context/ParcelsContext';
import { useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

export const PageHeader = ({ toggleDarkMode, isDarkMode }) => {
  const [mode, setMode] = useState('SORT');
  const { selectedCityData, setCityID } = useParcels();

  return (
    <Header className="darkMode">
      <LogoWrapper>
        <LogoLink
          to={
            selectedCityData?.cityName
              ? `/${mode === 'CHECK' ? 'sorting' : 'checking'}/${
                  selectedCityData?.cityName
                }`
              : ''
          }
          onClick={() =>
            selectedCityData?.cityName &&
            setMode(prev => (prev === 'CHECK' ? 'SORT' : 'CHECK'))
          }
        >
          {mode}.
        </LogoLink>
        <LogoLink
          to="/"
          onClick={() => {
            setCityID('');
            setMode('SORT');
          }}
        >
          {selectedCityData?.cityName || 'ME'}
        </LogoLink>
      </LogoWrapper>
      <DarkModeToggler onClick={toggleDarkMode} className="darkMode">
        {isDarkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
      </DarkModeToggler>
    </Header>
  );
};
