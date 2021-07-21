import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Home from './src/pages/Home.js'

export default function App() {
  return (
      <Home min = {0} max ={10}/>
  );
}