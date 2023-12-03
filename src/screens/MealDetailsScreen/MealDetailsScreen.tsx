import {useLayoutEffect, useMemo, useCallback} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {
  StackScreenName,
  ScreenNameStackParamList,
} from '../../navigation/types';
import {MEALS} from '../../data/dummy-data';
import {MealDetails} from '../../components/MealDetails/MealDetails';
import {MealDetailSubtitle} from '../../components/MealDetailSubtitle/MealDetailSubtitle';
import {MealDetailList} from '../../components/MealDetailList/MealDetailList';
import {IconButton} from '../../components/IconButton/IconButton';

interface MealDetailsScreenProps {
  route: RouteProp<ScreenNameStackParamList, StackScreenName.MEALS_DETAILS>;
  navigation: NavigationProp<
    ScreenNameStackParamList,
    StackScreenName.MEALS_DETAILS
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

  const headerButtonPressHandler = useCallback(() => {
    console.log('Header button pressed!');
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="star"
          color="white"
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

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
