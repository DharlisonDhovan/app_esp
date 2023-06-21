import axios from "axios";
import { ToastAndroid } from "react-native";


export async function ControllerEsp(param:boolean) {
  try {
    const response = await axios.post(
      `https://temperature-madson-2456fab80a64.herokuapp.com/status-system`,
      { statusSystem: param }
    );
    return ToastAndroid.show(`${response.data.status?'Sistema Ligado':'Sistema desligado'}`, ToastAndroid.LONG);
  } catch (erro) {
    console.log(erro);
  }
}
