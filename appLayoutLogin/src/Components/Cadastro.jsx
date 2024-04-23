import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import estilo from "./estilo";
import Icon from 'react-native-vector-icons/Ionicons';



export default () => {

    return(

        <View style={{alignItems:"center"}}>

            <Pressable style={{flexDirection:"row",marginRight:250}}>
                <Text style={estilo.titulo}>Fox</Text>
                    <Text style={estilo.titulo2}>Hub</Text>
            </Pressable>
                
            
            <Pressable style={estilo.alinhamentoText}>
                <Text style={estilo.fonteG}>Welcome Back,</Text>
                    <Text style={estilo.fontP}>Sign in to continue</Text>
            </Pressable>

                <Pressable style={{margin:10}}></Pressable>
           
            <Pressable style={estilo.containerAlinhamento}>
                <Icon name="mail-outline" size={20} color="#B3C8CF"/>
                    <TextInput
                    label = "email"
                    maxLength={100}
                    placeholder="Email"
                    keyboardType="email-address"
                    />
            </Pressable>

            <Pressable style={estilo.containerAlinhamento}>
                <Icon name="lock-closed-outline" size={20} color="#B3C8CF"/>
                    <TextInput
                    label = "password"
                    maxLength={12}
                    placeholder="Password"
                    keyboardType="name-phone-pad"
                    />
            </Pressable>

            <Pressable style={estilo.btn}>
                <Text style={estilo.textBtn}>Sign in</Text>
            </Pressable>

            <Text style={estilo.textOR}>OR</Text>
            
            <Pressable style={estilo.containerFlexRow}>

                <Pressable style={estilo.containerAlinhamentoIcone}>
                    <Text style={estilo.textBtnRedes}>Sign up with</Text>
                        <Image source={require('../Img/facebook.png')} style={estilo.img}/>
                </Pressable>

                 <Pressable  style={estilo.containerAlinhamentoIcone}>
                    <Text style={estilo.textBtnRedes}>Sign up with</Text>
                         <Image source={require('../Img/google.png')} style={estilo.img}/>
                </Pressable>

            </Pressable>

            <Pressable style={{flexDirection:"row"}}>
                <Text style={estilo.textRodape}>Don´t have an account?</Text>
                    <Text style={estilo.textRodape2}>sign up</Text>
            </Pressable>

        </View>
    )
}