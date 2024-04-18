import React from "react";
import { View,Image,Text,Pressable, StyleSheet } from "react-native";



export default param => {

    return(
        <View style={style.body}>

            <Pressable style={style.contImg}>
                <Image
                source={require('../Img/tesoura.png')}
                style={style.styleImg}
                />
                
                <Text style={style.title}>CutForU</Text>

                
                <Text style={style.text}>Get the Best Haircut here</Text>
            </Pressable>

         

            <Pressable style={style.contBtn}>

            <Pressable>
                <Text>Book Now</Text>
            </Pressable>

            <Pressable>
                <Text>login</Text>
            </Pressable>

            </Pressable>

        </View>

    )
}

const style = StyleSheet.create(
    {
        body:{
            backgroundColor:"#797AEC",
            flexGrow:1
        },
        contImg:{
            justifyContent:"center",
            alignItems:"center",
            marginTop:200
        },
        styleImg:{
            width:150,
            height:150
        },
        title:{
            fontSize:25,
            color:"#FFF",
            fontFamily:"Bebas Neue",
            fontWeight:"bold",
            margin:10
        },
        text:{
            fontSize:15,
            color:"#FFF",
            fontFamily:"Bebas Neue",
            fontWeight:"100",
        },
        contBtn:{
            justifyContent:"center",
            alignItems:"center"
        }

    }
)