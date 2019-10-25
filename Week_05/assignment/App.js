import React from 'react';
import moment from 'moment';

import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Linking,
  TouchableOpacity
} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { AntDesign } from 'react-native-vector-icons';

// extraData: update items in FlatList 308c92e816ee407fa1e47efb3c287ccb
// onEndReached: limit items in views

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      articles: [],
    }
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=308c92e816ee407fa1e47efb3c287ccb'
      );
      const jsonData = await response.json();
      this.setState({
        loading: false,
        articles: jsonData.articles,
        hasErrored: false
      });
    } catch{
      this.setState({ hasErrored: true });
    }
    this.setState({ loading: false });
  };

  onPress = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    });
  };

  renderArticleItem = ({ item }) => {
    return (
      <Card
        image={{ uri: item.urlToImage }}
        title={item.title}
        key={item.title}
        containerStyle={styles.cardContainer}>
          <TouchableOpacity onPress={() => this.onPress(item.url)}>
            <View style={styles.row}>
              <Text style={styles.label}>Source</Text>
              <Text style={styles.info}>{item.source.name}</Text>
            </View>
            <Text numberOfLines={2} style={{ marginBottom: 10 }}>{item.content}</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Published</Text>
              <Text style={styles.info}>
                {moment(item.publishedAt).format('LLL')}
              </Text>
            </View>
          </TouchableOpacity>
      </Card>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    if (this.state.hasErrored) {
      return (
        <View style={styles.container}>
          <Text>Error =(</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.hearderCard}>
          <AntDesign name='search1' size={22} color='black' style={{marginLeft: 20}}/>
          <Text style={styles.textHeader}>Search ...</Text>
        </View>
        <FlatList
          data={this.state.articles}
          renderItem={this.renderArticleItem}
          keyExtractor={item => item.title}
          ListFooterComponent={
            <Card containerStyle={styles.footerCard}>
              <View style={{ flexDirection: 'row' }}>
                <AntDesign
                  name='arrowright'
                  size={25}
                  color='gray'
                ></AntDesign>
                <Text style={{
                  fontSize: 20,
                  fontWeight: '300',
                  color: 'gray',
                  marginLeft: 20
                }}>
                  More stories
                </Text>
              </View>
            </Card>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  cardContainer: {
    borderRadius: 10,
    shadowColor: "#ff0000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink'
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'gray'
  },
  hearderCard: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
    shadowColor: "#ff0000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3,
    elevation: 4,
    marginBottom: 10
  },
  textHeader:{
    fontSize: 15,
    fontWeight: '200',
    color: 'gray',
    marginLeft: 20
  },
  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    shadowColor: "#ff0000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom: 20
  },
});
