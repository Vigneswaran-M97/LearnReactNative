import {StyleSheet} from 'react-native';

const ElevatedCardsStyle = StyleSheet.create({
  Headings: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  Container: {
    paddingTop: 10,
  },
  CardElevated: {},
  CardImage: {
    height: 70,
    width: 70,
  },
  Card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 150,
    margin: 8,
    borderRadius: 4,
  },
  Rcard: {
    backgroundColor: '#e29578',
    shadowColor: '#EF5354',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 9, 
  },
  Bcard: {
    backgroundColor: '#83c5be',
    shadowColor: '#5DA3FA',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 9, 
  },
  Gcard: {
    backgroundColor: '#90e0ef',
    shadowColor: '#50DBB4',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 9, 
  },
  Ycard: {
    backgroundColor: '#fdffb6',
    shadowColor: '#ffd60a',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 9, 
  },
});
export default ElevatedCardsStyle;
