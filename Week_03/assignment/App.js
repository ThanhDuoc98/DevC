import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import GameStatus from './components/GameStatus';
import GamePad from './components/GamePad';

const CHOICES = [
  {
    name: 'rock',
    uri: 'http://www.clker.com/cliparts/e/T/r/E/N/A/alpine-landscape-rock-rubble-md.png'
  },
  {
    name: 'paper',
    uri: 'http://www.clker.com/cliparts/3/6/1/6/135055741013610297331194984476257642059parchment_paper_landsca_.svg.hi-md.png'
  },
  {
    name: 'scissors',
    uri:
      'http://www.pngmart.com/files/1/Scissors-Transparent-PNG.png'
  }
];


class CardGame extends React.Component {
  render() {
    return (
      <View style={styles.cardGameContainer}>
        <Text style={styles.namePlayer}>
          {this.props.name}
        </Text>
        <Image style={{
          width: 130,
          height: 100,
          resizeMode: 'contain'
        }}
          source={{ uri: this.props.uri }} />
        <Text style={styles.choiceResult}>
          {this.props.choice}
        </Text>
      </View>
    );
  }
}


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: "TIE GAME",
      playerChoice: 0,
      computerChoice: 0,
      playerStatus: 0,
      computerStatus: 0,
    };
  }

  onPressButton = (index) => {
    this.setState({
      playerChoice: index,
      computerChoice: Math.floor(Math.random() * CHOICES.length)
    });
    setTimeout(() =>
      this.setResult(),
      10);
  }

  setResult = () => {
    let result;
    if (this.state.playerChoice === 0) {
      result = this.state.computerChoice === 2 ? 'VICTORY' : 'DEFEAT';
    }
    if (this.state.playerChoice === 1) {
      result = this.state.computerChoice === 0 ? 'VICTORY' : 'DEFEAT';
    }
    if (this.state.playerChoice === 2) {
      result = this.state.computerChoice === 1 ? 'VICTORY' : 'DEFEAT';
    }
    if (this.state.playerChoice === this.state.computerChoice) result = 'TIE GAME';
    if (result === 'VICTORY') {
      this.setState({ playerStatus: this.state.playerStatus + 1 });
    } else if (result === 'DEFEAT') {
      this.setState({ computerStatus: this.state.computerStatus + 1 });
    }

    this.setState({ result: result });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusContainer}>
          <GameStatus
            result={this.state.result}
            playerStatus={this.state.playerStatus}
            computerStatus={this.state.computerStatus}
          />
        </View>
        <View style={styles.contentContainer}>
          <CardGame
            name="Player"
            choice={CHOICES[this.state.playerChoice].name.toUpperCase()}
            uri={CHOICES[this.state.playerChoice].uri}
          />
          <CardGame
            name="Computer"
            choice={CHOICES[this.state.computerChoice].name.toUpperCase()}
            uri={CHOICES[this.state.computerChoice].uri}
          />
        </View>
        <View style={styles.padContainer}>
          <GamePad onPressButton={this.onPressButton} />
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusContainer: {
    flex: 0.2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignContent: 'center'
  },
  contentContainer: {
    flex: 0.5,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    borderColor: 'lightblue',
    borderWidth: 1,
    borderRadius: 10,
  },
  cardGameContainer: {
    flex: 0.45,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  namePlayer: {
    color: 'blue',
    fontSize: 25,
    fontWeight: '500'
  },
  choiceResult: {
    color: 'red',
    fontSize: 25,
    fontWeight: '500'
  },
  padContainer: {
    flex: 0.3,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  }
});