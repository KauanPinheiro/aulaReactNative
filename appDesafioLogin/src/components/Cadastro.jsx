import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import Logo from "./Logo";
import estilo from "./estilo";

export default props => {


    return(

        <View>
{/*Partir de cima da tela com o icone e texto*/}
                <View style={styleCadastro.containeAlinhamento}>
                        <Logo/>
                        <Text style={estilo.textCadastro}>Cadastro de Clientes</Text>
                </View>
{/*O primeiro campo de input com alguns componentes*/}
                <View>
                    <TextInput
                        style={estilo.inputCadastro}
                        textAlign="left"
                        
                        label="nome"
                        placeholder="Nome"
                        keyboardType="name-phone-pad"
                    />
                    <TextInput
                        style={estilo.inputCadastro}
                        textAlign="left"
                        label="email"
                        placeholder="E-mail"
                        keyboardType="email-address"
                    />
                    <TextInput
                         style={estilo.inputCadastro}
                        textAlign="left"
                        label="telefone"
                        placeholder="Telefone"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={estilo.inputCadastro}
                        textAlign="left"
                        label="endereco"
                        placeholder="Endereço"
                        keyboardType="name-phone-pad"
                    />

{/*O segundo campo de input com numero e cep para deixa um do lado do outro*/}
                </View>
                    <View style={styleCadastro.containeAlinhamento}>
                        <TextInput
                        style={estilo.inputCadastroMenor}
                        estilo={styleCadastro.containeEspachamento}
                        textAlign="left"
                        label="numero"
                        placeholder="Número"
                        keyboardType="name-phone-pad"
                        />
                        <TextInput
                        style={estilo.inputCadastroMenor}
                        textAlign="left"
                        label="cep"
                        placeholder="CEP"
                        keyboardType="numeric"
                        />
                     </View>
{/*O terceiro campo de input com cidade e numero para finalizar o formulario visualmente*/}
                <View>
                    <TextInput
                         style={estilo.inputCadastro}
                         textAlign="left"
                         label="cidade"
                         placeholder="Cidade"
                         keyboardType="name-phone-pad"
                    />
                    <TextInput
                         style={estilo.inputCadastro}
                         textAlign="left"
                         label="estado"
                         placeholder="Estado"
                         keyboardType="name-phone-pad"
                    />
                </View>
{/*O primeiro container de botoes para alinhamento e modiicação*/}
                <View style={styleCadastro.containeAlinhamento}>
                    <View style={styleCadastro.containeBotao}>
                        <Button
                            title="Cadastrar"
                        />
                    </View>
                    <View>
                        <Button
                            title="Altera"
                        />
                    </View>
                </View>
{/*O segundo container de botoes para alinhamento e modiicação*/}
                <View style={styleCadastro.containeAlinhamento}>
                    <View>
                        <Button
                            title="Excluir"
                        />
                    </View>
                    <View>
                    <Button
                        title="Pesquisar"
                    />
                    </View>
                </View>


        </View>

    )


}

const styleCadastro = StyleSheet.create(
    {
        containeAlinhamento:{
            flexDirection:"row",
            justifyContent:"space-around",
        },
        containeBotao:{
            width:120,
            height:50
        }
        
    }
)