import React from "react";
import { } from "react-native";
import { ListItem,Button } from "@rneui/themed";



export default props => {

    return(
        <ListItem>
            <ListItem.Content>
                <ListItem.Title>John's Baber</ListItem.Title>
                <ListItem.Subtitle>0.5 km</ListItem.Subtitle>
            </ListItem.Content>
            <Button
                title="More detais"
                buttonStyle={{
                    backgroundColor: '#797BEC',
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
                  color:"#ffffff"
                }}
            />
            
        </ListItem>
    )
}