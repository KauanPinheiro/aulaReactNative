import { StyleSheet } from  "react-native";

const estilo =  StyleSheet.create(
    {

       

        input:{
            width: 300,
            height: 70,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin: 10,
            backgroundColor: "#6A5ACD",
            fontSize: 16,
            fontFamily:"Courier Prime",

        },
        positionImg:{
            alignItems:"center",
            justifyContent: "center",
            marginBottom:60

            
        },
        img:{
            width: 75,
            height: 75,
        },
        containeBotao:{
            margin: 14,
            padding:1,
           
        },

        textStyle:{
            color: "#fff",
            fontSize: 13,
            fontFamily: "Courier Prime",
            marginLeft: 130,
            marginBottom: 50
        }

    }
)

export default estilo;