import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerScreenName, StackScreenName} from '../navigation/types';
import {CategoriesScreen} from '../screens/CategoriesScreen/CategoriesScreen';
import {MergedStackParams} from '../navigation/MergedParams';
import {FavoritesScreen} from '../screens/FavoritesScreen/FavoritesScreen';
import {CATEGORIES} from '../data/dummy-data';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const drawerScreenOptions = {
    headerBackTitle: 'Back',
    headerStyle: {backgroundColor: '#96684f'},
    headerTintColor: '#fff',
    sceneContainerStyle: {backgroundColor: '#3f2f25'},
  };

  const mealCategoriesScreenOptions = {
    title: 'All Categories',
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
      />
    </Drawer.Navigator>
  );
};
