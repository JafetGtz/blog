import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {recortarTexto} from '../utils';

const recortarA70 = recortarTexto();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {formatearFechaHora} from '../utils';
import { useNavigation } from '@react-navigation/native';



const CardBlog = ({item, carrousel}) => {
    const navigation = useNavigation()

    const redirectToDetails = ()=> {
      navigation.navigate('detail', {item})
    }

  return (
    <TouchableOpacity 
    onPress={ redirectToDetails }
    style={styles.card}>
      <Image source={{uri: item.image_post}} style={styles.cardImage} />
      <View style={styles.subcontent}>
        <Text>{item.title}</Text>
        <Text>{item.author}</Text>
      </View>

      <View style={styles.subcontent}>
        <Text>{formatearFechaHora(item.date_create)}</Text>
      </View>

      {carrousel ? null : (
        <View style={styles.content}>
          <Text>{recortarA70(item.content)}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.9,
    marginLeft: 7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  cardImage: {
    minHeight: 100,
    width: '100%',
    borderRadius: 10,
  },
  subcontent: {
    marginTop: 5,
    flexDirection: 'row',
    width: '90%',
    paddingHorizontal: 10,

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardBlog;
