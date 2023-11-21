import {IMealsCategoriesScreenProps} from '../types/Category';

export enum ScreenName {
  MEALS_CATEGORIES = 'MealsCategories',
  MEALS_OVERVIEW = 'MealsOverview',
}

export type ScreenNameStackParamList = {
  [ScreenName.MEALS_CATEGORIES]: undefined;
  [ScreenName.MEALS_OVERVIEW]: IMealsCategoriesScreenProps;
};
