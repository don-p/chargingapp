import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { styles } from "../App";
import { startCharging } from "../services";
import type { StationLocationData } from "../services";
/**
 * A charging station item in the list view.
 */
type Props = {
  stationItem: StationLocationData;
};
export const ChargingStationItem: React.FC<Props> = ({ stationItem }) => {
  const startChargingSession = () => {
    startCharging(stationItem.ID, 123, 456);
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.header}>{stationItem.AddressInfo.Title}</Text>
        <Text style={styles.body}>{stationItem.AddressInfo.AddressLine1}</Text>
        <Text
          style={styles.body}
        >{`${stationItem.AddressInfo.Town}, ${stationItem.AddressInfo.StateOrProvince} ${stationItem.AddressInfo.Postcode} `}</Text>
        <Text style={styles.body}>{`${stationItem.AddressInfo.Distance.toFixed(
          1
        )} miles`}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={startChargingSession}
          style={{ backgroundColor: "blue", padding: "8px" }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Charge Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
    padding: "12px",
    borderColor: "#777",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  body: {
    fontSize: 14,
    // alignItems: "center",
    // justifyContent: "center",
    // textAlign: "center",
    // marginBottom: 16,
  },
});
