// FIXME: hard-coded gelocation
export const DEFAULT_GEOLOCATION = {
  latitude: "38.9803356",
  longitude: "-77.1042968",
};

type AddressInfo = {
  AccessComments: string;
  AddressLine1: string;
  ContactTelephone1: string;
  Distance: number;
  Postcode: string;
  StateOrProvince: string;
  Title: string;
  Town: string;
};

type OperatorInfo = {
  Title: string;
};

export type StationLocationData = {
  ID: number;
  AddressInfo: AddressInfo;
  OperatorInfo: OperatorInfo;
};

const getLocationParams = (location) => {
  const params = new URLSearchParams({
    ...location,
    ...{ distance: "10", distanceunit: "miles" },
  });
  return params.toString();
};

/**
 * Get a list of charges (POI) given a location.
 * @param location
 * @returns array of POI
 */

export const getChargingLocations = async (
  location: any
): Promise<Array<any>> => {
  // get a location coordinate from an address, using mapbox API.

  try {
    // get params string from location coordinate.
    const paramsString = getLocationParams(location);
    // get the list of charging stations in the bounding box, from the REST API.
    const promiseResult = fetch(
      `https://api.openchargemap.io/v3/poi?${paramsString}&maxresults=25&output=json&client=ocm.app.ionic.8.2.0&key=9bb03e5b-0fb2-4916-9b2b-26c6bd27a56a`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "X-API-Key": "9bb03e5b-0fb2-4916-9b2b-26c6bd27a56a",
        },
      }
    );

    const result = await promiseResult
      .then((response) => {
        return response.json();
      })
      .then((data: StationLocationData[]) => {
        // sort the list by distance from the source point.
        data.sort(
          (a: StationLocationData, b: StationLocationData) =>
            a.AddressInfo.Distance - b.AddressInfo.Distance
        );
        return data;
      });
    return result;
  } catch (error) {
    throw new Error(`Problem fetching charging station data: ${error}`);
  }
};

/**
 * Start a charging session.
 * @param id The ChargePoint station id.
 * @param userId The user initiating the session.
 * @param vehicleId The vehicle initiating the session.
 */
export const startCharging = async (
  id: number,
  userId: number,
  vehicleId: number
) => {
  const params = {
    charger_id: id,
    user: userId,
    car_id: vehicleId,
  };

  try {
    const promiseResult = fetch("https://example.ev.energy/chargingsession", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await promiseResult
      .then((response) => {
        // Not a live API endpoint, so no result expected.
        return response.json();
      })
      .then((data) => {
        return data;
      });
    return result;
  } catch (error) {
    // Not a live API endpoint, so no result expected.
    return { success: true };
  }
};
