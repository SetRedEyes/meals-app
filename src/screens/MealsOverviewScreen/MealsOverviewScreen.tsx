import {useCallback, useLayoutEffect, useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {IMeal} from '../../types/Meal';
import {MEALS, CATEGORIES} from '../../data/dummy-data';
import {MealItem} from '../../components/MealItem/MealItem';
import {ScreenName, ScreenNameStackParamList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface MealsOverviewScreenProps {
  route: RouteProp<ScreenNameStackParamList, ScreenName.MEALS_OVERVIEW>;
  navigation: NativeStackNavigationProp<
    ScreenNameStackParamList,
    ScreenName.MEALS_OVERVIEW
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

  const renderItem = useCallback(
    ({item}: {item: IMeal}) => {
      return (
        <MealItem
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          duration={item.duration}
          complexity={item.complexity}
          affordability={item.affordability}
        />
      );
    },
    [route],
  );

  const keyExtractor = (item: IMeal) => item.id;
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
