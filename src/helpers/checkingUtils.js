const pattern = /SH[A-Z]{2}\d{10}/gi;

export const extractParcels = dirtyString => {
  const clearArray = dirtyString
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/\s+/g, '')
    .toUpperCase()
    .match(pattern);
  return clearArray ? clearArray : [];
};

export const sortParcelsByRoutes = ({ allParcels, clearArray }) => {
  const sortedScannedParcels = {};

  clearArray.forEach(parcelID => {
    const parcel = allParcels.find(
      parcel =>
        parcel['Visit Name'] === parcelID ||
        parcel['Visit Name']?.includes(parcelID)
    );

    if (parcel) {
      const routeName = parcel['Vehicle plate'];
      if (!sortedScannedParcels[routeName]) {
        sortedScannedParcels[routeName] = [];
      }
      sortedScannedParcels[routeName].push(parcel);
    }
  });

  return sortedScannedParcels;
};

export const getScannedRouteNames = sortedScannedParcels => {
  return Object.keys(sortedScannedParcels).sort(
    (a, b) => sortedScannedParcels[b].length - sortedScannedParcels[a].length
  );
};

export const getLostedParcels = ({
  allParcels,
  clearArray,
  sortedScannedParcels,
}) => {
  const mainRouteName = getScannedRouteNames(sortedScannedParcels)[0];

  const losted = allParcels
    .filter(parcel => parcel['Visit Name'].match(pattern))
    .filter(parcel => parcel['Vehicle plate'] === mainRouteName)
    .filter(parcel => !clearArray.includes(parcel['Visit Name']));

  return losted;
};

export const getExtraParcels = ({
  allParcels,
  clearArray,
  sortedScannedParcels,
}) => {
  const mainRouteName = getScannedRouteNames(sortedScannedParcels)[0];
  const extra = allParcels
    .filter(parcel => parcel['Visit Name'].match(pattern))
    .filter(parcel => parcel['Vehicle plate'] !== mainRouteName)
    .filter(parcel => clearArray.includes(parcel['Visit Name']));

  return extra;
};
