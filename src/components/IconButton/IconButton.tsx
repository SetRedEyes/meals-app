import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useCallback} from 'react';

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
}

export const IconButton = ({icon, color, onPress}: IconButtonProps) => {
  const pressableStyle: (
    state: PressableStateCallbackType,
  ) => StyleProp<ViewStyle> = useCallback(({pressed}) => {
    if (pressed) {
      return styles.pressed;
    }
  }, []);

  return (
    <Pressable onPress={onPress} style={pressed => pressableStyle(pressed)}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
});
