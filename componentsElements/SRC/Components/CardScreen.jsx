import React from "react";
import { View,Image} from "react-native"

import { Card, Text } from "@rneui/base";

export default props => {

    return(
        <View>
            <Card>
                <Card.Title>Test</Card.Title>
                <Card.Divider/>
                    <View
                        style={{
                            position:"relative",
                            alignItems:"center",
                        
                        }}
                    >
                            <Image
                                style={{width: "100%", height: 100}}
                                resizeMode="contain"
                                source={require('../Img/avatar.png')}
                            
                            />

                    <Text>User</Text>

                    </View>
            </Card>
        </View>
    )
}