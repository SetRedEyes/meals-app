import {FlatList} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import {useCallback} from 'react';
import {CategoryGridTile} from '../../components/CategoryGridTile';
import {ICategory} from '../../types/Category';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ScreenName, ScreenNameStackParamList} from '../../../App';

interface CategoriesScreenProps {
  navigation: NavigationProp<
    ScreenNameStackParamList,
    ScreenName.MEALS_CATEGORIES
  >;
}

export const CategoriesScreen = ({navigation}: CategoriesScreenProps) => {
  const pressHandler = useCallback(
    (id: string) =>
      navigation.navigate(ScreenName.MEALS_OVERVIEW, {
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
