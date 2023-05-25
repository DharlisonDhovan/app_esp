import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ButtonOnStyles: {
    
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "#000000",
    borderWidth: 5,
    borderColor: "#39ff14",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  ButtonOffStyles: {
    
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "#000000",
    borderWidth: 5,
    borderColor: "#3d6436",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  ButtonOnIcon: {
    color: "#39ff14",
    fontSize: 100,
  },
  ButtonOffIcon: {
    color: "#3d6436",
    fontSize: 100,
  },
});
