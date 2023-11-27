import {IMealsCategoriesScreenProps} from '../types/Category';
import {IMealsDetailsScreenProps} from '../types/Meal';

export enum ScreenName {
  MEALS_CATEGORIES = 'MealsCategories',
  MEALS_OVERVIEW = 'MealsOverview',
  MEALS_DETAILS = 'MealsDetails',
}

export type ScreenNameStackParamList = {
  [ScreenName.MEALS_CATEGORIES]: undefined;
  [ScreenName.MEALS_OVERVIEW]: IMealsCategoriesScreenProps;
  [ScreenName.MEALS_DETAILS]: IMealsDetailsScreenProps;
};
