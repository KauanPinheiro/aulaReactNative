import React ,{useState} from "react";
import { FlatList, Text, View,StyleSheet, Pressable } from "react-native";
import { ListItem,Avatar,ThemeProvider} from "@rneui/themed";

import Icon  from "react-native-vector-icons/Ionicons";;
import foods from "../data/foods";

export default props => {

    const [add,setAdd] = useState(0);

    function  getFoodItem({item: food}){
      
        return(
            <ThemeProvider>
                <ListItem
                
                    style={style.body}
                    
                >

                <Avatar source={{uri: food.img}}
                        style={style.img}
                        size={50}
                        rounded
                />

                <ListItem.Content>
                    <ListItem.Title style={style.titulo}>{food.nome}</ListItem.Title>
                    <ListItem.Title style={style.textDescricao}>{food.descricao}</ListItem.Title>
                    <ListItem.Title style={style.preco}>{food.preco}</ListItem.Title>
                </ListItem.Content>

                <ListItem.Chevron
                    name="remove"
                    color="#FFF"
                    size={30}
                    backgroundColor="#FFA725"
                    borderRadius={20}
                    
                />
                
                <Text style={style.textItem}>{add}</Text>

                <ListItem.Chevron
                    name="add"
                    color="#FFF"
                    size={30}
                    backgroundColor="#FFA725"
                    borderRadius={20}
                    onPress={() => setAdd(add ++)}
                    
                    
                />

               
                </ListItem>
             
            </ThemeProvider>
        )
    }
    return(
        <View style={{flex:1}}>
             
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
            borderRadius:5,
            justifyContent:"center",
            alignItems:"center",
            margin:15,
            elevation:20
    
           
        },
        img:{
            width:50,
            height:50
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
            fontWeight: "bold",
            margin:6
        },
        textDescricao:{
            fontSize:15,
            color: "gray",
            fontFamily: "Platypi",
            fontWeight: "bold",
            textAlign: "left",
            justifyContent:'center',
            
        },
        textItem:{
            fontSize:25,
            color: "black",
            fontFamily: "Platypi",
            fontWeight: "bold"
        },
       
    }
)