import { Container, RootWrapper } from './SharedLayout.styled';
import { PageHeader } from 'components/Header/Header';
import { checkLocalStorage } from 'context/ParcelsContext';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const [isDarkMode, setDarkMode] = useState(checkLocalStorage('darkMode'));

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(!isDarkMode));
  };

  return (
    <RootWrapper className={isDarkMode && 'darkMode'}>
      <PageHeader toggleDarkMode={toggleDarkMode} />
      <Container>
        <Suspense fallback={<>"Loading.."</>}>
          <Outlet />
        </Suspense>
      </Container>
    </RootWrapper>
  );
};

export default SharedLayout;
