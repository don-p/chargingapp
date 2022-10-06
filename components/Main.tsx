import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "../App";
import { CHARGING_STATIONS } from "../store/actions";
import { getChargingLocations, DEFAULT_GEOLOCATION } from "../services";

/**
 * The app landing page view.
 */
export const Main = () => {
  const dispatch = useDispatch();
  const getChargingStations = () => {
    getChargingLocations(DEFAULT_GEOLOCATION).then((data) => {
      //   setChargingStationData(data);
      dispatch({ type: CHARGING_STATIONS, chargingStations: data });
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ padding: "16px" }}>
        <Text style={styles.header}>
          Welcome to the ev.energy charging station locator
        </Text>
        <Text style={styles.body}>
          To find charging stations near your location, click Find Stations
        </Text>
      </View>
      <TouchableOpacity
        onPress={getChargingStations}
        style={{ backgroundColor: "blue", padding: "8px" }}
      >
        <Text style={{ fontSize: 24, color: "#fff", textAlign: "center" }}>
          {"Find stations near me >"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
