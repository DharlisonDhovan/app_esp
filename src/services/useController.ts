import axios from "axios";
export async function OnController() {
  try {
    const response = await axios.post(
      `https://trab-madson.vercel.app/ligar-sistema/start=1`
    );
    return(JSON.stringify(response.data.message))
  } catch (erro) {
    console.log(erro);
  }
}
export async function OffController() {
  try {
    const response = await axios.post(
      `https://trab-madson.vercel.app/desligar-sistema/stop=0
        `
        
    );
    return(JSON.stringify(response.data.message))
  } catch (erro) {
    console.log(erro);
  }
}
