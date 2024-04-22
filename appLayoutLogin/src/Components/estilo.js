import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    
    titulo:{
        marginTop: 40,
        marginLeft: 20
    },
    alinhamentoText:{
        justifyContent:"center",
        alignContent:"center",
        marginTop:70,
        marginLeft:25

    },
    fontP:{
        fontSize: 16,
        color: 'gray',
        fontWeight:'bold'
    },
    fonteG:{
        fontSize: 30,
        color: "black",
        fontFamily: "Anton",
        fontWeight:'bold'
      
    },
    img:{
        width: 25,
        height: 25
    },
    containerAlinhamento:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,    
        borderColor:"#B3C8CF",
        height:45,
        width: 380,
        marginTop:25,
    },
    btn:{
        width:350,
        height:50,
        backgroundColor:"#283B8F",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        marginTop:70,

        
    },  
    textBtn:{
        color:"#FFF",
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",
        fontSize:15
    },  
    textOR:{
        color:"black",
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center",
        margin:20
    },
    containerFlexRow:{
        flexDirection:"row",
    
    },
    containerAlinhamentoIcone:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        borderColor:"black",
        borderWidth:1,
        width:150,
        height:50,
    }
    
})

export default estilo;