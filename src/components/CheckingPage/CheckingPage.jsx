import { useEffect, useState } from 'react';
import { useParcels } from 'context/ParcelsContext';
import { SortingPageContainer } from '../SortingPage/SortingPage.styled';
import { lockScreen } from 'helpers/screenLock';
import { CheckingForm } from './CheckingForm';
import { RouteInfo } from './RouteInfo';
import { LostedList } from './LostedList';
import { ExtraList } from './ExtraList';
import {
  extractParcels,
  getExtraParcels,
  getLostedParcels,
  getScannedRouteNames,
  sortParcelsByRoutes,
} from 'helpers/checkingUtils';
import { CheckLists, CheckTitle } from './CheckingPage.styled';

export const CheckingPage = () => {
  const { allParcels } = useParcels();
  const [lostedParcels, setLostedParcels] = useState([]);
  const [extraParcels, setExtraParcels] = useState([]);
  const [scannedRoutes, setScannedRoutes] = useState([]);
  const [scannedQty, setScannedQty] = useState(0);

  const checkRoute = dirtyText => {
    const clearArray = extractParcels(dirtyText);
    const sortedScannedParcels = sortParcelsByRoutes({
      allParcels,
      clearArray,
    });

    const parcelsSet = { allParcels, clearArray, sortedScannedParcels };
    setScannedRoutes(getScannedRouteNames(sortedScannedParcels));
    setLostedParcels(getLostedParcels(parcelsSet));
    setExtraParcels(getExtraParcels(parcelsSet));
    setScannedQty(clearArray.length);
  };

  useEffect(() => {
    lockScreen();
  }, []);

  return (
    <SortingPageContainer>
      <RouteInfo scannedRoutes={scannedRoutes} />
      <CheckingForm checkRoute={checkRoute} />
      <CheckTitle>Відскановано: {scannedQty} шт</CheckTitle>
      <CheckLists>
        <LostedList lostedParcels={lostedParcels} />
        <ExtraList extraParcels={extraParcels} />
      </CheckLists>
    </SortingPageContainer>
  );
};
