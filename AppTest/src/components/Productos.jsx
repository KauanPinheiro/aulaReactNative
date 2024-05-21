import React from "react";
import { Button, FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import produtos from "../data/produtos";

export default props => {

        
    return(
        <View style={{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        }}>
           {produtos.map(produto => (
                <View key={produto.id} style={style.card}>
                    <Text style={style.emoji}>{produto.emoji}</Text>
                    <Text style={style.texto}>{produto.name}</Text>
                    <Text style={style.preco}>{produto.price}</Text>
                    <Pressable style={style.button}> 
                        <Text>Comprar</Text>
                    </Pressable>
                </View>
           ))}
        </View>

    )
}

const style = StyleSheet.create(
    {
        card:{
            flexDirection:"column",
            margin:10,
            padding:10,

        },
        emoji:{

        },
        texto:{
            fontSize:20,
            fontWeight:"bold"
        },
        preco:{
            fontSize:20,
            fontWeight:"bold",
            color:"tomato"
        },
        button:{
            width:100,
            height:40,
            backgroundColor: "green",
            borderRadius:10
        }
    }
)