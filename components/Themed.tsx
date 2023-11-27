/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TextInput as DefaultTextInput,
  TouchableOpacity as DefaultTouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { SafeAreaView as DefaultSafeAreaView } from "react-native-safe-area-context";

import Colors from "../constants/Colors";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type ButtonThemeProps = {
  lightColor?: string;
  lightTextColor?: string;
  darkColor?: string;
  darkTextColor?: string;
  title: string;
  textStyle: DefaultText["props"]["style"];
  loading?: boolean;
};

type InputThemeProps = {
  lightColor?: string;
  darkColor?: string;
  lightPlaceholderTextColor?: string;
  darkPlaceholderTextColor?: string;
  lightTextColor: string;
  darkTextColor: string;
  lightBorderColor?: string;
  darkBorderColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type InputProps = InputThemeProps & DefaultTextInput["props"];
export type ButtonProps = ButtonThemeProps & DefaultTouchableOpacity["props"];

export function useThemeColor(
  props: {
    light?: string;
    dark?: string;
  },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  // console.log(color)
  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Input(props: InputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    {
      light: lightColor,
      dark: darkColor,
    },
    "background"
  );

  const borderColor = useThemeColor(
    {
      light: props.lightBorderColor,
      dark: props.darkBorderColor,
    },
    "borderColor"
  );

  const placeholderTextColor = useThemeColor(
    {
      light: props.lightPlaceholderTextColor,
      dark: props.darkPlaceholderTextColor,
    },
    "placeholderTextColor"
  );

  const textColor = useThemeColor(
    {
      light: props.lightTextColor,
      dark: props.darkTextColor,
    },
    "text"
  );

  return (
    <DefaultTextInput
      style={[{ backgroundColor: color, color: textColor, borderColor }, style]}
      placeholderTextColor={placeholderTextColor}
      {...otherProps}
    />
  );
}

export function SafeAreaView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function Button(props: ButtonProps) {
  const { textStyle, style, lightColor, darkColor, ...otherProps } = props;
  return (
    <View
      style={style}
      lightColor={props.lightColor}
      darkColor={props.darkColor}
    >
      <DefaultTouchableOpacity
        onPress={props.onPress}
        style={{ width: "100%", alignItems: "center" }}
      >
        <Text
          lightColor={props.lightTextColor}
          darkColor={props.darkTextColor}
          style={textStyle}
        >
          {props.loading ? (
            <ActivityIndicator color={"white"} size={18} />
          ) : (
            props.title
          )}
        </Text>
      </DefaultTouchableOpacity>
    </View>
  );
}
