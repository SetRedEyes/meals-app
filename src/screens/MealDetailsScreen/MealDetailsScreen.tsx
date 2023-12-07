import {useLayoutEffect, useMemo, useCallback} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
// import {FavoritesContext} from '../../store/context/favorites-context';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../../store/redux/favorites';
import {RootState} from '../../store/redux/store';
import {
  StackScreenName,
  ScreenNameStackParamList,
} from '../../navigation/types';
import {MergedStackParams} from '../../navigation/MergedParams';
import {MEALS} from '../../data/dummy-data';
import {MealDetails} from '../../components/MealDetails/MealDetails';
import {MealDetailSubtitle} from '../../components/MealDetailSubtitle/MealDetailSubtitle';
import {MealDetailList} from '../../components/MealDetailList/MealDetailList';
import {IconButton} from '../../components/IconButton/IconButton';

interface MealDetailsScreenProps {
  route: RouteProp<ScreenNameStackParamList, StackScreenName.MEALS_DETAILS>;
  navigation: NavigationProp<MergedStackParams, StackScreenName.MEALS_DETAILS>;
}

export const MealDetailsScreen = ({
  route,
  navigation,
}: MealDetailsScreenProps) => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const dispatch = useDispatch();

  const favoriteMealIds = useSelector(
    (state: RootState) => state.favoriteMeals,
  );

  const mealId = route.params.mealId;

  const selectedMeal = useMemo(
    () => MEALS.find(meal => meal.id === mealId),
    [mealId],
  );

  const mealIsFavorite: boolean = useMemo(
    () => favoriteMealIds.ids.includes(mealId),
    [favoriteMealIds.ids, mealId],
  );

  const changeFavoriteStatusHandler = useCallback(
    () =>
      mealIsFavorite
        ? dispatch(removeFavorite(mealId))
        : dispatch(addFavorite(mealId)),
    [mealIsFavorite, favoriteMealIds, mealId],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <>
      {selectedMeal ? (
        <ScrollView style={styles.rootContainer}>
          <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
          <Text style={styles.title}>{selectedMeal.title}</Text>
          <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
          />
          <View style={styles.listContainer}>
            <MealDetailSubtitle title="Ingredients" />
            <MealDetailList data={selectedMeal.ingredients} />
            <MealDetailSubtitle title="Steps" />
            <MealDetailList data={selectedMeal.steps} />
          </View>
        </ScrollView>
      ) : (
        <Text style={styles.notFound}>Meal not found!</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  notFound: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 24,
    textAlign: 'center',
    color: 'white',
  },
});
