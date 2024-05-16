import React from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { ListItem,Button, ThemeProvider } from "@rneui/themed";

import Icon  from "react-native-vector-icons/Ionicons";
import popular from "../data/popular";

export default props => {


        function getPopularItem({item: popula}){
            return(
                <ThemeProvider>
                    
                    <ListItem style={style.bodyListem}>
                        <ListItem.Content>
                    <ListItem.Title style={style.titulo}>{popula.name}</ListItem.Title>
                    <ListItem.Subtitle style={style.numeroKm}>{popula.km}</ListItem.Subtitle>
                        </ListItem.Content>

                <Pressable style={{
                                display:"flex",
                                alignItems:"flex-end"
                                }}>
                <ListItem.Chevron
                        name="bookmark"
                        color="#797BEC"
                        size={30}
                        borderRadius={20}
                        
                        
                    />
                <Button
                    title="More detais"
                    buttonStyle={{
                        backgroundColor: '#797BEC',
                        borderWidth: 1,
                        borderColor: '#797BEC',
                        borderRadius: 10,
                    }}
                    containerStyle={{
                        width: 150,
                        marginTop:30
                    
                    }}
                    titleStyle={{ fontWeight: 'bold', 
                    color:"#ffffff"
                    }}
                />
                
                </Pressable>
            </ListItem>

                </ThemeProvider>
        )
    }
    

    return(
      <FlatList
        keyExtractor={popula => popula.id.toString()}
        data={popular}
        renderItem={getPopularItem}
      />

      
    )
}

const style = StyleSheet.create(
    {
        bodyListem:{
            justifyContent:"center",
            alignItems:"center",
            borderRadius:20,
            borderTopLeftRadius:1,
            elevation:7,
            marginLeft:15,
            marginRight:15,
            marginTop:10
            
        
        },
        titulo:{
            fontSize:25,
            fontFamily:"Roboto",
            fontWeight:"bold",
            marginBottom:15
        },
        numeroKm:{
            fontSize:16,
            fontWeight:"bold",
            color:"gray",

        },
    }
)