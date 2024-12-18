import axios from 'axios';
import { citiesList } from 'data/citiesList';
import { parseCSV } from 'helpers/parseCSV';

export const getParcelsSheet = async cityID => {
  const cityData = citiesList.find(city =>
    city.cityID === cityID ? city : ''
  );

  if (!cityID) return [];

  const ParcelsSheet = await axios
    .get(cityData.sheetLink)
    .then(response => {
      return parseCSV(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  return ParcelsSheet;
};
