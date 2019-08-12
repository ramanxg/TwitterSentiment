/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';
import GetSentiment from './components/GetSentiment';

const App = () => {

  
  return (
    <View style={styles.back}>
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Tweet Sentiments!</Text>
        <GetSentiment fetchSentiment={this.fetchSentimentHandler}></GetSentiment>
      </ScrollView>
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#00aced',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    marginVertical: 60,
    elevation: 20,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    height: '90%',
    width: '90%',
    borderRadius: 15,
    shadowOpacity: 0.8,
    shadowRadius: 30,
    shadowColor: '#005',
    shadowOffset: { height: 30, width: 30 },
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Helvetica Neue'
  }

});

export default App;
