import {Text} from 'react-native';

import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ScreenName, ScreenNameStackParamList} from '../../navigation/types';

interface MealDetailsScreenProps {
  route: RouteProp<ScreenNameStackParamList, ScreenName.MEALS_DETAILS>;
  navigation: NavigationProp<
    ScreenNameStackParamList,
    ScreenName.MEALS_DETAILS
  >;
}

export const MealDetailsScreen = ({
  route,
  navigation,
}: MealDetailsScreenProps) => {
  const mealId = route.params.mealId;

  return <Text>HEY</Text>;
};
