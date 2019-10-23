import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// extraData: update items in FlatList
// onEndReached: limit items in views

const getNews = () => {
  const response = fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe'
  );
  console.log(response);
};

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      response: null,
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
