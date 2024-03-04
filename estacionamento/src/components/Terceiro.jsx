import React from "react";
import { View,Text, StyleSheet } from "react-native";

export default () => {

    return(
        <View>
                <Text style={visual.texto}>Testando o etilo no React Native </Text>
        </View>
    )
};

const visual = StyleSheet.create(
    {
        texto:{
            color: "#FFFF00",
            padding: 20,
            fontSize: 50,
            backgroundColor: "#00FF00",
            borderColor: "#00FFFF"
        }

    }
)


