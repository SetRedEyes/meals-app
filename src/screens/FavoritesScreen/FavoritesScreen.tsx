import {useMemo} from 'react';
// import {FavoritesContext} from '../../store/context/favorites-context';
import {MealsList} from '../../components/MealsList/MealsList';
import {MEALS} from '../../data/dummy-data';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {RootState} from '../../store/redux/store';
import {useSelector} from 'react-redux';

export const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(
    (state: RootState) => state.favoriteMeals,
  );

  const favoriteMeals = useMemo(
    () => MEALS.filter(meal => favoriteMealIds.ids.includes(meal.id)),
    [favoriteMealIds],
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
