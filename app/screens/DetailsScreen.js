import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';

const PostDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: item.image_post }}
        style={styles.bannerImage}
      />
      <View style={styles.postHeader}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date_create}</Text>
      </View>
      <Text style={styles.content}>{item.content}</Text>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bannerImage: {
    width: '100%',
    height: 200, 
    resizeMode: 'cover',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: 'gray',
  },
  content: {
    fontSize: 18,
    lineHeight: 24,
    padding: 16,
  },
});

export default PostDetailsScreen;
