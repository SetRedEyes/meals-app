import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerScreenName, StackScreenName} from '../navigation/types';
import {CategoriesScreen} from '../screens/CategoriesScreen/CategoriesScreen';
import {FavoritesScreen} from '../screens/FavoritesScreen/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const drawerScreenOptions = {
    headerBackTitle: 'Back',
    headerStyle: {backgroundColor: '#96684f'},
    headerTintColor: '#fff',
    sceneContainerStyle: {backgroundColor: '#3f2f25'},
    drawerContentStyle: {backgroundColor: '#3f2f25'},
    drawerInactiveTintColor: '#fff',
    drawerActiveTintColor: '#3f2f25',
    drawerActiveBackgroundColor: '#e4baa1',
  };

  const mealCategoriesScreenOptions = {
    title: 'All Categories',
    drawerIcon: ({color, size}: {color: string; size: number}) => (
      <Ionicons name="ios-restaurant" size={size} color={color} />
    ),
  };

  const favoritesScreenOptions = {
    title: 'All Categories',
    drawerIcon: ({color, size}: {color: string; size: number}) => (
      <Ionicons name="star" size={size} color={color} />
    ),
  };

  return (
    <Drawer.Navigator screenOptions={drawerScreenOptions}>
      <Drawer.Screen
        name={DrawerScreenName.MEALS_CATEGORIES}
        component={CategoriesScreen}
        options={mealCategoriesScreenOptions}
      />
      <Drawer.Screen
        name={DrawerScreenName.FAVORITES}
        component={FavoritesScreen}
        options={favoritesScreenOptions}
      />
    </Drawer.Navigator>
  );
};
