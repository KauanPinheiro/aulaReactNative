import React from "react";
import { FlatList, Text, View,StyleSheet } from "react-native";
import { ListItem,Avatar,ThemeProvider} from "@rneui/themed";

import Icon  from "react-native-vector-icons/Ionicons";;
import foods from "../data/foods";

export default props => {


    function  getFoodItem({item: food}){
        return(
            <ThemeProvider>
                <ListItem
                
                    style={style.body}
                    
                >

                <Avatar source={{uri: food.img}}/>

                <ListItem.Content>
                    <ListItem.Title style={style.titulo}>{food.nome}</ListItem.Title>
                    <ListItem.Title >{food.descricao}</ListItem.Title>
                    <ListItem.Title style={style.preco}>{food.preco}</ListItem.Title>
                </ListItem.Content>

                <ListItem.Chevron
                    name="remove"
                    color="#FFF"
                    size={30}
                    backgroundColor="#FFA725"
                    borderRadius={20}
                />
                
                <Text style={style.textItem}>0</Text>
                <ListItem.Chevron
                    name="add"
                    color="#FFF"
                    size={30}
                    backgroundColor="#FFA725"
                    borderRadius={20}
                />

                </ListItem>
            </ThemeProvider>
        )
    }
    return(
        <View>
            <FlatList
                keyExtractor={food => food.id.toString()}
                data={foods}
                renderItem={getFoodItem}
            />
        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            backgroundColor:"#FFFFFF",
            borderRadius:20,
            borderWidth:1,
            margin:20
           
        },
        titulo:{
            fontSize:25,
            color: "black",
            fontFamily: "Radio Canada Big",
            fontWeight: "bold"
        },
        preco:{
            fontSize:25,
            color: "#43AA48",
            fontFamily: "Platypi",
            fontWeight: "bold"
        },
        textItem:{
            fontSize:25,
            color: "black",
            fontFamily: "Platypi",
            fontWeight: "bold"
        }

    }
)