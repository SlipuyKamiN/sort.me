import { Container, RootWrapper } from './SharedLayout.styled';
import { PageHeader } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => (
  <RootWrapper>
    <PageHeader />
    <Container>
      <Suspense fallback={<>"Loading.."</>}>
        <Outlet />
      </Suspense>
    </Container>
  </RootWrapper>
);

export default SharedLayout;
