import { StyleSheet } from "react-native";

const BlogCardStyle = StyleSheet.create({
    Headings:{
        textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop:18
    },
    HeadingsContainer:{},
    Card:{
        justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 360,
    borderRadius: 20,
    marginHorizontal: 38,
    marginBottom:20
    },
    CardElever: {
        backgroundColor: '#d8bbff',
        elevation: 4,
        shadowOffset: {
          width: 1,
          height: 1,
        },
      },
      BlogTitle:{},
      CardImage:{
        height:100,
        width:100,
      },
      BodyContainer:{},
      FooterContainer:{}
})

export default BlogCardStyle