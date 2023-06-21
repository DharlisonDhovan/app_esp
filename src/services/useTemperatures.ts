import axios from "axios";

type TemperaturesProps = {
  date: string;
  temperature: number;
};
export async function useTemperatures() {
  try {
    const response = await axios.get(
      `https://temperature-madson-2456fab80a64.herokuapp.com/status-system`
    );
    const temperatures = response.data.temperatures;
    const totalTemperatures = temperatures.length;

    let sum = 0;
    temperatures.forEach((item: TemperaturesProps) => {
      sum += item.temperature;
    });

    const averageTemperature = sum / totalTemperatures;
    
    return averageTemperature;
  } catch (erro) {
    console.log(erro);
  }
}
