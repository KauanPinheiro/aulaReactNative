import 'react-native-gesture-handler';

import React from "react";
import { SafeAreaView} from "react-native"

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import NotasScreen from './components/NotasScreen';
import FaltasScreen from './components/FaltasScreen';
import DocumentacaoScreen from './components/DocumentacaoScreen';
import CursosScreen from './components/CursosScreen';
import AjudaScreen from './components/AjudaScreen';


const Drawer = createDrawerNavigator();

export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Drawer.Navigator 
                    initialRouteName="Ajuda"    
                    screenOptions={{    
                        drawerActiveBackgroundColor:"#DFF5FF",
                        drawerActiveTintColor:"#FF204E",
                        drawerPosition:"left"
                    
                    }}


                >
                    <Drawer.Screen name="Notas" component={NotasScreen}/>
                    <Drawer.Screen name="Faltas" component={FaltasScreen}/>
                    <Drawer.Screen name="Documentação" component={DocumentacaoScreen}/>
                    <Drawer.Screen name="Cursos" component={CursosScreen}/>
                    <Drawer.Screen name="Ajuda" component={AjudaScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>

        </SafeAreaView>
    )
}