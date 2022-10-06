import { Text, View } from "react-native";
import { styles } from "../App";
import { ChargingStationItem } from "./ChargingStationItem";
import type { StationLocationData } from "../services";
import { useSelector } from "react-redux";
import { getChargingStations } from "../store/selectors";

/**
 * The app charging station list view.
 */
export const StationsList = () => {
  const chargingStationData = useSelector(getChargingStations);

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
