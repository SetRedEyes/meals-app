import {StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {MainNavigatorContainer} from './src/navigators/MainNavigatorContainer';
import {FavoritesContextProvider} from './src/store/context/favorites-context';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <MainNavigatorContainer />
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
