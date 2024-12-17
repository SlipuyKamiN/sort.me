import { HomePage } from 'components/Home/Home';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { SortingPage } from 'components/SortingPage/SortingPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="sorting/:cityName" element={<SortingPage />}></Route>
        <Route path="404" element={<div>404</div>} />
        {/* <Route path="*" element={<Navigate to="404" />}></Route> */}
      </Route>
    </Routes>
  );
};

export default App;
