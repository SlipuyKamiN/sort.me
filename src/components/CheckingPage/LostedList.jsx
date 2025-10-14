import { GoLinkExternal } from 'react-icons/go';

import { ListItem, LostedCheckbox } from './CheckingPage.styled';

export const LostedList = ({ lostedParcels }) => {
  return (
    <li>
      <h3>До сканування ({lostedParcels.length}):</h3>
      <ul>
        {lostedParcels.map(parcel => (
          <ListItem key={parcel['Visit Name']}>
            <LostedCheckbox
              type="checkbox"
              name="checkbox"
              id="parcel"
              className="darkMode"
            />
            <p>{parcel['Visit Name']}</p>
            <a
              href={`https://novapost.com/uk-de/tracking/${parcel['Visit Name']}`}
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <GoLinkExternal size={16} />
            </a>
          </ListItem>
        ))}
      </ul>
    </li>
  );
};
