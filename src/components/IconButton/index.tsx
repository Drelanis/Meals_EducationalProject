import {
  GestureResponderEvent,
  OpaqueColorValue,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconVariant } from "./types";

type Props = {
  icon: IconVariant;
  onPress: (event: GestureResponderEvent) => void;
  color?: string | OpaqueColorValue | undefined;
};

export const IconButton = (props: Props) => {
  const { icon, color, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
