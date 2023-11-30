import {useMemo} from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ScreenName, ScreenNameStackParamList} from '../../navigation/types';
import {MEALS} from '../../data/dummy-data';
import {MealDetails} from '../../components/MealDetails/MealDetails';

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

  const selectedMeal = useMemo(
    () => MEALS.find(meal => meal.id === mealId),
    [mealId],
  );

  return (
    <View>
      {selectedMeal ? (
        <>
          <Image source={{uri: selectedMeal.imageUrl}} />
          <Text>Meal Details Screen</Text>
          <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
          />
          <Text>Ingredients</Text>
          {selectedMeal.ingredients.map(ingredient => (
            <Text key={ingredient}>{ingredient}</Text>
          ))}
          <Text>Steps</Text>
          {selectedMeal.steps.map(steps => (
            <Text key={steps}>{steps}</Text>
          ))}
        </>
      ) : (
        <Text>Meal not found!</Text>
      )}
    </View>
  );
};
