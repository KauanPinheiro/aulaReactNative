import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";


export default props =>{

    const [text, onChangeText] = useState('')
    const [number, onChangeNumber] = useState('')


    return(

        <SafeAreaView>

            <Text>Entrada de texto</Text>
                <TextInput
                style={style.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Insíra um texto"
                />
                <TextInput
                style={style.input}
                onChangeNumber={onChangeNumber}
                value={number}
                placeholder="Insíra um número"
                keyboardType="numeric"
                />

        </SafeAreaView>


    )
}

const style = StyleSheet.create(
    {
        input:{
            width: 200,
            height: 40,
            margin: 1,
            borderWidth: 1,
            padding: 10
        }
    }
)