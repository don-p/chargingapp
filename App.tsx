import { StatusBar } from "expo-status-bar";

import { getChargingLocations } from "./services";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  const [chargingStationData, setChargingStationData] = useState<Array<any>>();

  const getChargingStations = () => {
    getChargingLocations("").then((data) => {
      console.log("charging data:", data);
      setChargingStationData(data);
    });
  };

  return (
    <View style={styles.container}>
      {!chargingStationData ? (
        // landing view
        <View>
          <Text>Welcome to the ev.energy charging station locator</Text>
          <TouchableOpacity
            onPress={() => getChargingStations()}
            style={{ backgroundColor: "blue" }}
          >
            <Text style={{ fontSize: 20, color: "#fff" }}>
              {"Find chargers near me >"}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        // charging station list view
        <View
          style={{
            alignContent: "flex-start",
            flexDirection: "row",
            flex: 1,
            width: "100%",
            height: 100,
            padding: 20,
          }}
        >
          <Text>{"Chargers near me"}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
