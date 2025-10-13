export const ExtraList = ({ extraParcels }) => {
  return (
    <li>
      <h3>Зайві посилки ({extraParcels.length}):</h3>
      <ul>
        {extraParcels.map(parcel => (
          <li key={parcel['Visit Name']}>
            {`${parcel['Visit Name']} ➔ ${parcel['Vehicle plate']}`}
          </li>
        ))}
      </ul>
    </li>
  );
};
