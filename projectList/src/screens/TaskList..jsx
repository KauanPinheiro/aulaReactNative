//Imports
import React, { Component } from "react";
import { SafeAreaView,
        Text,
        View,
        ImageBackground,
        StyleSheet,
        FlatList,
        TouchableOpacity,
        Platform,
        Alert } from "react-native";

import Task from "../components/Task";
import AddTask from "./AddTask";

//Importando o estilo
import commonStyles from "../commonStyles";

import moment from 'moment';
import 'moment/locale/pt-br'

//Import de imagens
import TodayImage from '../../assets/imgs/today.jpg'


const data = moment().locale('pt-br').format('MMM Do YY'); 

export default class TaskList extends Component  {

    state = {
        tasks: [{
            id: Math.random(),
            descricao: 'Comprar livro de React Native',
            dataEstimada: new Date(),
            concluidaEm: new Date(),
        },
        {
            id: Math.random(),
            descricao: 'Ler livro de React Native',
            dataEstimada: new Date(),
            concluidaEm: null,
        },  
        ]
    }


    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.concluidaEm = task.concluidaEm ? null : new Date()
            }
        })

        setState({ tasks : tasks })
    }

    render(){

    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
    
    
    return (
//Inicio Código
        <SafeAreaView style={style.container}>
            <AddTask
                
            />
            <ImageBackground source={TodayImage} style={style.background}>
               <View style={style.titleBar}>
                    <Text style={style.title}>Hoje</Text>
                    <Text style={style.subTitle}>{data}</Text>
                </View>     
            </ImageBackground>
            <View style={style.taskList}>
                
{/*Importando a lista de marcação do componentes Tasks*/}
        
                    <FlatList
                        data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} />}
                    />
                    
            </View>
        </SafeAreaView>

        )
    }
}
                                                                     
//Styles
const style = StyleSheet.create({

    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList:{
        flex:7
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.colors.secundary,
        marginLeft: 20,
        marginBottom: 20,
    },
    subTitle:{
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: commonStyles.colors.secundary,
        marginLeft: 20,
        marginBottom: 20,
    },
});