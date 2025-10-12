import { DriverName, DriverNameLabel, ParcelTitle } from './ParcelInfo.styled';

export const RouteInfo = ({ currentParcel }) => {
  return (
    <section>
      <ParcelTitle>
        ШК: <span> {currentParcel['Visit Name']}</span>
      </ParcelTitle>
      <DriverNameLabel>
        <span>Маршут: </span>
        <DriverName>
          {currentParcel['Driver Name'] || currentParcel['Vehicle plate']}
        </DriverName>
      </DriverNameLabel>
    </section>
  );
};
