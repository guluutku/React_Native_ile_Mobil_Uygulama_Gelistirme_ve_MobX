import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', text: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

function App() {

  return (
    <View style={styles.container}>
      <Button
        title={'Select Picture'}
        onPress={() => { }}
      />
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
