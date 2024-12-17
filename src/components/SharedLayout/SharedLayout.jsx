import { Container } from './SharedLayout.styled';
import { PageHeader } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => (
  <>
    <PageHeader />
    <Container>
      <Suspense fallback={<>"Loading.."</>}>
        <Outlet />
      </Suspense>
    </Container>
  </>
);

export default SharedLayout;
