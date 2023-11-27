import { View, Text } from "react-native";
import React from "react";
import { Tabs, Stack } from "expo-router";
import { TabBarIcon } from "../../components/TabBarIcon";

const _AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
};

export default _AuthLayout;
