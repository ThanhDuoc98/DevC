import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


class ButtonConvert extends React.Component {
  render() {
    const backgroundColor = this.props.fromCurrency === this.props.from ? 'lightblue' : null;
    const buttonStyle = { backgroundColor: backgroundColor };
    const flagFrom = this.props.from === 'usd' ? 'USD' : 'VND';
    const flagTo = this.props.to === 'usd' ? 'USD' : 'VND';
    return (
      <View>
        <TouchableOpacity style={[styles.buttonConvert, buttonStyle]} onPress={() => this.props.setConversionCurrencies(this.props.to, this.props.from)}>
          <Text style={styles.textButtonConvert}>
            {flagFrom} to {flagTo}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrencyValue: 0,
      setFromCurrencyValue: 0,
      from: 'vnd',
      to: 'usd'
    }
  }

  convertCurrency = (currentCurrencyValue) => {
    if (this.state.from === 'usd') {
      this.setState({ currentCurrencyValue: currentCurrencyValue, setFromCurrencyValue: currentCurrencyValue * 23000 })
    } else {
      this.setState({ currentCurrencyValue: currentCurrencyValue, setFromCurrencyValue: currentCurrencyValue / 23000 })
    }
  };
  
  setConversionCurrencies = (from, to) => {
    this.setState({ from: to });
    this.setState({ to: from });
    if (this.state.from === 'usd') {
      this.setState({ setFromCurrencyValue: this.state.currentCurrencyValue / 23000 })
    } else {
      this.setState({ setFromCurrencyValue: this.state.currentCurrencyValue * 23000 })
    }
  }

  toUpperCase = (string) => {
    if (string === 'usd') {
      return 'USD'
    }
    if (string === 'vnd') {
      return 'VND'
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Value of currency</Text>
        <TextInput style={styles.inputBox}
          autoFocus={true}
          placeholder="1 000 000"
          keyboardType="number-pad"
          selectionColor="red"
          onChangeText={(currentCurrencyValue) => this.convertCurrency(currentCurrencyValue)}
          value={this.state.currentCurrencyValue} />
        <ButtonConvert from='usd' to='vnd' fromCurrency={this.state.from} setConversionCurrencies={this.setConversionCurrencies}></ButtonConvert>
        <ButtonConvert from='vnd' to='usd' fromCurrency={this.state.from} setConversionCurrencies={this.setConversionCurrencies}></ButtonConvert>
        <View style={styles.currencyWrapper}>
          <Text>Current currency:</Text>
          <Text style={styles.currencyText}>{this.state.currentCurrencyValue} {this.toUpperCase(this.state.from)}</Text>
          <Text>Conversion currenecy:</Text>
          <Text style={styles.currencyText}>{this.state.setFromCurrencyValue} {this.toUpperCase(this.state.to)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    margin: 20,
  },
  inputBox: {
    width: 300,
    height: 60,
    borderColor: 'lightblue',
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
  },
  buttonConvert: {
    width: 200,
    height: 40,
    borderColor: 'lightblue',
    borderRadius: 20,
    borderWidth: 1,
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textButtonConvert: {
    textAlign: 'center'
  },
  currencyWrapper: {
    margin: 10,
    alignItems: 'center'
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
