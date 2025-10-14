import { GoLinkExternal } from 'react-icons/go';

import { ClipboardIcon, ListItem, LostedCheckbox } from './CheckingPage.styled';
import { handleCopy } from 'helpers/checkingUtils';
import { useState } from 'react';
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';

export const LostedList = ({ lostedParcels }) => {
  const [copied, setCopied] = useState('');

  return (
    <li>
      <h3>До сканування ({lostedParcels.length}):</h3>
      <ul>
        {lostedParcels.map(parcel => {
          const parcelID = parcel['Visit Name'];

          return (
            <ListItem key={parcelID}>
              <LostedCheckbox
                type="checkbox"
                name="checkbox"
                id="parcel"
                className="darkMode"
              />
              <p onClick={() => handleCopy(parcelID, setCopied)}>
                {parcelID}
                <ClipboardIcon className={copied === parcelID && 'copied'}>
                  <HiOutlineClipboardDocumentCheck size={22} />
                </ClipboardIcon>
              </p>
              <a
                href={`https://novapost.com/uk-de/tracking/${parcelID}`}
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                <GoLinkExternal size={16} />
              </a>
            </ListItem>
          );
        })}
      </ul>
    </li>
  );
};
