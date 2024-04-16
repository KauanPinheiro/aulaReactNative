import { Avatar, ListItem, Text } from "@rneui/base";
import React from "react";
import { View, TouchableHighlight,Image } from "react-native";

export default props => {

const titulo = "";
const subtitulo = "";

    return(
            <View style={{
                flex: 1,
                margin:10
            }}>
                <ListItem
                    Component={TouchableHighlight}
                    containerStyle={{
                        backgroundColor:"#8576FF",
                        height:200,
                        borderRadius:16,
                        alignItems:"center",
                        justifyContent:"center"
                    }}
                    disabledStyle={{opacity:0.5}}
                    onLongPress={() => console.log("onLongPress()")}
                    onPress={() => console.log("onPress()")}
                    pad={20}

                >
                <Image
                    source={require('../Img/profile.png')}
                    style={{width: 50, height: 100}}
                    resizeMode="contain"
                />
                <ListItem.Content>
                    <ListItem.Title>
                        <Text>{titulo}</Text>
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        <Text>{subtitulo}</Text>
                    </ListItem.Subtitle>
                </ListItem.Content>

                </ListItem>

            </View>
    )
}