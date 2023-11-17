import {StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../../data/dummy-data';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {ScreenName, ScreenNameStackParamList} from '../../../App';
import {IMealsCategoriesScreenProps} from '../../types/Category';

interface MealsOverviewScreenProps {
  route: RouteProp<ScreenNameStackParamList, ScreenName.MEALS_OVERVIEW>;
}

export const MealsOverviewScreen = ({route}: MealsOverviewScreenProps) => {
  const {categoryId} = route.params;
  return (
    <View>
      <Text>{categoryId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
