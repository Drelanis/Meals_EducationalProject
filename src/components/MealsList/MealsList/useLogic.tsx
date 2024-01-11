import { Meal } from "@models/meal";
import MealItem from "../MealItem";
import { useMemo } from "react";

const useLogic = (items: Meal[]) => {
  const renderMealItem = useMemo(() => {
    return (itemData: { item: Meal }) => {
      const item = itemData.item;

      const mealItemProps = {
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration,
      };
      return <MealItem {...mealItemProps} />;
    };
  }, [items]);

  return { renderMealItem };
};

export default useLogic;
