import React from "react";
import { Pressable, View, Image, Text, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export default props => {

    return(
        <View>
            <Pressable>
            <Image source={require('../img/imgLoginScreen2.png')}/>
            </Pressable>

            <Text>Login</Text>

            <TextInput
            textAlign="left"
            label="Email"
            keyboardType="email-address"
            placeholder="Email ID"
            />

            <TextInput
            textAlign="left"
            label="password"
            keyboardType="name-phone-pad"
            placeholder="Password"
            />

            <Pressable>
                <Text>Login</Text>
            </Pressable>

            <Text>Or, login with...</Text>

            <Pressable>

                <Pressable>
                    <Icon name="logo-google" size={25} color="red"/>
                </Pressable>

                <Pressable>
                    <Icon name="logo-facebook" size={25} color="blue"/>
                </Pressable>

                <Pressable>
                    <Icon name="logo-twitter" size={25} color="blue"/>
                </Pressable>

            </Pressable>

            <Pressable>
                <Text>New to the app?</Text>
                <Text>Register</Text>
            </Pressable>

        </View>
    )
}