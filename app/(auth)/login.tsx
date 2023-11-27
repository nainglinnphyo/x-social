import React, { useState } from "react";
import {
  View,
  Text,
  Input,
  SafeAreaView,
  Button,
} from "../../components/Themed";

import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const index = () => {
  const [login, setLogin] = useState(false);
  const router = useRouter();

  const handlePress = () => {
    setLogin(!login);
    setTimeout(() => {
      router.replace("/home");
    }, 1000);
  };

  const registerPress = () => {
    router.push("/register");
  };
  return (
    <SafeAreaView
      style={styles.container}
      darkColor="#0d0d0d"
      lightColor="rgb(241,242,255)"
    >
      <View lightColor="rgb(240,243,255)">
        <Text
          lightColor="#878787"
          darkColor="#878787"
          style={{ fontWeight: "400" }}
        >
          Myanmar (MM)
        </Text>
      </View>
      <View lightColor="rgb(241,242,255)">
        <Image
          source={require("../../assets/images/logo.png")}
          width={8}
          height={8}
        />
      </View>
      <View style={{ width: "90%" }} lightColor="rgb(241,242,255)">
        <Input
          lightColor="white"
          darkColor="#0d0d0d"
          placeholder="Email"
          darkTextColor="white"
          lightTextColor="#000"
          darkPlaceholderTextColor="#878787"
          lightPlaceholderTextColor="#878787"
          darkBorderColor="#2e2a2a"
          lightBorderColor="#dddbdb"
          style={{
            borderWidth: 1.5,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 6,
            marginVertical: 2,
          }}
        />
        <Input
          lightColor="white"
          darkColor="#0d0d0d"
          placeholder="Password"
          darkTextColor="white"
          lightTextColor="#000"
          darkPlaceholderTextColor="#878787"
          lightPlaceholderTextColor="#878787"
          darkBorderColor="#2e2a2a"
          lightBorderColor="#dddbdb"
          style={{
            borderWidth: 1.5,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 6,
            marginVertical: 2,
          }}
        />
        <Button
          onPress={handlePress}
          loading={login}
          title="Login"
          lightColor="#0070fa"
          darkColor="#0070fa"
          lightTextColor="white"
          darkTextColor="white"
          textStyle={{
            fontWeight: "600",
          }}
          style={{
            padding: 15,
            marginVertical: 4,
            borderRadius: 50,
            alignItems: "center",
          }}
        />
        <View
          lightColor="rgb(241,242,255)"
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 4,
            flexDirection: "row",
            // backgroundColor: "red",
            // paddingVertical: 3,
          }}
        >
          <Text style={{ textAlign: "center" }}>Don't have an account? </Text>
          <TouchableOpacity onPress={registerPress}>
            <Text
              lightColor="#53b4f9"
              darkColor="#53b4f9"
              style={{ fontWeight: "500", textAlign: "center" }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View lightColor="rgb(241,242,255)">
        <Text
          lightColor="#111010"
          darkColor="#fbfbfb"
          style={{ fontWeight: "800" }}
        >
          X-Social
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    // padding: 10,
  },
});

export default index;
