import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { GestureHandlerRootView, Swipeable} from "react-native-gesture-handler"

import commonStyles from "../commonStyles";
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from "moment";
import 'moment/locale/pt-br'

export default props => {

    
    const tarefaConcluidaNao = props.concluidaEm != null ?
        { textDecorationLine: 'line-through' } : {}

    const date = props.concluidaEm ? props.concluidaEm : props.dataEstimada

    const dateFormat = moment(date).locale('pt-br')
        .format('ddd, D [de] MMMM')

    const getRightContent = () => {
        return(
            <TouchableOpacity style={sy} />
        )
    }

    return (
        <GestureHandlerRootView>
            <Swipeable
            renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}
            >
                <View style={style.container}>
                    <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
                        <View style={style.checkContainer}>
                            {getCheckView(props.concluidaEm)}
                        </View>
                    </TouchableWithoutFeedback>
                    <View>
                        <Text style={[style.descricao, tarefaConcluidaNao]}>{props.descricao}</Text>
                        <Text style={style.date}>{dateFormat}</Text>
                    </View>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    )
    
}

function getCheckView(concluidaEm) {
    if (concluidaEm != null) {
        return (
            <View style={style.dataEstimada}>
                <Icon name='check' size={20} color='#FFF' />
            </View>
        )
    } else {
        return (
            <View style={style.pendente}>

            </View>
        )
    }
}

// Estilo das listas e caixa de seleção
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#2c2c2c',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pendente: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555',
    },
    dataEstimada: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center',
    },
    descricao: {

        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12,

    }
})