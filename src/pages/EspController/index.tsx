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
import { OnController } from "../../services/useController";
import { OffController } from "../../services/useController";
import { useState } from "react";
import axios from "axios";

export default function EspController() {
  const [on, setOn] = useState<boolean>(false);
  const [average, setAverage] = useState<number>(0);

  async function handlePoweOnOff() {
    if (on) {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://trab-madson.vercel.app/enviar-dados",
        headers: {},
      };
      let temp: any[] = [];

      setInterval(() => {
        axios
          .request(config)
          .then((response) => {
            temp = [...temp, response.data.lastData.temperatura];
            let sum = temp.reduce((amount, number) => amount + number, 0);
            setAverage(sum / temp.length);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 5000);
    } else {
      ToastAndroid.show(`${await OffController()}`, ToastAndroid.LONG);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <Chart />
      </View>
      <View style={styles.temperatureContainer}>
        <Text style={{ color: "#39ff14", fontSize: 80 }}>{average.toPrecision(4)}º</Text>
        <Text style={{ color: "#39ff14", fontSize: 20 }}>
          Temperatura Média
        </Text>
      </View>
      <View style={styles.ButtonOnOfftContainer}>
        <ButtonOnOff
          on={on}
          setOn={(param) => {
            setOn(param);
            handlePoweOnOff();
          }}
        />
      </View>
    </View>
  );
}
