import React from "react"; 
import { View,Image, Pressable, Text,StyleSheet} from "react-native";




export default props => {

    return(
        <View style={style.body}>

            <Pressable>
                <Image source={require('../img/icons2.png')} style={{height:150,width:150}}/>
            </Pressable>

            <Pressable style={style.btn}  onPress={()=> props.navigation.navigate("Login")}>
                <Text style={style.text}>IR</Text>
            </Pressable>
            
        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            alignItems:"center",
            justifyContent:"center",
            flex:1,
            backgroundColor:"#F6F5F2"
        },
        btn:{
                width:300,
                height:50,
                backgroundColor:"#008DDA",
                alignItems:"center",
                justifyContent:"center",
                borderRadius:10,
                marginTop:70
            },
        text:{
            color:"#FFF",
            fontFamily:"Jersey 25",
            fontWeight:"bold"
        }
        
    }
)