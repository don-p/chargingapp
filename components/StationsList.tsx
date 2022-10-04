import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getChargingLocations, DEFAULT_GEOLOCATION } from "../services";
import { useEffect, useState } from "react";
import { styles } from "../App";
import { ChargingStationItem } from "./ChargingStationItem";
import type { StationLocationData } from "../services";
/**
 * The app charging station list view.
 */
export const StationsList = ({ setView }) => {
  const [chargingStationData, setChargingStationData] = useState<Array<any>>();

  const getChargingStations = () => {
    getChargingLocations(DEFAULT_GEOLOCATION).then((data) => {
      setChargingStationData(data);
    });
  };

  useEffect(() => {
    // On load of the view, get the list of charging stations and store in local view state.
    getChargingStations();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View
        style={{
          padding: "16px",
          alignContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <View>
          <Text style={styles.header}>{"Chargers near me"}</Text>
        </View>
        {!!chargingStationData &&
          chargingStationData.map((station: StationLocationData) => (
            <View
              key={station.ID}
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <ChargingStationItem stationItem={station} />
            </View>
          ))}
      </View>
    </View>
  );
};
