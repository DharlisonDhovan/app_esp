import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./styles";

type DataTemperatureHistory = {
  temperature: number[];
  time: string[];
};
export default function Chart({ temperature, time }: DataTemperatureHistory) {
  return (
    <View style={styles.ChartContainer}>
      <LineChart
        data={{
          labels: time,
          datasets: [
            {
              data: temperature,
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={400}
        yAxisLabel={"º"}
        chartConfig={{
          decimalPlaces: 0,
          color: (opacity = 255) => `#39ff14`,
          style: {
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
}
