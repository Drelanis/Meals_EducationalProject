import { CategoryGridTile } from "@components/CategoryGridTile";
import { Category } from "@models/category";
import { useNavigation } from "@react-navigation/core";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useMemo } from "react";

type MealsOverviewParamList = {
  MealsOverview: { categoryId: string } | undefined;
};

export const useLogic = () => {
  const navigation =
    useNavigation<DrawerNavigationProp<MealsOverviewParamList>>();

  const renderCategoryItem = useMemo(() => {
    return (itemData: { item: Category }) => {
      const pressHandler = () => {
        navigation.navigate("MealsOverview", {
          categoryId: itemData.item.id,
        });
      };

      return (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      );
    };
  }, [navigation]);

  return { renderCategoryItem };
};
