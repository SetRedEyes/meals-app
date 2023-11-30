import {View, Text, StyleSheet} from 'react-native';

interface MealDetailListProps {
  data: string[];
}

export const MealDetailList = ({data}: MealDetailListProps) => {
  return data.map(item => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#3f2f25',
    textAlign: 'center',
  },
});
