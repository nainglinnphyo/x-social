import { Link, Stack, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import HomeHeader from "../../components/HomeHeader";
import { TabBarIcon, TabBarIonicons } from "../../components/TabBarIcon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === "dark" ? "#fff" : "#000",
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          // title: "Tab One",
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name="home-variant" color={color} />
          ),
          headerTitle: (props: any) => <HomeHeader {...props} />,
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#0d0d0d" : "#ffff",
          },
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIonicons name="ios-search-sharp" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name="square-edit-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIonicons name="heart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIonicons name="md-person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
