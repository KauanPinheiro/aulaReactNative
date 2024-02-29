import React from "react";
import {Text, View} from "react-native";

import Janela from "./components/Janela";
import Segundo from "./components/Segundo";
import Terceiro from "./components/Terceiro";
import estilo from "./components/estilo";

 export default () => {

    return(
        <View style={[estilo.fundo, estilo.fonte]}>

            <Janela/>
            <Segundo/>
            <Terceiro/>
            <Text>Testando view</Text>
        </View>
    )
}


