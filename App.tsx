import { StatusBar } from "expo-status-bar";

import { StyleSheet, View } from "react-native";
import { StationsList } from "./components/StationsList";
import { Main } from "./components/Main";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import { StationDetail } from "./components/StationDetail";
import { getChargingStations, getSelectedStation } from "./store/selectors";

const AppComponent = () => {
  const chargingStations = useSelector(getChargingStations);
  const selectedChargingStation = useSelector(getSelectedStation);

  return (
    <View style={styles.container}>
      {!chargingStations && (
        // landing view
        <Main />
      )}
      {!!chargingStations && !selectedChargingStation && (
        // charging station list view
        <StationsList />
      )}
      {!!selectedChargingStation && (
        // charging station detail view
        <StationDetail selectedChargingStation={selectedChargingStation} />
      )}
      <StatusBar style="auto" />
    </View>
  );
};
export default function App() {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 24,
  },
  body: {
    fontSize: 24,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 16,
  },
});
