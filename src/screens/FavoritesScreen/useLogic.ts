import { MEALS } from "@data/dummy-data";
import { Meal } from "@models/meal";
import { FavoritesContext } from "@store/context";
import { useContext, useMemo } from "react";

export const useLogic = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = useMemo(
    () => MEALS.filter((meal: Meal) => favoriteMealsCtx.ids.includes(meal.id)),
    [MEALS]
  );

  return { favoriteMeals };
};
