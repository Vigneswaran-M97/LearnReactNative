import {StyleSheet} from 'react-native';

const BlogCardStyle = StyleSheet.create({
  Headings: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  Card: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 350,
    borderRadius: 20,
    marginHorizontal: 38,
    paddingTop: '5%',
    paddingBottom: '5%',
    marginBottom: 20,
  },
  CardElever: {
    backgroundColor: '#faedcd',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  HeadingsContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  BlogTitle: {
    padding: '5%',
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
  },
  CardImage: {
    flex:1,
    marginHorizontal:'35%',
    height: 100,
    width: 100,
  },
  BodyContainer: {
    padding: '6%',
    
  },
  BodyContainers:{
    fontSize:18,
    textAlign:'justify',
    fontWeight:'300',
  },
  FooterContainer: {
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  Touchable:{
    fontSize:16,
    color:'#000',
    backgroundColor:'#fff',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:20
  }
});

export default BlogCardStyle;
