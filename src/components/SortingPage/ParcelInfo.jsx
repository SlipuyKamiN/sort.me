import {
  DriverName,
  DriverNameLabel,
  DriverNameTitle,
  ParcelInfoSection,
  ParcelTitle,
} from './ParcelInfo.styled';

export const ParcelInfo = ({ currentParcel }) => {
  return (
    <section>
      <ParcelTitle>
        ШК: <span> {currentParcel['Visit Name'] || '-'}</span>
      </ParcelTitle>
      <DriverNameLabel>
        <span>Кур'єр: </span>
        <DriverName> {currentParcel['Driver Name'] || '-'} </DriverName>
      </DriverNameLabel>
      {/* <p>Знайдено: "counter"</p> */}
    </section>
  );
};
