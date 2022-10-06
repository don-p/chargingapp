import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { startCharging } from "../services";
import type { StationLocationData } from "../services";
import { useState } from "react";

type Props = {
  selectedChargingStation: StationLocationData;
};

/**
 * A charging station detail view.
 */
export const StationDetail: React.FC<Props> = ({ selectedChargingStation }) => {
  const [charging, setCharging] = useState(false);

  const startChargingSession = () => {
    startCharging(selectedChargingStation.ID, 123, 456).then((result) => {
      if (result.success) {
        setCharging(true);
      }
    });
  };

  return (
    <View style={{ flex: 1, alignSelf: "stretch" }}>
      <View style={styles.container}>
        <View style={{ flex: 1, padding: "12px" }}>
          <Text style={styles.header}>
            {selectedChargingStation.AddressInfo.Title}
          </Text>
          <Text style={styles.body}>
            {selectedChargingStation.AddressInfo.AddressLine1}
          </Text>
          <Text
            style={styles.body}
          >{`${selectedChargingStation.AddressInfo.Town}, ${selectedChargingStation.AddressInfo.StateOrProvince} ${selectedChargingStation.AddressInfo.Postcode} `}</Text>
          <Text
            style={[styles.body, { marginTop: "12px" }]}
          >{`Distance: ${selectedChargingStation.AddressInfo.Distance.toFixed(
            1
          )} miles`}</Text>
        </View>
        {!!charging && (
          <View style={{ flex: 0.5, padding: "24px" }}>
            <Text style={[styles.header, { textAlign: "center" }]}>
              Charging...
            </Text>
          </View>
        )}
        <View>
          <TouchableOpacity
            onPress={startChargingSession}
            style={{
              backgroundColor: charging ? "#ccc" : "blue",
              padding: "8px",
            }}
            disabled={charging}
          >
            <Text
              style={{
                fontSize: 24,
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  body: {
    fontSize: 14,
  },
});
