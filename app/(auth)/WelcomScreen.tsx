import React from "react";
import { View, StyleSheet, Image, ImageBackground,Text} from "react-native";
// import ScreenBackground from '../assets/screen_background.png';
import MediumVerticalSpace from "app/components/spacer/MediumVerticalSpace";
import PrimaryButton from "app/components/button/PrimaryButton";
const WelcomeScreen = (props) => {
	return (
            <ImageBackground 
            source={require("../assets/screen_background.png")}
            >
            <View style = {styles.container}>
            <MediumVerticalSpace/>
            <Image source={require('../assets/book.png')}></Image>
            <Text style={styles.title}>Welcome To X-social</Text>
            <Text style= {styles.subtitle}>Select your favorite social network and share our icons with your contacts or friends.</Text>
            <MediumVerticalSpace />
                <PrimaryButton
                    text="Sign Up With Google"
                    icon="log-in-outline"
                    // onPress={handleGoToLogin}
                />
            
            </View>


            </ImageBackground>
    )
};


const styles = StyleSheet.create({
    checkbox: {
      width: 20,
      height: 20,
      marginTop: 10,
      marginRight: 10
    },
    center: {
      flexDirection: "row",
      justifyContent: "center",
    },
    container: {
      width: "100%",
      maxWidth: 600,
      flexDirection: "column",
      alignSelf: "center",
      paddingHorizontal: 15,
    },
    model: {
      marginLeft: -140,
      width: 350,
      height: 350,
    },
    title: {
        fontSize: 35,
        fontWeight: "800",
        color: "#414BAB",
        textShadowColor: "#0003",
        textShadowOffset: { width: 3, height: 1 },
        textShadowRadius: 10,
        marginVertical: 5,
      },
      subtitle: {
        fontSize: 14,
        fontWeight: "400",
        color: "#3d3d3d",
        letterSpacing: 0.4,
        lineHeight: 23,
        marginVertical: 5,
      },
  });

export default {WelcomeScreen}