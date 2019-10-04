import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ListRenderItem,
} from 'react-native';
import Constants from 'expo-constants';

import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigationTop}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={25} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="appstore-o" size={20} color="grey" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('./assets/avatar.jpg')}
              style={styles.avatarImage}
              resizeMode="cover"
            />
            <View style={styles.avatarContent}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Thanh Duoc
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '200',
                  color: 'gray',
                }}>
                Developer
              </Text>
              <View style={styles.followSendButon}>
                <TouchableOpacity
                  style={{
                    width: 70,
                    height: 20,
                    backgroundColor: '#006699',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                    }}>
                    Follow
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 20,
                    backgroundColor: '#33cccc',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 20,
                  }}>
                  <Ionicons name="md-send" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.interaction}>
            <View
              style={{
                flex: 1,
                height: 50,
                flexDirection: 'col',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.textBold}>67</Text>
              <Text style={styles.textLight}>Photos</Text>
            </View>

            <View
              style={{
                flex: 1,
                height: 50,
                flexDirection: 'col',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.textBold}>88K</Text>
              <Text style={styles.textLight}>Followers</Text>
            </View>

            <View
              style={{
                flex: 1,
                height: 50,
                flexDirection: 'col',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.textBold}>98</Text>
              <Text style={styles.textLight}>Following</Text>
            </View>
          </View>

          <View style={styles.imagePost}>
            <FlatList
              numColumns={2}
              data={[
                { url: require('./assets/pic_1.jpg') },
                { url: require('./assets/pic_2.jpg') },
                { url: require('./assets/pic_3.jpg') },
                { url: require('./assets/pic_4.png') },
              ]}
              renderItem={({ item }) => (
                <Image
                  source={item.url}
                  style={styles.imageShow}
                  resizeMode="cover"
                />
              )}
            />
          </View>
        </View>

        <View style={styles.navigationBottom}>
          <TouchableOpacity>
            <Ionicons name="ios-menu" size={25} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-add-circle-outline" size={25} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="person-outline" size={25} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  navigationTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  content: {
    flex: 13,
    backgroundColor: '#ffffff',
  },
  avatarWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  avatarContent: {
    height: 80,
    flexDirection: 'col',
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  followSendButon: {
    flexDirection: 'row',
  },
  interaction: {
    flext: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: 30,
  },
  textBold: {
    fontSize: 20,
    fontWeight: '400',
  },
  textLight: {
    fontSize: 15,
    fontWeight: '400',
    color: 'gray',
  },
  imagePost: {
    flex: 5,
    marginTop: 30,
  },
  imageShow: {
    flex: 0.5,
    height: 250,
    borderRadius: 10,
    margin: 5,
  },
  navigationBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
