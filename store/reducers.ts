import { START_SESSION, CHARGING_STATIONS, SELECT_STATION } from "./actions";

const initialState = {
  chargingStations: null,
  selectedStation: null,
  currentChargingStation: null,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === CHARGING_STATIONS) {
    return { ...state, chargingStations: action.chargingStations };
  }
  if (action.type === SELECT_STATION) {
    return { ...state, selectedStation: action.chargingStation };
  }
  if (action.type === START_SESSION) {
    return { ...state, currentChargingStation: action.chargingStation };
  }

  return state;
};

export default rootReducer;
