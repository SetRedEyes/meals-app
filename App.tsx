import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import {CategoriesScreen} from './src/screens/CategoriesScreen.tsx/CategoriesScreen';
import {MealsOverviewScreen} from './src/screens/MealsOverviewScreen/MealsOverviewScreen';
import {IMealsCategoriesScreenProps} from './src/types/Category';

const Stack = createNativeStackNavigator<ScreenNameStackParamList>();

export enum ScreenName {
  MEALS_CATEGORIES = 'MealsCategories',
  MEALS_OVERVIEW = 'MealsOverview',
}
export type ScreenNameStackParamList = {
  [ScreenName.MEALS_CATEGORIES]: undefined;
  [ScreenName.MEALS_OVERVIEW]: IMealsCategoriesScreenProps;
};
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
