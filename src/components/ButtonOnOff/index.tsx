import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

type ButtonProps = {
  on: boolean;
  setOn: (param: boolean) => void;
};
export default function ButtonOnOff({ on, setOn }: ButtonProps) {
  return (
    <TouchableOpacity
      style={on ? styles.ButtonOffStyles : styles.ButtonOnStyles}
      onPress={() => {
        on ? setOn(false) : setOn(true);
      }}
    >
      <AntDesign
        style={on ? styles.ButtonOffIcon : styles.ButtonOnIcon}
        name="poweroff"
      />
    </TouchableOpacity>
  );
}
