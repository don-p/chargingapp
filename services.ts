// FIXME: hard-coded gelocation
// const geoLocation =
//   "(38.9789214697085,-77.1034735802915),(38.9816194302915,-77.1007756197085)";
const geoLocation =
  "(38.97574608782054,-77.1152971971892),(38.98490361607895,-77.08888280281067)";
const getBoundingBox = (location) => {
  return geoLocation;
};

/**
 * Get a list of charges (POI) given a location.
 * @param location
 * @returns array of POI
 */

export const getChargingLocations = (location: any): Promise<Array<any>> => {
  // get a location coordinate from an address, using mapbox API.

  // get a boundingbox string from a location coordinate.
  const boundingboxString = getBoundingBox(
    "7011 Exfair Rd, Bethesda, MD 20814"
  );
  // get the list of charging stations in the bounding box, from the REST API.
  const promiseResult = fetch(
    `https://api.openchargemap.io/v3/poi?boundingbox=${boundingboxString}&output=json&client=ocm.app.ionic.8.2.0&key=9bb03e5b-0fb2-4916-9b2b-26c6bd27a56a`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "X-API-Key": "9bb03e5b-0fb2-4916-9b2b-26c6bd27a56a",
      },
    }
  );

  return promiseResult
    .then((response) => {
      //   return response.text();
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(`Problem fetching chargin station data: ${error}`);
    });
};
