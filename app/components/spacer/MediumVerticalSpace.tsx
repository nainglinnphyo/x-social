import React from "react"
import { View, StyleSheet } from "react-native"

const MediumVerticalSpace = ()=> {
    return (
        <View style={styles.mediumSpace}></View>
    )
}

const styles = StyleSheet.create({
    mediumSpace: {
        height: 50
    }
})

export default MediumVerticalSpace