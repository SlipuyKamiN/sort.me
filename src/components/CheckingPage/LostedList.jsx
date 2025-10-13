export const LostedList = ({ lostedParcels }) => {
  return (
    <li>
      <h3>До сканування ({lostedParcels.length}):</h3>
      <ul>
        {lostedParcels.map(parcel => (
          <li key={parcel['Visit Name']}>
            <a
              href={`https://novapost.com/uk-de/tracking/${parcel['Visit Name']}`}
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              {parcel['Visit Name']}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
