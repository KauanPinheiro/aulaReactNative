import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import estilo from "./estilo";

export default () => {




    return(

        <View>
            <Text>FoxHub</Text>
            
            <Text style={estilo.fonteG}>Welcome Back,</Text>
            <Text style={estilo.fontP}>Sing up continue</Text>

            <TextInput
            //autoFocus
            label = "name"
            maxLength={50}
            placeholder="Name"
            keyboardType="name-phone-pad"
            />

            <TextInput
            label = "email"
            maxLength={100}
            placeholder="Email"
            keyboardType="email-address"
            />

            <TextInput
            label = "password"
            maxLength={12}
            placeholder="Password"
            keyboardType="name-phone-pad"
            />

            <Pressable>
                <Text>Sing Up</Text>
            </Pressable>

            <Text>OR</Text>

            <Pressable>
                <Text>Sing up with</Text>
                <Image source={require('../Img/facebook.png')} style={estilo.img}/>
            </Pressable>

            <Pressable>
                <Text>Sing up with</Text>
                <Image source={require('../Img/google.png')} style={estilo.img}/>
            </Pressable>

        </View>
    )
}