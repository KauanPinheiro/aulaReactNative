import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import estilo from "./estilo";


export default props => {

    const[text, setText] = useState('')
    const[nome, setNome] = useState('')

    return(
        <SafeAreaView>
            <Text style={estilo.textG}>Entrada de texto:</Text>

            <TextInput
                style = {style.input}
                label = " Email"
                value = {text}
                onChangeText={text => setText(text)}
                maxLength={20}
                placeholder="Insíra seu email"
                placeholderTextColor="#ffff"
                keyboardType="email-address" 

            />

            <Text style={estilo.textG}>Insíra seu nome: </Text>
           
            <TextInput
            style = {style.input}
            maxLength={50}
            onChangeText={(nome) => setNome(nome)}

            />

            
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        input:{
            backgroundColor: "gray",
            color: "#fff",
            width: 200,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10

        }
    }
)