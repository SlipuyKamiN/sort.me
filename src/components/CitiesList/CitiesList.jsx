import { citiesList } from 'data/citiesList';
import {
  CityLink,
  CityList,
  CityListSection,
  SectionDescription,
} from './CitiesList.styled';
import { useParcels } from 'context/ParcelsContext';

export const CitiesList = () => {
  const { setCityID } = useParcels();

  return (
    <CityListSection>
      <SectionDescription>Виберіть місто:</SectionDescription>
      <CityList>
        {citiesList
          .slice()
          .sort((a, b) => {
            if (a.cityName === 'TERMINAL') return -1;
            if (b.cityName === 'TERMINAL') return 1;
            return a.cityID.localeCompare(b.cityID);
          })
          .map(({ cityID, cityName }) => (
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
    </CityListSection>
  );
};
