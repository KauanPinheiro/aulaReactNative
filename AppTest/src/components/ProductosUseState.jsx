import React, { useState }  from "react";
import { View,Text,TextInput} from "react-native";
import { ListItem, Button  } from "@rneui/base";

import produtos from "../data/produtos";



export default props => {

    const [valor, setValor] = useState("");

    const expensivelProductos = produtos.filter(produto => produto.price >= valor);

    return(
        <View>
            <TextInput
                keyboardType="numeric"
                value={valor}
                placeholder="Filtrar Preço"
            />
            {expensivelProductos.map( produto => (
                <ListItem key={produto.id} >
                    <Text>{produto.emoji}</Text>
                    <ListItem.Title>{produto.name}</ListItem.Title>
                    <ListItem.Subtitle>{produto.price}</ListItem.Subtitle>
                    <Button>Comprar</Button>
                </ListItem>
            ))}
        </View>
    )
}