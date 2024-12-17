import { NavLink, useParams } from 'react-router-dom';
import { Header, HeaderBtnsList } from './Header.styled';

export const PageHeader = () => {
  const { cityName } = useParams();

  return (
    <Header>
      <HeaderBtnsList>
        <li>
          <NavLink to={cityName ? `sorting/${cityName}` : '/'}>
            SORT.{cityName || 'ME'}
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </HeaderBtnsList>
    </Header>
  );
};
