import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native"

export default props => {

    return(
        <View style={style.body}>
            <Text>Acessar conta!</Text>

            <TextInput
                        textAlign="left"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="Email ID"
                        placeholderTextColor="#B3C8CF"
            />

            <TextInput
                        textAlign="left"
                        label="Senha"
                        keyboardType="email-address"
                        placeholder="Senha"
                        placeholderTextColor="#B3C8CF"
            />

            <Text>Criar conta...</Text>

            <Pressable>
                <Text>Entrar</Text>
            </Pressable>

        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#EEEEEE",
        }
    }
)