import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import estilo from "./estilo";
import Icon from 'react-native-vector-icons/Ionicons';



export default () => {

    return(

        <View style={{alignItems:"center"}}>
            <Text style={estilo.titulo}>FoxHub</Text>
            
            <Pressable style={estilo.alinhamentoText}>
            <Text style={estilo.fonteG}>Welcome Back,</Text>
            <Text style={estilo.fontP}>Sing up continue</Text>
            </Pressable>

            <Pressable style={estilo.containerAlinhamento}>
            <Icon name="person-outline" size={20} color="#B3C8CF"/>
            <TextInput
            //autoFocus
            label = "name"
            maxLength={50}
            placeholder="Name"
            keyboardType="name-phone-pad"
            />
            </Pressable>

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
                <Text style={estilo.textBtn}>Sign Up</Text>
            </Pressable>

            <Text style={estilo.textOR}>OR</Text>
            
            <Pressable style={estilo.containerFlexRow}>
            <Pressable style={estilo.containerAlinhamentoIcone}>
                <Text>Sing up with</Text>
                <Image source={require('../Img/facebook.png')} style={estilo.img}/>
            </Pressable>

            <Pressable  style={estilo.containerAlinhamentoIcone}>
                <Text>Sing up with</Text>
                <Image source={require('../Img/google.png')} style={estilo.img}/>
            </Pressable>
            </Pressable>

            <Pressable>
            <Text>Already have account ?</Text>
            <Text>Sing in</Text>
            </Pressable>

        </View>
    )
}