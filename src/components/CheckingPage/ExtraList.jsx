import { useState } from 'react';
import { ClipboardIcon, ListItem, LostedCheckbox } from './CheckingPage.styled';
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';
import { handleCopy } from 'helpers/checkingUtils';

export const ExtraList = ({ extraParcels }) => {
  const [copied, setCopied] = useState('');

  return (
    <li>
      <h3>Зайві посилки ({extraParcels.length}):</h3>
      <ul>
        {extraParcels.map(parcel => {
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
                {`${parcelID} ➔ ${parcel['Vehicle plate']}`}
                <ClipboardIcon className={copied === parcelID && 'copied'}>
                  <HiOutlineClipboardDocumentCheck size={22} />
                </ClipboardIcon>
              </p>
            </ListItem>
          );
        })}
      </ul>
    </li>
  );
};
