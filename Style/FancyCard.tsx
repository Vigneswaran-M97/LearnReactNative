import { StyleSheet} from 'react-native'

const FancyCardStyles = StyleSheet.create({
    Headings: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
      },
      Card: {
        justifyContent:'center',
        alignItems:'center',
        width:350,
        height:360,
        borderRadius:10,
        marginHorizontal:38,
        marginBottom:40,
      },
      CardElever1:{
        backgroundColor:'#fcfcb3',
        elevation:5,
      },
      CardElever2:{
        backgroundColor:'#e4ffc3',
        elevation:5,
      },
      CardElever3:{
        backgroundColor:'#ade8f4',
        elevation:5,
      },
      CardElever4:{
        backgroundColor:'#d8bbff',
        elevation:5,
      },
      CardImage: {
        marginTop:-30,
        height: 180,
        width: 200,
      },
      TextContainer:{
        paddingTop:10,

      },
      TextTitle:{
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingHorizontal: 8,
      },
      TextLocation:{
        padding:5,
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        paddingHorizontal: 8,
      },
      TextDescription:{
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '200',
        paddingHorizontal: 8,
        marginBottom:-40,
      },
})

export default FancyCardStyles;