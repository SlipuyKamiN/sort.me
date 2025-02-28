import { getParcelsSheet } from 'API/API';
import { citiesList } from 'data/citiesList';
import { createContext, useContext, useEffect, useState } from 'react';

const ParcelsContext = createContext({
  allParcels: [],
  cityID: '',
});

export const useParcels = () => useContext(ParcelsContext);

const checkLocalStorage = key => {
  try {
    const item = localStorage.getItem(key);

    if (!item || !item.length) return '';

    return JSON.parse(item);
  } catch (error) {
    console.log(error);
  }
};

export const ParcelsProvider = ({ children }) => {
  const [allParcels, setAllParcels] = useState([]);
  const [selectedCityData, setSelectedCityData] = useState({});
  const [cityID, setCityID] = useState(() => checkLocalStorage('cityID'));
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const parcels = await getParcelsSheet(cityID);

        setAllParcels(parcels);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    })();
  }, [cityID]);

  useEffect(() => {
    localStorage.setItem('cityID', JSON.stringify(cityID));

    setSelectedCityData(citiesList.find(city => city.cityID === cityID));
  }, [cityID]);

  return (
    <ParcelsContext.Provider
      value={{
        allParcels,
        setCityID,
        selectedCityData,
        isLoading,
      }}
    >
      {children}
    </ParcelsContext.Provider>
  );
};
