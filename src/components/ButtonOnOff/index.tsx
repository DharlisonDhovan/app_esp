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
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useState } from "react";

type ButtonProps={
  on:boolean;
  setOn:(param:boolean)=>void;
}
export default function ButtonOnOff({on,setOn}:ButtonProps) {
  
    
  return (
    <TouchableOpacity style={on?styles.ButtonOffStyles:styles.ButtonOnStyles} onPress={()=>{on?setOn(false):setOn(true)}}>
      <AntDesign style={on?styles.ButtonOffIcon:styles.ButtonOnIcon} name="poweroff"  />
    </TouchableOpacity>
  );
}
