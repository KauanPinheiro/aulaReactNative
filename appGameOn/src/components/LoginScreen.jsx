import React from "react";
import { Pressable, View, Image, Text, TextInput, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export default props => {

    return(
        <View style={style.body}>

            <Pressable style={style.contImg}>
                <Image source={require('../img/imgLoginScreen2.png')} style={style.img}/>
            </Pressable>

            <Pressable style={style.container}>
                <Text style={style.textLogin}>Login</Text>
                
                    <Pressable style={style.containerAlinhamento}>
                        <Icon name="at" size={18} color="#B3C8CF"/>
                        <TextInput
                        textAlign="left"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="Email ID"
                        placeholderTextColor="#B3C8CF"
                        />
                    </Pressable>

                    <Pressable  style={style.containerAlinhamento}>
                        <Icon name="lock-closed-outline" size={18} color="#B3C8CF"/>
                        <TextInput
                        textAlign="left"
                        label="password"
                        keyboardType="name-phone-pad"
                        placeholder="Password"
                        placeholderTextColor="#B3C8CF"
                        />
                    </Pressable>

                    <Pressable style={style.button}>
                        <Text style={style.textBtn}>Login</Text>
                    </Pressable>

            </Pressable>

           
            <Text style={style.text}>Or, login with...</Text>

            <Pressable style={style.contAlinhamentoBox}>

                <Pressable style={style.box}>
                    <Icon name="logo-google" size={25} color="#000000"/>
                </Pressable>

                <Pressable style={style.box}>
                    <Icon name="logo-facebook" size={25} color="#1277F2"/>
                </Pressable>

                <Pressable style={style.box}>
                    <Icon name="logo-twitter" size={25} color="#1DA1F2"/>
                </Pressable>

            </Pressable>

            <Pressable style={style.contAlinhamentoText} onPress={()=> props.navigation.navigate('Register')}>
                <Text  style={style.text}>New to the app?</Text>
                <Text  style={style.text2}>Register</Text>
            </Pressable>

        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            backgroundColor:"#FFF7FC",
            flexGrow:1
        },
        contImg:{
            justifyContent:"center",
            alignItems:"center",
            paddingTop:90,
        },
        img:{
            width:300,
            height:200,
        },
        container:{
            paddingLeft:10,
            margin:25
        },
        textLogin:{
            fontSize:25,
            fontFamily: "Pixelify Sans",
            fontWeight:"bold",
            color:"black",
            marginBottom:10
        },
        containerAlinhamento:{
            flexDirection:"row",
            alignItems:"center",
            borderBottomWidth:1,    
            borderColor:"#B3C8CF",
            height:40,
            width:320,
            marginTop:15
        },
        button:{
            width:320,
            height:50,
            backgroundColor:"#8644A2",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10,
            marginTop:25
        },
        textBtn:{
            color: "#FFF",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:15
        },
        text:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            color:"#B3C8CF",
            fontSize:15
        },
        text2:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            color:"#8644A2",
            fontSize:15,
            paddingLeft:4
        },
        contAlinhamentoText:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:'center',
        },
        box:{
            borderWidth:1,
            borderColor:"#B3C8CF",
            borderRadius:10,
            width:70,
            height:50,
            alignItems:"center",
            justifyContent:"center"
        },
        contAlinhamentoBox:{
            flexDirection:"row",
            justifyContent:"space-around",
            margin:35
        }
        
    }
)
