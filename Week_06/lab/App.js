import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';
import * as ImagePicker from 'expo-image-picker';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: [],
      locations: [],
      errorMessage: null,
      image: null,
    }
  }

  componentWillMount() {
    if (Platform.OS != 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
      this.getPermissionAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    // let location = {
    //   "Latitude": 37.4220,
    //   "Longitude": -122.0840
    // }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location: location });
  };


  saveLocation = async (item) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    let newLocation = {
      longitude: item.longitude,
      latitude: item.latitude,
      image: result.uri
    }
    this.setState({ locations: [...this.state.locations, newLocation] });
    console.log(this.state.locations);
  }

  getPermissionAsync = async () => {
    if (Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      // <View style={styles.container}>
      //   <Text style={styles.paragraph}>{text}</Text>
      // </View>
      <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        onLongPress={item => {
          this.saveLocation(item.nativeEvent.coordinate);
        }}
      >

        {this.state.locations === [] ? null : this.state.locations.map((marker, index) => {
          const coords = {
            latitude: marker.latitude,
            longitude: marker.longitude,
          };
          const image = marker.image;
          const metadata = `Status: abcxyz`;

          return (

            <MapView.Marker
              key={index}
              coordinate={coords}
            >
              <MapView.Callout
                tooltip={true}
              >
                <View>
                  <Image style={{width:100, height:100}} source={{uri: image}}/>
                  <Text>
                    abc
                    </Text>

                </View>
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapView>
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
