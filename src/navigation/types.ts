import {IMealsCategoriesScreenProps} from '../types/Category';
import {IMealsDetailsScreenProps} from '../types/Meal';

export enum ScreenName {
  MEALS_CATEGORIES = 'Meals Categories',
  MEALS_OVERVIEW = 'Meals Overview',
  MEALS_DETAILS = 'Meals Details',
}

export type ScreenNameStackParamList = {
  [ScreenName.MEALS_CATEGORIES]: undefined;
  [ScreenName.MEALS_OVERVIEW]: IMealsCategoriesScreenProps;
  [ScreenName.MEALS_DETAILS]: IMealsDetailsScreenProps;
};
