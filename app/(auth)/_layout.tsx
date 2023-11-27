import { View, Text } from "react-native";
import React from "react";
import { Tabs, Stack } from "expo-router";
import { TabBarIcon } from "../../components/TabBarIcon";

const _AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="login"
        options={{
          title: "Auth",
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name="code" color={color} />
          ),
        }}
      />
    </Stack>
  );
};

export default _AuthLayout;
