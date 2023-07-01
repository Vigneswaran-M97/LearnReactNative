import { StyleSheet } from "react-native";

const ContactCardStyle = StyleSheet.create({
    Heading: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginTop: 10,
        
      },
    Container:{
        padding:20,
        paddingBottom:20
    },
    UserCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15
    },
    UserImage:{
        height:70,
        width:70,
        marginRight:15
    },
    UserName:{
        fontSize:16,
        fontWeight:'600',
        
    },
    UserStaus:{}
})
export default ContactCardStyle