import React, { useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import estilo from "./estilo";

export default props => {

    const[usuario, setUsuario] = useState("")
    const[senha, setSenha] = useState("")

    const btnEntre = () => {
       if(usuario == "test@gmail.com" && senha == "1234"){
                console.warn(`Seja bem-vindo(a)`) 
       }else{
                console.warn(`Usuário inválido!`)
       }
        
    }

    const btnSair = () => {
        console.warn("Sessão encerrada!")
    }
    
    return(
        <View>

                <View style={estilo.positionImg}>
                    <Image source={require('../img/count.png')} style={estilo.img}/>
                </View>


                <View>
                    <TextInput
                        color={"#FFFF"}
                        style={estilo.input}
                        autoFocus
                        textAlign="center"
                        label = "Name"
                        value={usuario}
                        onChangeText={usuario => setUsuario(usuario)}
                        maxLength={50}
                        placeholder="Insíra seu usuário"
                        keyboardType="name-phone-pad"
                        placeholderTextColor="#FFFFFf"
                                
                    />
                </View>


                <View>
                    <TextInput
                        color={"#FFFF"}
                        style={estilo.input}
                        textAlign="center"
                        label = "Senha"
                        value={senha}
                        onChangeText={senha => setSenha(senha)}
                        maxLength={20}
                        placeholder="Insíra sua senha"
                        keyboardType="name-phone-pad"
                        placeholderTextColor="#FFFFFf"
                    />
                </View>

                <Text style={estilo.textStyle}>Não tem usuário? Clique aqui.</Text>


                <View style={estilo.containeBotao}>
                    <Button
                    color={"#3CB371"}
                    title="Entrar"
                    onPress={btnEntre}
                    />
                </View>


                <View style={estilo.containeBotao} >
                <Button 
                    color={"#FF6347"}
                    title="Sair"
                    onPress={btnSair}
                    />
                </View>
                
                
        </View>
    )
}
