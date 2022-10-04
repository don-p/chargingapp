import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../App";
/**
 * The app landing page view.
 */
export const Main = ({ setView }) => {
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
        onPress={() => setView("STATIONS")}
        style={{ backgroundColor: "blue", padding: "8px" }}
      >
        <Text style={{ fontSize: 24, color: "#fff", textAlign: "center" }}>
          {"Find stations near me >"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
