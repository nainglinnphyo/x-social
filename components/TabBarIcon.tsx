import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={28}
      style={{ marginBottom: -3 }}
      color={props.color}
    />
  );
}

export function TabBarIonicons(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return (
    <Ionicons
      name={props.name}
      size={28}
      style={{ marginBottom: -3 }}
      color={props.color}
    />
  );
}
