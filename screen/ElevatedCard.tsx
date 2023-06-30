import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import ElevatedCardsStyle from '../Style/ElevatedCard';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={ElevatedCardsStyle.Headings}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={ElevatedCardsStyle.Container}>
        <View style={[ElevatedCardsStyle.Card, ElevatedCardsStyle.Rcard]}>
          <Image
            style={ElevatedCardsStyle.CardImage}
            source={require('../Assets/ElevatedCard/img1.png')}
          />
        </View>

        <View style={[ElevatedCardsStyle.Card, ElevatedCardsStyle.Bcard]}>
          <Image
            style={ElevatedCardsStyle.CardImage}
            source={require('../Assets/ElevatedCard/img2.png')}
          />
        </View>

        <View style={[ElevatedCardsStyle.Card, ElevatedCardsStyle.Gcard]}>
          <Image
            style={ElevatedCardsStyle.CardImage}
            source={require('../Assets/ElevatedCard/img3.png')}
          />
        </View>

        <View style={[ElevatedCardsStyle.Card, ElevatedCardsStyle.Ycard]}>
          <Image
            style={ElevatedCardsStyle.CardImage}
            source={require('../Assets/ElevatedCard/img4.png')}
          />
        </View>

        <View style={[ElevatedCardsStyle.Card, ElevatedCardsStyle.Rcard]}>
          <Image
            style={ElevatedCardsStyle.CardImage}
            source={require('../Assets/ElevatedCard/img5.png')}
          />
        </View>

        <View style={[ElevatedCardsStyle.Card, ElevatedCardsStyle.Bcard]}>
          <Image
            style={ElevatedCardsStyle.CardImage}
            source={require('../Assets/ElevatedCard/img6.png')}
          />
        </View>

        <View style={[ElevatedCardsStyle.Card, ElevatedCardsStyle.Gcard]}>
          <Image
            style={ElevatedCardsStyle.CardImage}
            source={require('../Assets/ElevatedCard/img7.png')}
          />
        </View>

        <View style={[ElevatedCardsStyle.Card, ElevatedCardsStyle.Ycard]}>
          <Image
            style={ElevatedCardsStyle.CardImage}
            source={require('../Assets/ElevatedCard/img8.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;
