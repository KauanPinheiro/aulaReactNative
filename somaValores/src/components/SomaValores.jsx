import React, { useState } from "react";
import { Button, Text, View } from "react-native"
import styleSoma from "../styleSoma";



export default props => {
  

        

    return(
        <View>

                  <Text style={styleSoma.textG}>Valor 1</Text>
                        <Text style={styleSoma.textG}></Text>

                    <Text style={styleSoma.textG}>Valor 2</Text>
                        <Text style={styleSoma.textG}></Text>

            <Button title="Soma"/>

            <Text style={styleSoma.textG}>Resultado</Text>
  

                
            
        </View>
    )
}