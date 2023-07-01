import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import BlogCardStyle from '../Style/BlogCard';

const BlogCard = () => {
  return (
    <View>
      <Text style={BlogCardStyle.Headings}>BlogCard</Text>
      <View style={[BlogCardStyle.Card, BlogCardStyle.CardElever]}>
        <View style={BlogCardStyle.HeadingsContainer}>
          <Text style={BlogCardStyle.BlogTitle}>FreePik</Text>
        </View>
        <Image 
          source={require('../Assets/BlogCard/img1.gif')}
          style={BlogCardStyle.CardImage}
        />
        <View style={BlogCardStyle.BodyContainer}>
          <Text>
            We love helping you bring ideas to life.We want to grow every day.
            Our goal is to offer the best high-quality content: illustrations,
            photos, icons, mockups, and presentations templates,Your imagination
            has no limits, neither do the possibilities we offer. Freepik
            Company comprises four engaging projects.
          </Text>
        </View>
        <View style={BlogCardStyle.FooterContainer}>
          <TouchableOpacity>
            <Text>Get Images</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BlogCard;
