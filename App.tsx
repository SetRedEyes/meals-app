import {StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Provider} from 'react-redux';
// import {FavoritesContextProvider} from './src/store/context/favorites-context';
import {MainNavigatorContainer} from './src/navigators/MainNavigatorContainer';
import {store} from './src/store/redux/store';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <MainNavigatorContainer />
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
