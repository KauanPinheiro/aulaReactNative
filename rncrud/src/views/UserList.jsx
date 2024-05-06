import React from "react";
import { View,Text,FlatList,Alert} from "react-native"
import { ListItem,Avatar,ThemeProvider} from "@rneui/themed"


import  Icon from "react-native-vector-icons/Ionicons"
import users from "../data/users";


export default props => { 

        function confirmUserDeletetion(user){
            Alert.alert('Excluir usuário','Deseja excluir o usuário',
            [{
                text: 'Sim',
                onPress(){
                    console.log('delete' + user.id)
                }
            },
            {
                text:'Não'
            }
        ]
            )
        }

        function getUserItem({item: user}){
            return(
                <ThemeProvider>
                    <ListItem
                    bottomDivider
                    onPress={() => {
                        props.navigation.navigate('UserForm')
                    }}
                    >

                    <Avatar source={{uri: user.avatarURL}}/> 
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>    .

                    <ListItem.Chevron
                        name="edit"
                        color="orange"
                        size={25}
                        
                    />
                    <ListItem.Chevron
                    
                    />

                    </ListItem>
                </ThemeProvider>
            )
        }

    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}