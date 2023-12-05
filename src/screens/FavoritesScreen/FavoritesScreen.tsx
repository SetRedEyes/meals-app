import {useContext, useMemo} from 'react';
import {FavoritesContext} from '../../store/context/favorites-context';
import {MealsList} from '../../components/MealsList/MealsList';
import {MEALS} from '../../data/dummy-data';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';

export const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = useMemo(
    () => MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id)),
    [favoriteMealsCtx],
  );

  if (!favoriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}> You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
