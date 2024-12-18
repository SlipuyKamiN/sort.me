import { citiesList } from 'data/citiesList';
import { CityLink, CityList } from './CitiesList.styled';
import { useParcels } from 'context/ParcelsContext';

export const CitiesList = () => {
  const { setCityID } = useParcels();

  return (
    <CityList>
      {citiesList.map(({ cityID, cityName }) => (
        <li key={cityID}>
          <CityLink
            to={`sorting/${cityName}`}
            onClick={() => setCityID(cityID)}
          >
            {cityName}
          </CityLink>
        </li>
      ))}
    </CityList>
  );
};
