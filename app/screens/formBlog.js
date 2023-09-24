import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button, TextArea} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import {ScrollView} from 'react-native-gesture-handler';
import {useCreatePublicationMutation} from '../store/slices/publicationSlice';
import {useDispatch} from 'react-redux';
import {useCreatePostMutation} from '../store/slices/publicationSlice';
import {obtenerFechaHoraActual} from '../utils';
import {useNavigation} from '@react-navigation/native';

const AddPublicationForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [createPostTrigger, {isLoading, isError, isSuccess}] =
    useCreatePostMutation();
  const [formData, setFormData] = useState({});
  const navigation = useNavigation();

  const onSubmitForm = async data => {
    setFormData(data);
    data.date_create = obtenerFechaHoraActual();
    createPostTrigger(data);
    navigation.navigate('Home')
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Título"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
          )}
          name="title"
          rules={{required: 'El título es obligatorio'}}
          defaultValue=""
        />
        {errors.title && (
          <Text style={styles.errorText}>{errors.title.message}</Text>
        )}

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Autor"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
          )}
          name="author"
          rules={{required: 'El autor es obligatorio'}}
          defaultValue=""
        />
        {errors.author && (
          <Text style={styles.errorText}>{errors.author.message}</Text>
        )}

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Contenido"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              mode="outlined"
              numberOfLines={4}
              style={styles.textArea}
              placeholder="Type something"
              placeholderTextColor="grey"
              multiline={true}
            />
          )}
          name="content"
          rules={{required: 'El contenido es obligatorio'}}
          defaultValue=""
        />
        {errors.content && (
          <Text style={styles.errorText}>{errors.content.message}</Text>
        )}

        <Button
          mode="contained"
          onPress={handleSubmit(onSubmitForm)}
          style={styles.button}
          labelStyle={styles.buttonLabel}>
          Agregar Publicación
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#007AFF',
  },
  buttonLabel: {
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
  textArea: {
    marginBottom: 16,
    height: 150,
    justifyContent: 'flex-start',
  },
});

export default AddPublicationForm;
