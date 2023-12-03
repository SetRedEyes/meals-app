import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  StackScreenName,
  ScreenNameStackParamList,
} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MealDetails} from '../MealDetails/MealDetails';

interface MealItemProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}

export const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealItemProps) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        ScreenNameStackParamList,
        StackScreenName.MEALS_CATEGORIES
      >
    >();

  const pressHandler = useCallback(
    () =>
      navigation.navigate(StackScreenName.MEALS_DETAILS, {
        mealId: id,
      }),
    [navigation],
  );

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => pressed && styles.buttonPressed}
        onPress={pressHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 16,
  },
  buttonPressed: {
    opacity: 0.5,
    backgroundColor: '#ccc',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden', //overflow hidden on ios
    //is set on different container than the shadow
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
