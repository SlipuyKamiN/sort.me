import { citiesList } from 'data/cities';
import { CityLink, CityList } from './CitiesList.styled';

export const CitiesList = () => (
  <CityList>
    {citiesList.map(city => (
      <li key={city}>
        <CityLink to={`sorting/${city}`}>{city}</CityLink>
      </li>
    ))}
  </CityList>
);
