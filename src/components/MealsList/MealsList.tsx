import {FlatList, StyleSheet, View} from 'react-native';
import {IMeal} from '../../types/Meal';
import {useCallback} from 'react';
import {MealItem} from '../MealItem/MealItem';
import {useRoute} from '@react-navigation/native';

interface MealsListProps {
  items: IMeal[];
}

export const MealsList = ({items}: MealsListProps) => {
  const keyExtractor = (item: IMeal) => item.id;
  const route = useRoute();
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

  return (
    <View>
      <FlatList
        data={items}
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
