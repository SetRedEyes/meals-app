import {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {IMeal} from '../../types/Meal';
import {MEALS} from '../../data/dummy-data';
import {MealItem} from '../../components/MealItem/MealItem';
import {ScreenName, ScreenNameStackParamList} from '../../navigation/types';

interface MealsOverviewScreenProps {
  route: RouteProp<ScreenNameStackParamList, ScreenName.MEALS_OVERVIEW>;
}

export const MealsOverviewScreen = ({route}: MealsOverviewScreenProps) => {
  const {categoryId} = route.params;

  const displayedMeals = MEALS.filter(item => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderItem = useCallback(
    ({item}: {item: IMeal}) => {
      return (
        <MealItem
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
