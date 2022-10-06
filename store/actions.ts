export const CHARGING_STATIONS = "CHARGING_STATIONS";
export const SELECT_STATION = "SELECT_STATION";
export const START_SESSION = "START_SESSION";

export const getChargingStations = (chargingStations) => {
  return { type: CHARGING_STATIONS, chargingStations };
};

export const selectChargingStation = (chargingStation) => {
  return { type: SELECT_STATION, chargingStation };
};

export const startChargingSession = (chargingStation) => {
  return { type: START_SESSION, chargingStation };
};
