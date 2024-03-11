import React, {useState} from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import estilo from "../estilo";

export default props => {

    // let numero = 0 ;
    const [numero, setNumero] = useState(props.inicial)
  
    const inc = () => { setNumero(numero + 1)};

     const dec = () => { setNumero(numero - 1)};

    return(
        <View>

            <Image source={require('../img/count.png')}
            style={
                {
                    width: 100,
                    height: 100
                }
            }
            
            />
            <Text style={estilo.textG}>Contador</Text>

            <Text>{numero}</Text>

            <Button title="+" onPress={inc}/>

            <Button title="-" onPress={dec}/>

            
        </View>
    )
}
