import { DriverName, DriverNameLabel } from '../SortingPage/ParcelInfo.styled';
import { RoutesList } from './CheckingPage.styled';

export const RouteInfo = ({ scannedRoutes }) => {
  return (
    <section>
      <DriverNameLabel>
        <span>Маршут: </span>
        <DriverName>
          <RoutesList>
            {scannedRoutes.map(routeName => (
              <li key={routeName}>{routeName}</li>
            ))}
          </RoutesList>
        </DriverName>
      </DriverNameLabel>
    </section>
  );
};
