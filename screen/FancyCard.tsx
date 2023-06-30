import React from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import FancyCardStyles from '../Style/FancyCard';

const FancyCard = () => {
  return (
    <View>
      <Text style = {FancyCardStyles.Headings}>Fancy Card</Text>
      <View style = {[FancyCardStyles.Card,FancyCardStyles.CardElever1]}>
        <Image style = {FancyCardStyles.CardImage} source={require('../Assets/FancyCard/img1.png')} />
        <View style = {FancyCardStyles.TextContainer}>
          <Text style = {FancyCardStyles.TextTitle}>Taj-Mahal</Text>
          <Text style = {FancyCardStyles.TextLocation}>Agra, Uttar Pradesh, India</Text>
          <Text style = {FancyCardStyles.TextDescription}>
            The Taj Mahal is an iconic mausoleum located in Agra, Uttar Pradesh,
            India. It is widely regarded as one of the most beautiful buildings
            in the world and is recognized as a UNESCO World Heritage Site. Here
            are some key facts about the Taj Mahal
          </Text>
        </View>
      </View>

      <View style = {[FancyCardStyles.Card,FancyCardStyles.CardElever2]}>
        <Image style = {FancyCardStyles.CardImage} source={require('../Assets/FancyCard/img2.png')} />
        <View style = {FancyCardStyles.TextContainer}>
          <Text style = {FancyCardStyles.TextTitle}>Easter-Island</Text>
          <Text style = {FancyCardStyles.TextLocation}>Southeastern Pacific Ocean</Text>
          <Text style = {FancyCardStyles.TextDescription}>
          Easter Island, also known as Rapa Nui, is a remote island located in the southeastern Pacific Ocean. Here are some key facts about Easter Island
          </Text>
        </View>
      </View>
      
      <View style = {[FancyCardStyles.Card,FancyCardStyles.CardElever3]}>
        <Image style = {FancyCardStyles.CardImage} source={require('../Assets/FancyCard/img3.png')} />
        <View style = {FancyCardStyles.TextContainer}>
          <Text style = {FancyCardStyles.TextTitle}>Lighthouse</Text>
          <Text style = {FancyCardStyles.TextLocation}>Alexandria, Egypt</Text>
          <Text style = {FancyCardStyles.TextDescription}>
          The lighthouse was one of the Seven Wonders of the Ancient World and served as a navigational landmark for over 1,500 years until it was destroyed by earthquakes in the 14th century.
          </Text>
        </View>
      </View>
      
      <View style = {[FancyCardStyles.Card,FancyCardStyles.CardElever4]}>
        <Image style = {FancyCardStyles.CardImage} source={require('../Assets/FancyCard/img4.png')} />
        <View style = {FancyCardStyles.TextContainer}>
          <Text style = {FancyCardStyles.TextTitle}>Toronto</Text>
          <Text style = {FancyCardStyles.TextLocation}>Southeastern part of Canada</Text>
          <Text style = {FancyCardStyles.TextDescription}>
          Toronto is the most populous city in Canada, with a diverse population of over 2.9 million people. The Greater Toronto Area (GTA), which includes the surrounding suburbs, has a population of over 6.4 million, making it the most populous metropolitan area in Canada
          </Text>
        </View>
      </View>
    </View>
  );
};
export default FancyCard;
