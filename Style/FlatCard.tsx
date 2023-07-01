import { StyleSheet } from "react-native";

const FlatCardStyles = StyleSheet.create({
    Headings:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        marginBottom:8,
        marginTop:8
    },
    Container:{
        paddingTop:5,
    },
    CardImage:{
        height:70,
        width:70
    },
    Card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:150,
        margin:8,
        borderRadius:4
    },
    Rcard:{
        backgroundColor:"#EF5354",
    },
    Bcard:{
        backgroundColor:"#5DA3FA",   
    },
    Gcard:{
        backgroundColor:"#50DBB4",   
    },
    Ycard:{
        backgroundColor:"#ffd60a",   
    }

})

export default FlatCardStyles