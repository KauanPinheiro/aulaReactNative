import React from "react";
import { View,TextInput,Image,Pressable,StyleSheet,Text} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import Drawer from "../routers/Drawer";

export default props => {

    return(
        <View style={style.body}>

              <Pressable style={style.containerImg}>
                <Image source={require('../img/icons2.png')} style={{height:150,width:150}}/>
              </Pressable>            

            <Pressable style={{paddingTop:70}}>
                <Pressable style={style.containerAlimentoInput}>
                            <Icon name="at" size={18} color="black"/>
                            <TextInput
                            textAlign="left"
                            label="Email"
                            keyboardType="email-address"
                            placeholder="Email ID"
                            placeholderTextColor="black"
                            />
                </Pressable>
                        

                <Pressable style={style.containerAlimentoInput}>
                            <Icon name="lock-closed-outline" size={18} color="black"/>
                            <TextInput
                            textAlign="left"
                            label="password"
                            keyboardType="name-phone-pad"
                            placeholder="Password"
                            placeholderTextColor="black"
                            />
                </Pressable>
            </Pressable>
                        
            
            <Pressable style={style.containerAlinhamento}>

                <Pressable style={style.btn1} onPress={()=> props.navigation.navigate("Home")}>
                    <Text style={style.text}>Entrar</Text>
                </Pressable>

            
                <Pressable style={style.btn2 }>
                    <Text style={style.text}>Sair</Text>
                </Pressable>

            </Pressable>




        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            flex:1,
            backgroundColor:"#F6F5F2",
            alignItems:"center",
        },
        containerImg:{
            justifyContent:"center",
            alignItems:"center",
            paddingTop:100,
        },
        containerAlimentoInput:{
            flexDirection:"row",
            alignItems:"center",
            borderBottomWidth:2,    
            borderColor:"black",
            height:40,
            width:320,
            marginTop:30
        },
        containerAlinhamento:{
            flexDirection:"row",
            paddingTop:100
        },
        btn1:{
                width:150,
                height:50,
                backgroundColor:"#008DDA",
                alignItems:"center",
                justifyContent:"center",
                borderRadius:10,
                margin:10
            
            },
        btn2:{
                width:150,
                height:50,
                backgroundColor:"#FF204E",
                alignItems:"center",
                justifyContent:"center",
                borderRadius:10,
                margin:10
            },
        text:{
            color:"#FFF",
            fontFamily:"Jersey 25",
            fontWeight:"bold"
        }
        
    }
)