import {useCallback} from 'react';
import {FlatList} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {
  StackScreenName,
  ScreenNameStackParamList,
  DrawerScreenName,
} from '../../navigation/types';
import {CATEGORIES} from '../../data/dummy-data';
import {ICategory} from '../../types/Category';
import {CategoryGridTile} from '../../components/CategoryGridTile/CategoryGridTile';
import { MergedStackParams } from '../../navigation/MergedParams';

interface CategoriesScreenProps {
  navigation: NavigationProp<
    MergedStackParams,
    DrawerScreenName.MEALS_CATEGORIES
  >;
}

export const CategoriesScreen = ({navigation}: CategoriesScreenProps) => {
  const pressHandler = useCallback(
    (id: string) =>
      navigation.navigate(StackScreenName.MEALS_OVERVIEW, {
        categoryId: id,
      }),
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: ICategory}) => {
      return (
        <CategoryGridTile
          title={item.title}
          color={item.color}
          onPress={() => pressHandler(item.id)}
        />
      );
    },
    [navigation],
  );

  const keyExtractor = (item: ICategory) => item.id;

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};
