import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style = {textStyle.container}>Home!</Text>
      {randomNumber(props)}
      <Button 
        title="Botão toasty"
        onPress={ButtonPressed}
      />

    </View>
  );
}
function ButtonPressed(){
    console.warn("toasty");
}

function randomNumber(props){
    props.min = Math.ceil(props.min);
    props.max = Math.floor(props.max);
    const result = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

    return <Text>{result}</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const textStyle = StyleSheet.create({
  container: {
    fontSize: 50,
    color: '#fff',
  },
});
