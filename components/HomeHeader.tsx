import React from "react";
import { View, Text } from "./Themed";
import { Image } from "react-native";

const HomeHeader = () => {
  return (
    <View
      darkColor="#0d0d0d"
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Image
        source={require("../assets/images/threadLogo.png")}
        width={10}
        height={10}
      />
    </View>
  );
};

export default HomeHeader;
