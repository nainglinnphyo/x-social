
import { useNavigation } from "expo-router";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from "react-native";


const PrimaryButtonWithIcon = (props) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
            // style={styles.button}
            // onPress={() => navigation.navigate()}
          >
            <Image
              source={require('../../assets/button_background.png')}
              style={styles.button}
            ></Image>
            <Text style={styles.buttonText}>
              { props.currentLanguage }
            </Text>
          </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: 283,
    height: 76,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6835F0",
    letterSpacing: 0.4,
    marginHorizontal: 10,
  },
});

export default PrimaryButtonWithIcon;
