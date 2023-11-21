import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import {MealsOverviewScreen} from './src/screens/MealsOverviewScreen/MealsOverviewScreen';
import {ScreenName, ScreenNameStackParamList} from './src/navigation/types';
import { CategoriesScreen } from './src/screens/CategoriesScreen.tsx/CategoriesScreen';

const Stack = createNativeStackNavigator<ScreenNameStackParamList>();

export default function App() {
  const screenOptions = {
    headerBackTitle: 'Back',
  };

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name={ScreenName.MEALS_CATEGORIES}
            component={CategoriesScreen}
          />
          <Stack.Screen
            name={ScreenName.MEALS_OVERVIEW}
            component={MealsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
