import React, { useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Search from './screens/Search';
export default function App() {
  
  return (
    <View>
       <Search /> 
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
