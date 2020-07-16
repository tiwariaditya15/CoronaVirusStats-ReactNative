import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const MyComponent = () => {
  return (
    
    <Appbar.Header
        theme={{
            colors: {
                primary: '#7497e8'
            }
        }}
    >
      <StatusBar backgroundColor="#7497e8"/>
      <Title style={{color: "white"}}>Corona Tracker</Title>
    </Appbar.Header>
  );
};

export default MyComponent;