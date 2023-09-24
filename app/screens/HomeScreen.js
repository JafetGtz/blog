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
  Alert,
} from 'react-native';
import CardBlog from '../components/Card.js';
import {ScrollView} from 'react-native-gesture-handler';
import FloatingButton from '../components/FloatingButton.js';
import {useNavigation} from '@react-navigation/native';
import {useGetPostQuery} from '../store/slices/publicationSlice.js';
import {useQueryClient} from 'react-query';
import BusquedaComponente from '../components/searchComponent.js';
import PostService from '../database/post.service.js';
import {useIsConnected} from 'react-native-offline';
import NetInfo from '@react-native-community/netinfo';

const HomeScreen = () => {
  const RenderItem = ({item}) => <CardBlog item={item} carrousel={true} />;
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const [isSearch, setSearch] = useState(false);
  const [arraySearch, setArraySearch] = useState([]);
  const queryClient = useQueryClient();
  const [offline, setOffline] = useState(true);
  const [ArrayOff, setArrayOff] = useState([]);
  const isConnected = useIsConnected();

  const unsubscribe = NetInfo.addEventListener(state => {
    if (!state.isConnected) {
      Alert.alert('Upps', 'No hay conexión a internet')
      setOffline(true);
    }else setOffline(false)
  });

  const {
    data: posts,
    isLoading,
    error,
    isError,
    isSuccess,
  } = useGetPostQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  

  const getDataDb = () => {
    if (offline) {
      setArrayOff(PostService.getAllPosts());
    }
  };

  const guardarDatos = () => {
    if (isSuccess) {
      PostService.deleteAllPosts();
      posts.map(element => {
        PostService.insertPost(
          element.title,
          element.content,
          element.author,
          element.date_create,
          'https://www.mundodeportivo.com/alfabeta/hero/2023/05/satoru-gojo-jujutsu-kaisen.jpg?width=1200',
        );
      });
    }
  };

  useEffect(() => {
    guardarDatos();
    getDataDb();
    unsubscribe();
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
      <ScrollView contentContainerStyle={styles.scroll} style={styles.view}>
        {!offline ? (
          <BusquedaComponente
            setArraySearch={setArraySearch}
            setSearch={setSearch}
          />
        ) : null}
        <FlatList
          data={offline ? ArrayOff : posts}
          renderItem={RenderItem}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          style={{marginTop: 15}}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={{fontSize: 25, marginTop: 40}}>Publicaciones</Text>

        {offline ? (
          <>
            {ArrayOff.map(element => (
              <View key={element.id} style={{marginTop: 40}}>
                <CardBlog item={element} carrousel={false} />
              </View>
            ))}
          </>
        ) : (
          <>
            {arraySearch.map(element => (
              <View key={element.id} style={{marginTop: 40}}>
                <CardBlog item={element} carrousel={false} />
              </View>
            ))}
            {posts.map(element => (
              <View key={element.id} style={{marginTop: 40}}>
                <CardBlog item={element} carrousel={false} />
              </View>
            ))}
          </>
        )}
      </ScrollView>
      {!offline ? (
        <FloatingButton onPress={() => navigation.navigate('add')} />
      ) : null}
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

export default HomeScreen;
