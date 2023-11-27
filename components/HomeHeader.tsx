import React from "react";
import { View, Text } from "./Themed";
import { Image, useColorScheme } from "react-native";

const HomeHeader = () => {
  const colorScheme = useColorScheme();
  return (
    <View
      //   lightColor="red"
      darkColor="#0d0d0d"
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      {colorScheme === "light" ? (
        <Image
          source={require("../assets/images/threadsDark.png")}
          width={10}
          height={10}
        />
      ) : (
        <Image
          source={require("../assets/images/threadLogo.png")}
          width={10}
          height={10}
        />
      )}
    </View>
  );
};

export default HomeHeader;
