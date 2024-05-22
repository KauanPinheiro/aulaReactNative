import React from "react";
import { View,Text, StyleSheet } from "react-native";

import Pessoas from "../data/Pessoas";
import { Card } from "@rneui/base";



export default props => {
    //Criando uma função de dando como paramêntro as pessoas com 18 ou +
    const maiores = Pessoas.filter(pessoa => pessoa.idade >= 18);

    return(
    // Visualizando a função
        <View>
            <Text style={{textAlign:"center",
                            margin:10,
                            fontSize:30,
                            fontWeight:'bold'
        }}>Maiores de 18 anos</Text>
    {/*Utilizando o map para mapear o função maiores e trazer os dados de nome e idade
        conforme o requisito 
    */}
            {maiores.map(pessoa => (
                <View key={pessoa.nome}>
                    <Card>
                        <Card.Title>{pessoa.nome}</Card.Title>
                        <Card.Title>{pessoa.idade}</Card.Title>
                    </Card>
                </View>
            ))}
        </View>
    )
}
