import { StatusBar } from "expo-status-bar";

import { getChargingLocations } from "./services";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { StationsList } from "./components/StationsList";
import { Main } from "./components/Main";

export default function App() {
  const [view, setView] = useState<string>("MAIN");

  return (
    <View style={styles.container}>
      {view === "MAIN" ? (
        // landing view
        <Main setView={setView} />
      ) : (
        // charging station list view
        <StationsList setView={setView} />
      )}
      <StatusBar style="auto" />
    </View>
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
