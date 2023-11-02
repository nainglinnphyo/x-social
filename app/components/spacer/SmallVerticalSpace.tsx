import React from "react"
import { View, StyleSheet } from "react-native"

const SmallVerticalSpace = ()=> {
    return (
        <View style={styles.smallSpace}></View>
    )
}

const styles = StyleSheet.create({
    smallSpace: {
        height: 20
    }
})

export default SmallVerticalSpace