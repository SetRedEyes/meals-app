import {useCallback, useLayoutEffect, useMemo} from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  StackScreenName,
  ScreenNameStackParamList,
} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IMeal} from '../../types/Meal';
import {MEALS, CATEGORIES} from '../../data/dummy-data';
import {MealItem} from '../../components/MealItem/MealItem';
import {MealsList} from '../../components/MealsList/MealsList';

interface MealsOverviewScreenProps {
  route: RouteProp<ScreenNameStackParamList, StackScreenName.MEALS_OVERVIEW>;
  navigation: NativeStackNavigationProp<
    ScreenNameStackParamList,
    StackScreenName.MEALS_OVERVIEW
  >;
}

export const MealsOverviewScreen = ({
  route,
  navigation,
}: MealsOverviewScreenProps) => {
  const {categoryId} = route.params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === categoryId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  const displayedMeals = useMemo(
    () =>
      MEALS.filter(item => {
        return item.categoryIds.indexOf(categoryId) >= 0;
      }),
    [categoryId],
  );

  return <MealsList items={displayedMeals} />;
};
