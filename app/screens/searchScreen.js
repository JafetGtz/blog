import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import CardBlog from '../components/Card.js';
import {ScrollView} from 'react-native-gesture-handler';
import FloatingButton from '../components/FloatingButton.js';
import {useNavigation} from '@react-navigation/native';
import {useGetPostQuery} from '../store/slices/publicationSlice.js';
import {useQueryClient} from 'react-query';
import BusquedaComponente from '../components/searchComponent.js';


const SearchScreen = () => {
  const RenderItem = ({item}) => <CardBlog item={item} carrousel={true} />;
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const [isSearch, setSearch] = useState(false)
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    error,
    isError,
  } = useGetPostQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.scroll}
        style={styles.view}>
            <BusquedaComponente/>
        
        {posts.map(element => {
          return (
            <View style={{marginTop: 40}}>
              <CardBlog item={element} carrousel={false} />
            </View>
          );
        })}
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate('add')} />
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  scroll: {
    alignItems: 'center',
  },
  container: {},

  cardContent: {
    color: '#555', // Color de texto gris claro
  },
});

export default SearchScreen;
