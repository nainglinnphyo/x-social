import React from "react";
import { View, Text, Button } from "./Themed";
import { Image } from "react-native";

const SearchCard = () => {
  return (
    <View style={{ width: "100%", marginVertical: 16, flexDirection: "row" }}>
      <View style={{ width: "18%" }}>
        <Image source={require("../assets/images/threadProfile.png")} />
      </View>
      <View
        lightBorderColor="#f2f2f2"
        style={{ width: "80%", borderBottomWidth: 1.5 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{}}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>threadsapp</Text>
            <Text style={{ fontWeight: "300" }}>Threads</Text>
            <View style={{ marginVertical: 10 }}>
              <Text>35 followers</Text>
            </View>
          </View>
          <View>
            <Button
              title="Follow"
              textStyle={{ color: "#000" }}
              lightBorderColor="#cdcdcd"
              style={{
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderWidth: 1,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchCard;
