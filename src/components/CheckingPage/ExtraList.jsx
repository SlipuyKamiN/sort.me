import { ListItem, LostedCheckbox } from './CheckingPage.styled';

export const ExtraList = ({ extraParcels }) => {
  return (
    <li>
      <h3>Зайві посилки ({extraParcels.length}):</h3>
      <ul>
        {extraParcels.map(parcel => (
          <ListItem key={parcel['Visit Name']}>
            <LostedCheckbox
              type="checkbox"
              name="checkbox"
              id="parcel"
              className="darkMode"
            />
            <p>{`${parcel['Visit Name']} ➔ ${parcel['Vehicle plate']}`}</p>
          </ListItem>
        ))}
      </ul>
    </li>
  );
};
