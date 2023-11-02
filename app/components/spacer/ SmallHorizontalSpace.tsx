import React from "react"
import { View, StyleSheet } from "react-native"

const SmallHorizontalSpace = () => {
    return (
        <View style={styles.smallSpace}></View>
    )
}

const styles = StyleSheet.create({
    smallSpace: {
        width: 20
    }
})

export default SmallHorizontalSpace