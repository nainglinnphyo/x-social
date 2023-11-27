import {} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "./Themed";

const PostBottomBar = ({ isLike }: { isLike: boolean }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Ionicons
          name={isLike ? "heart" : "heart-outline"}
          size={22}
          style={{ marginHorizontal: 4 }}
          color={isLike ? "#d92f39" : "#000"}
          //   color={}
        />

        <Text style={{ fontSize: 13 }} lightColor="#a0a0a0" darkColor="#fff">
          1 like
        </Text>
      </View>
      <Feather
        name="message-circle"
        size={22}
        style={{ marginHorizontal: 4 }}
        //   color={}
      />
      <Feather
        name="send"
        size={22}
        style={{ marginHorizontal: 4 }}
        //   color={}
      />
    </View>
  );
};

export default PostBottomBar;
