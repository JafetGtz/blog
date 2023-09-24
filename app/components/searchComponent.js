import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  useSearchPostsQuery,
  useLazySearchPostsQuery,
} from '../store/slices/publicationSlice';

const BusquedaComponente = ({setSearch, setArraySearch}) => {
  const [filtro, setFiltro] = useState('author');
  const [buscar, setBuscar] = useState('');

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isUninitialized,
    refetch,
  } = useSearchPostsQuery({filtro, buscar});

  const seleccionarFiltro = nuevoFiltro => {
    setFiltro(nuevoFiltro);
  };

  const realizarBusqueda = () => {
    refetch();
    setArraySearch(posts)
    setSearch(true);
  };

  const handlerSearch = e => {
    setBuscar(e);
    if (e == '') {
      setSearch(false);
    } else {
      setSearch(true);
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.etiqueta}>Buscar por:</Text>

      <View style={styles.buscadorContenedor}>
        <TextInput
          style={styles.buscador}
          placeholder="Escribe tu búsqueda aquí"
          onChangeText={handlerSearch}
        />

        <TouchableOpacity
          style={styles.botonBusqueda}
          onPress={realizarBusqueda}>
          <Text style={styles.botonTexto}>🔍</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tagsContenedor}>
        <TouchableOpacity
          style={[styles.tag, filtro === 'author' && styles.tagSeleccionado]}
          onPress={() => seleccionarFiltro('author')}>
          <Text
            style={[
              styles.tagTexto,
              filtro === 'author' && styles.tagTextoSeleccionado,
            ]}>
            Autor
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tag, filtro === 'title' && styles.tagSeleccionado]}
          onPress={() => seleccionarFiltro('title')}>
          <Text
            style={[
              styles.tagTexto,
              filtro === 'title' && styles.tagTextoSeleccionado,
            ]}>
            Título
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tag, filtro === 'conten' && styles.tagSeleccionado]}
          onPress={() => seleccionarFiltro('content')}>
          <Text
            style={[
              styles.tagTexto,
              filtro === 'content' && styles.tagTextoSeleccionado,
            ]}>
            Contenido
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    width: '90%',
    marginBottom: 10,
  },
  etiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buscadorContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buscador: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  botonBusqueda: {
    borderRadius: 5,
    width: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  botonTexto: {
    fontSize: 20,
    color: 'white',
  },
  tagsContenedor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  tag: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginLeft: 10,
  },
  tagTexto: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  tagSeleccionado: {
    borderColor: 'blue',
  },
  tagTextoSeleccionado: {
    color: 'blue',
  },
});

export default BusquedaComponente;
