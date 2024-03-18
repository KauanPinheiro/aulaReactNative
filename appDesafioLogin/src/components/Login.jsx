import React, { useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import estilo from "./estilo";

export default props => {

    const[use, setUse10] = useState("")
    const[senha,setSenha] = useState("")

    const btnEntre = () => {console.warn("Bem vindo ao sistema!")}

    const btnSair = () => {console.warn("Sessão encerrada!")}
    
    return(
        <View>

                <View style={estilo.positionImg}>
                    <Image source={require('../img/count.png')} style={estilo.img}/>
                </View>

                <TextInput
                    style={estilo.input}
                    autoFocus
                    textAlign="center"
                    label = "Name"
                    maxLength={20}
                    placeholder="Insíra seu nome"
                    keyboardType="name-phone-pad"
                    placeholderTextColor="#FFFFFf"
                            
                />

                <TextInput
                    style={estilo.input}
                    textAlign="center"
                    label = "Senha"
                    maxLength={20}
                    placeholder="Insíra sua senha"
                    keyboardType="name-phone-pad"
                    placeholderTextColor="#FFFFFf"
                    
                />

                    <Button
                    style={estilo.botao}
                    color={"#D8BFD8"}
                    title="Entrar"
                    onPress={btnEntre}


                    />

                    <Button 
                    color={"#D8BFD8"}
                    title="Sair"
                    onPress={btnSair}
                    />

            
                
        </View>
    )
}
