/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';
import axios from 'axios';

// import FlatListExample from './src/components/FlatListExample';
// import PlatformExample from './src/components/PlatformExample';

class App extends Component {

  state = {
    name: '',
    surname: '',
    loading: true,
  };

  componentDidMount() {
    this.getRandomUser();
  }

  getRandomUser = async () => {
    this.setState({
      loading: true,
    });

    const { data: { results } } = await axios.get('https://randomuser.me/api');
    const { name: { first, last } } = results[0];

    this.setState({
      name: first,
      surname: last,
      loading: false,
    });

    /*
        axios.get('https://randomuser.me/api')
          .then(user => user.data.results[0])
          .then(user => {
            this.setState({
              name: user.name.first,
              surname: user.name.last,
              loading: false,
            });
          });
    */
  };

  render() {
    const { name, surname, loading } = this.state;

    return (
      <SafeAreaView style={[styles.container]} >
        {/*<FlatListExample />*/}
        <View>
          {
            loading
              ? <Text>LOADING...</Text>
              : <Text>{name} {surname}</Text>
          }
          <Button
            title={'Randomize User'}
            onPress={this.getRandomUser}
          />
        </View>
      </SafeAreaView >
    );
  }

  /*
    render() {
      return (
        <SafeAreaView style={styles.container}>
          <PlatformExample />
        </SafeAreaView>
      );
    }
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
