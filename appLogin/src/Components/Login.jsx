import React from "react";
import { Image, SafeAreaView, StyleSheet, TextInput } from "react-native";
import {  } from "react-native-paper";

export default props => {


    return(
        <SafeAreaView>

                <Image source={require('../img/count.png')}
                    style={
                        {
                            width: 100,
                            height: 100
                        }
                    }
                />
                
                <TextInput
                    style={styleInput.input}
                    label = "Name"
                    maxLength={20}
                    placeholder="Insíra seu nome"
                    keyboardType="name-phone-pad"
                />

                <TextInput
                    style={styleInput.input}
                    label = "Name"
                    maxLength={20}
                    placeholder="Insíra sua senha"
                    keyboardType="name-phone-pad"
                />

                

        </SafeAreaView>
    )
}

const styleInput = StyleSheet.create( 
    {
        input:{
            width: 200,
            borderWidth: 1,
            borderRadius: 12,
            padding: 10
        }
    }
)