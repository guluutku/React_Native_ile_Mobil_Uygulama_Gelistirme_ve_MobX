import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

function App() {

  return (
    <View style={styles.container}>
      <Text>New App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
