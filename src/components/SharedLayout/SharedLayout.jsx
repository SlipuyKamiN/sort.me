import { Container, RootWrapper } from './SharedLayout.styled';
import { PageHeader } from 'components/Header/Header';
import { checkLocalStorage } from 'context/ParcelsContext';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const [isDarkMode, setDarkMode] = useState(checkLocalStorage('darkMode'));

  return (
    <RootWrapper className={isDarkMode && 'darkMode'}>
      <PageHeader setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
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
