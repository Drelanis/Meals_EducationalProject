import { View, FlatList, StyleSheet, ListRenderItem } from "react-native";

import { Meal } from "@models/meal";
import useLogic from "./useLogic";

type Props = {
  items: Meal[];
};

export const MealsList = (props: Props) => {
  const { items } = props;

  const { renderMealItem } = useLogic(items);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
