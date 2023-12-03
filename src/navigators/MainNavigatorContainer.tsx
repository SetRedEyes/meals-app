import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreenName, DrawerScreenName} from '../navigation/types';
import {MealsOverviewScreen} from '../screens/MealsOverviewScreen/MealsOverviewScreen';
import {MealDetailsScreen} from '../screens/MealDetailsScreen/MealDetailsScreen';
import {DrawerNavigator} from './DrawerNavigator';
import {MergedStackParams} from '../navigation/MergedParams';

const Stack = createNativeStackNavigator<MergedStackParams>();

export const MainNavigatorContainer = () => {
  const stackScreenOptions = {
    headerBackTitle: 'Back',
    headerStyle: {backgroundColor: '#96684f'},
    headerTintColor: '#fff',
    contentStyle: {backgroundColor: '#3f2f25'},
  };

  const drawerScreenOptions = {
    headerShown: false,
  };

  const mealDetailsScreenOptions = {
    title: 'About the Meal',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackScreenOptions}>
        <Stack.Screen
          name={DrawerScreenName.DRAWER}
          component={DrawerNavigator}
          options={drawerScreenOptions}
        />
        <Stack.Screen
          name={StackScreenName.MEALS_OVERVIEW}
          component={MealsOverviewScreen}
        />
        <Stack.Screen
          name={StackScreenName.MEALS_DETAILS}
          component={MealDetailsScreen}
          options={mealDetailsScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
