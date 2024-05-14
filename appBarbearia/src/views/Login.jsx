import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Button} from "@rneui/themed"

export default props => {

    return(
        <View style={style.body}> 

            <Image source={require("../img/logo1.png")}
                    style={{
                        width:150,
                        height:150
                    }}
            />

            <Pressable style={{
                justifyContent:"center",
                alignItems:"center",
                margin:10
            }}>
                <Text style={{
                    color:"#FFF",
                    fontSize: 35,
                    fontWeight: 'bold'

                }}>CutForU</Text>
                <Text style={{
                    color:"#FFFFFF",
                    fontSize:15,
                    fontWeight: "bold"
                }}>Get the Best Haircut Here</Text>
            </Pressable>

            <Pressable style={{
                marginTop:100
            }}>

            <Button
                title="Book Now"
                buttonStyle={{
                    backgroundColor: '#FFFFFF',
                    borderWidth: 1,
                    borderColor: '#797BEC',
                    borderRadius: 10,
                  }}
                  containerStyle={{
                    width: 300,
                    marginHorizontal: 50,           
                    marginVertical: 10,
                  }}
                  titleStyle={{ fontWeight: 'bold', 
                  color:"#797BEC"
                }}
            />

            <Button
                title="login"
                buttonStyle={{
                    backgroundColor: '#797BEC',
                    borderWidth: 1,
                    borderColor: '#FFFFFF',
                    borderRadius: 10,
                  }}
                  containerStyle={{
                    width: 300,
                    marginHorizontal: 50,
                    marginVertical: 10,
                  }}
                  titleStyle={{ fontWeight: 'bold', 
                  color:"#FFFFFF"
                }}
            />

            </Pressable>
        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            backgroundColor: "#797BEC",
            flex: 1,
            alignItems:"center",
            justifyContent:"center"
        },


    }
)