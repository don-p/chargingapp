import { StyleSheet, Text, View } from "react-native";
import { startCharging } from "../services";
import type { StationLocationData } from "../services";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {} from "../store/selectors";
import { SELECT_STATION } from "../store/actions";

/**
 * A charging station item in the list view.
 */
type Props = {
  stationItem: StationLocationData;
};
export const ChargingStationItem: React.FC<Props> = ({ stationItem }) => {
  const dispatch = useDispatch();

  const selectStation = () => {
    dispatch({ type: SELECT_STATION, chargingStation: stationItem });
  };

  return (
    <View
      style={styles.container}
      onClick={selectStation}
      onTouchStart={selectStation}
    >
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
