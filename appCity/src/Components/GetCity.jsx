import React from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View} from "react-native";

export default props => {

    return(
        <View style={style.body}>
            <Text style={style.title}>Cities</Text>

            <TextInput
            style={style.input}
            label = "CityOne"
            maxLength={30}
            placeholder="Tokyo"
            placeholderTextColor="#222831"
            />
            <TextInput
            style={style.input}
            label = "CityTwo"
            maxLength={30}
            placeholder="Japan"
            placeholderTextColor="#222831"
            />

            <Pressable style={style.button} onPress={()=> props.navigation.navigate("Cities")}>
                <Text style={style.textButton}>Add City</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            flex:1,
            justifyContent: "center",
            alignItems:"center",
            backgroundColor: "#FDA403",
            
        },
        title:{
            fontSize:50,
            color: "#FFF",
            margin: 20
        },
        input:{
            width: 350,
            borderWidth:1,
            borderRadius:5,
            padding:10,
            backgroundColor: "#FFF",
            padding: 10,
            margin: 10
        },
        button:{
            margin:15,
            width: 350,
            height: 50,
            borderRadius: 5,
            backgroundColor:'#31363F',
        },
        textButton:{
            textAlign:"center",
            padding:15,
            color:'#FFF',
            fontSize:16,
            fontFamily:"Merriweather"
        }

    }
)