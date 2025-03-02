import { Container, RootWrapper } from './SharedLayout.styled';
import { PageHeader } from 'components/Header/Header';
import { checkLocalStorage } from 'context/ParcelsContext';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const bodyClassList = document.getElementsByTagName('body')[0].classList;

const SharedLayout = () => {
  const [isDarkMode, setDarkMode] = useState(checkLocalStorage('darkMode'));

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(!isDarkMode));
  };

  useEffect(() => {
    isDarkMode
      ? bodyClassList.add('darkMode')
      : bodyClassList.remove('darkMode');
  }, [isDarkMode]);

  return (
    <RootWrapper className={isDarkMode && 'darkMode'}>
      <PageHeader toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main>
        <Container>
          <Suspense fallback={<>"Loading.."</>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </RootWrapper>
  );
};

export default SharedLayout;
