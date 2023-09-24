import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


const FloatingButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={{  fontWeight: 'bold', fontSize: 35 }}>+</Text>
  </TouchableOpacity>
);



const styles = StyleSheet.create({
  
  button: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#007AFF', 
    borderRadius: 30, 
    width: 60, 
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, 
  },
});

export default FloatingButton;
