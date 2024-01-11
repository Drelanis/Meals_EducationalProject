import { MEALS } from "@data/dummy-data";
import { IconButton } from "@components/IconButton";

import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { FavoritesContext } from "@store/context";
import { useContext, useLayoutEffect } from "react";

type MealDetailScreenParamList = {
  MealDetailScreen: {
    mealId: string;
  };
};

export const useLogic = () => {
  const navigation = useNavigation();
  const route =
    useRoute<RouteProp<MealDetailScreenParamList, "MealDetailScreen">>();

  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route?.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return { selectedMeal };
};
