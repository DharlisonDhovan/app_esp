import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
  Modal,
  ToastAndroid,
} from "react-native";
import styles from "./styles";
import ButtonOnOff from "../../components/ButtonOnOff";
import Chart from "../../components/Chart";
import { ControllerEsp } from "../../services/useController";
import { format } from "date-fns";

import { useState, useEffect } from "react";
import axios from "axios";

type DataTemperatureHistoryJson = {
  tempo: string;
  temperatura: string;
};
export type DataTemperatureHistory = {
  arraydata: DataTemperatureHistoryJson[];
};

interface Temperature {
  date: string;
  temperature: number;
}
export default function EspController() {
  const [on, setOn] = useState<boolean>(true);
  const [average, setAverage] = useState<number>(0);
  const [lastTemperatures, setLastTemperatures] = useState<number[]>([
    35, 36, 37, 36, 38,
  ]);
  const [lastDates, setLastDates] = useState<string[]>([]);

  async function handlePowerOnOff(param: boolean) {
    ControllerEsp(param);
  }
  useEffect(() => {
    setInterval(() => {
      useTemperatures();
    }, 2000);
  });

  async function useTemperatures() {
    try {
      const response = await axios.get(
        "https://temperature-madson-2456fab80a64.herokuapp.com/temperatures"
      );

      const { temperatures } = response.data;
      const averageTemperature =
        temperatures.reduce(
          (sum: number, temp: Temperature) => sum + temp.temperature,
          0
        ) / temperatures.length;

      setAverage(averageTemperature);
      const lastTemperatureValues = temperatures
        .slice(-5)
        .map((temp: Temperature) => temp.temperature);
      setLastTemperatures([...lastTemperatureValues, averageTemperature]);
      const lastDateValues = temperatures.slice(-4).map((temp: Temperature) => {
        const date = new Date(temp.date);
        return format(date, "dd/MM/yy HH:mm:ss");
      });
      setLastDates(lastDateValues);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Chart temperature={lastTemperatures} time={lastDates} />
      </View>
      <View style={styles.temperatureContainer}>
        <Text style={{ color: "#39ff14", fontSize: 50 }}>
          {average.toFixed(2)}º
        </Text>
        <Text style={{ color: "#39ff14", fontSize: 20 }}>
          Temperatura Média
        </Text>
      </View>
      <View style={styles.ButtonOnOffContainer}>
        <ButtonOnOff
          on={on}
          setOn={(param) => {
            setOn(param);
            handlePowerOnOff(on);
          }}
        />
      </View>
    </View>
  );
}
