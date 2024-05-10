import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero1: 0,
      numero2: 0,
      resultado: 0
    }
  }

  somar = () => {cd 
    this.setState({
      resultado: this.state.numero1 + this.state.numero2
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Número 1"
          onChangeText={text => this.setState({ numero1: parseFloat(text) })}
        />

        <TextInput
          style={styles.input}
          placeholder="Número 2"
          onChangeText={text => this.setState({ numero2: parseFloat(text) })}
        />

        <Button title="Somar" onPress={() => this.somar()} />

        <Text style={styles.input}>
          {this.state.resultado}
        </Text>
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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
