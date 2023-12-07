import {useMemo} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';

interface MealDetailsProps {
  duration: number;
  complexity: string;
  affordability: string;
  textStyle?: TextStyle;
}

export const MealDetails = ({
  duration,
  complexity,
  affordability,
  textStyle,
}: MealDetailsProps) => {
  const detailItemStyle = useMemo(
    () => StyleSheet.flatten([styles.detailItem, textStyle]),
    [textStyle],
  );
  return (
    <View style={styles.details}>
      <Text style={detailItemStyle}>{duration}m</Text>
      <Text style={detailItemStyle}>{complexity.toUpperCase()}</Text>
      <Text style={detailItemStyle}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
