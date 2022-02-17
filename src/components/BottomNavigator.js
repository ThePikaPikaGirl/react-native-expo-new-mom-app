import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faCalendarCheck,
  faDumbbell,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";

function BottomNavigator(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          props.screen === "Home"
            ? styles.buttonsActive
            : styles.buttonsInactive
        }
      >
        <FontAwesomeIcon
          icon={faHome}
          size={30}
          color={props.screen === "Home" ? "#ffb6c1" : "#fff"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={
          props.screen === "Goals"
            ? styles.buttonsActive
            : styles.buttonsInactive
        }
      >
        <FontAwesomeIcon
          icon={faCalendarCheck}
          size={30}
          color={props.screen === "Goals" ? "#ffb6c1" : "#fff"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={
          props.screen === "Exercises"
            ? styles.buttonsActive
            : styles.buttonsInactive
        }
      >
        <FontAwesomeIcon
          icon={faDumbbell}
          size={35}
          color={props.screen === "Exercises" ? "#ffb6c1" : "#fff"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={
          props.screen === "Doctors"
            ? styles.buttonsActive
            : styles.buttonsInactive
        }
      >
        <FontAwesomeIcon
          icon={faUserNurse}
          size={35}
          color={props.screen === "Doctors" ? "#ffb6c1" : "#fff"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffb6c1",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // alignItems: "center",
    paddingBottom: 10,
  },
  buttonsInactive: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsActive: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomNavigator;
