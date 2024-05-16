import React from "react";
import { FlatList } from 'react-native';
import { ThemeProvider,ListItem, Avatar} from "@rneui/themed";

import user from "../data/user";
import persona from "../data/persona";



export default props => {

        function getUsuarioItem({item: use}){
            
            return(
                <ThemeProvider>
                     <ListItem>
                        <Avatar rounded title="A" containerStyle={{ backgroundColor: "grey" }} />
                            <ListItem.Content>
                                <ListItem.Title>{use.text}</ListItem.Title>
                                <ListItem.Subtitle>{use.saldo}</ListItem.Subtitle>
                             </ListItem.Content>
                    </ListItem>
                </ThemeProvider>
            )
        }


    return(
        <FlatList
        keyExtractor={personas => personas.id.toString()}
        data={persona}
        renderItem={getUsuarioItem}
        />
    )
}