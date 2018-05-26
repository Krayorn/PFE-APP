import React from 'react';
import { StackNavigator, } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';



const Pfe = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen},
});

export default Pfe;


//AppRegistry.registerComponent("reactNavigationSample", () => Pfe);

/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Le TEST mon BRO</Text>
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
*/
