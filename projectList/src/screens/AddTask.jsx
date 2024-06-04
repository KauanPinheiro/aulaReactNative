import React, { Component } from "react";
import { Modal,View,TouchableWithoutFeedback,Text,TouchableOpacity,TextInput,Platform, StyleSheet} from "react-native"

import DateTimePicker from "@react-native-community/datetimepicker"

import commonStyles from "../commonStyles";
import moment from "moment";

const initialState = { desc: '', date: new Date(), showDatePicker: false}

export default class AddTask extends Component {

    state = {
        ...initialState
    }

    render(){

        return(
            <Modal
                transparent={true}
                visible={this.props.isVisible}
                onRequestClose={this.onCancel}
                animationType="slide"
            >
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={style.background}></View>
                </TouchableWithoutFeedback>

                        <View style={style.container}>
                            <Text style={style.header}>Nova tarefa</Text>
                            <TextInput
                                style={style.input}
                                placeholder="Informe a descrição"
                                value={this.state.desc}
                            />

                                <View style={style.buttons}>
                                    <TouchableOpacity
                                        onPress={this.props.onCancel}
                                    >
                                        <Text style={style.button}>Cancelar</Text>
                                    </TouchableOpacity> 

                                    <TouchableOpacity
                                        onPress={this.save}
                                    >
                                        <Text style={style.button}>Salvar</Text>
                                    </TouchableOpacity>

                                </View>
                        </View>

                        <TouchableWithoutFeedback onPress={this.props.onCancel}>
                            <View style={style.background}></View>
                        </TouchableWithoutFeedback>
                    
            </Modal>

               
        )
    }
}

const style = StyleSheet.create(
    {
        background:{
            flex:1,
            backgroundColor: "rgba(0,0,0,7)"
        },
        container:{
            backgroundColor:"#FFF"
        },
        header:{
            fontFamily: commonStyles.fontFamily,
            backgroundColor:commonStyles.colors.today,
            color: commonStyles.colors.secundary,
            textAlign: "center",
            padding: 15,
            fontSize:18
        },
        input:{
            fontFamily: commonStyles.fontFamily,
            height: 40,
            margin: 15,
            backgroundColor: "#FFF",
            borderWidth: 1,
            borderColor: "#E3E3E3",
            borderRadius: 6
        },
        buttons:{
            flexDirection: "row",
            justifyContent: "flex-end"
        },
        button:{
            margin: 20,
            marginRight: 30,
            color: commonStyles.colors.today
        },
        date:{
            fontFamily: commonStyles.fontFamily,
            fontSize: 20,
            marginLeft: 15
        }

    }
)