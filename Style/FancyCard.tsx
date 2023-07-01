import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FancyCardStyles = StyleSheet.create({
  Headings: {
    padding:5,
    textAlign:'center',
    fontSize: 24, //hp(3),
    fontWeight: 'bold',
    paddingHorizontal: 8, //hp(5),
    marginBottom:8,
    marginTop:18
  },
  Card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('82%'),
    borderRadius: 20,
    marginHorizontal: 38,
    paddingBottom:20,
    marginBottom:20
  },
  CardElever1: {
    backgroundColor: '#fcfcb3',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  CardElever2: {
    backgroundColor: '#e4ffc3',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  CardElever3: {
    backgroundColor: '#ade8f4',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  CardElever4: {
    backgroundColor: '#d8bbff',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },

  CardImage: {
    height: 180,
    width: 180,
    marginBottom: 20,
  },
  TextContainer: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  TextTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  TextLocation: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  TextDescription: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    flexShrink:1,
     
  },
});

const FancyCardStyless = StyleSheet.create({
  Headings: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  Card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 360,
    borderRadius: 10,
    marginHorizontal: 38,
    marginBottom: 40,
  },
  CardElever1: {
    backgroundColor: '#fcfcb3',
    elevation: 5,
  },
  CardElever2: {
    backgroundColor: '#e4ffc3',
    elevation: 5,
  },
  CardElever3: {
    backgroundColor: '#ade8f4',
    elevation: 5,
  },
  CardElever4: {
    backgroundColor: '#d8bbff',
    elevation: 5,
  },
  CardImage: {
    marginTop: -30,
    height: 180,
    width: 200,
  },
  TextContainer: {
    paddingTop: 10,
  },
  TextTitle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 8,
  },
  TextLocation: {
    padding: 5,
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 8,
  },
  TextDescription: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '200',
    paddingHorizontal: 8,
    marginBottom: -40,
  },
});

export default FancyCardStyles;
