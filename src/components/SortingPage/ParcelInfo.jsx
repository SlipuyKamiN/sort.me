export const ParcelInfo = ({ currentParcel }) => {
  return (
    <div>
      <h2>
        ШК:<span>{currentParcel['Visit Name'] || '-'}</span>
      </h2>
      <h1>
        Кур'єр:<span>{currentParcel['Driver Name'] || '-'} </span>
      </h1>
      {/* <p>Знайдено: "counter"</p> */}
    </div>
  );
};
