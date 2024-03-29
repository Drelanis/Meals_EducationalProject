import { View, Text, StyleSheet, TextStyle, ViewStyle } from "react-native";

type Props = {
  duration: number | null;
  complexity: string;
  affordability: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export const MealDetails = (props: Props) => {
  const { duration, complexity, affordability, style, textStyle } = props;

  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration || 0}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
