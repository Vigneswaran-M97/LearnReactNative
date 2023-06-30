import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import FlatCardStyles from '../Style/FlatCard';

const Flatcards = () => {
  return (
    <View>
      <Text style={FlatCardStyles.Headings}>Flat cards</Text>
      <ScrollView horizontal={true} style={FlatCardStyles.Container}>
        <View style={[FlatCardStyles.Card, FlatCardStyles.Rcard]}>
          <Image
            style={FlatCardStyles.CardImage}
            source={require('../Assets/FlatCard/img1.png')}
          />
        </View>

        <View style={[FlatCardStyles.Card, FlatCardStyles.Bcard]}>
          <Image
            style={FlatCardStyles.CardImage}
            source={require('../Assets/FlatCard/img2.png')}
          />
        </View>

        <View style={[FlatCardStyles.Card, FlatCardStyles.Gcard]}>
          <Image
            style={FlatCardStyles.CardImage}
            source={require('../Assets/FlatCard/img3.png')}
          />
        </View>

        <View style={[FlatCardStyles.Card, FlatCardStyles.Ycard]}>
          <Image
            style={FlatCardStyles.CardImage}
            source={require('../Assets/FlatCard/img4.png')}
          />
        </View>

        <View style={[FlatCardStyles.Card, FlatCardStyles.Rcard]}>
          <Image
            style={FlatCardStyles.CardImage}
            source={require('../Assets/FlatCard/img5.png')}
          />
        </View>

        <View style={[FlatCardStyles.Card, FlatCardStyles.Bcard]}>
          <Image
            style={FlatCardStyles.CardImage}
            source={require('../Assets/FlatCard/img6.png')}
          />
        </View>

        <View style={[FlatCardStyles.Card, FlatCardStyles.Gcard]}>
          <Image
            style={FlatCardStyles.CardImage}
            source={require('../Assets/FlatCard/img7.png')}
          />
        </View>

        <View style={[FlatCardStyles.Card, FlatCardStyles.Ycard]}>
          <Image
            style={FlatCardStyles.CardImage}
            source={require('../Assets/FlatCard/img8.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Flatcards;
