import {View, Text, ScrollView, Image, Alert} from 'react-native';
import React from 'react';
import ContactCardStyle from '../Style/ContactCard';

const ContactCard = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an Extra ordinary Teacher',
      imageUrl: require('../Assets/ContactCard/img1.png'),
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I 💗 To Code and Teach!',
      imageUrl: require('../Assets/ContactCard/img2.png'),
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making Your Gpay Smooth',
      imageUrl: require('../Assets/ContactCard/img3.png'),
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital Banks',
      imageUrl: require('../Assets/ContactCard/img4.png'),
    },
  ];
  return (
    <View>
      <Text style={ContactCardStyle.Heading}>ContactCard</Text>
      <ScrollView nestedScrollEnabled={true} style={ContactCardStyle.Container} >
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={ContactCardStyle.UserCard}>
            <Image style={ContactCardStyle.UserImage} source={imageUrl}/>
            <View><Text style={ContactCardStyle.UserName}>{name}</Text>
            <Text style={ContactCardStyle.UserStaus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactCard;
