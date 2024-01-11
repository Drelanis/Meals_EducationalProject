import { CATEGORIES } from "@data/dummy-data";
import { FlatList } from "react-native";
import { useLogic } from "./useLogic";

export const CategoriesScreen = () => {
  const { renderCategoryItem } = useLogic();

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
