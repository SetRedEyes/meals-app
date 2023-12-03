import {StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {MainNavigatorContainer} from './src/navigators/MainNavigatorContainer';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <MainNavigatorContainer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
