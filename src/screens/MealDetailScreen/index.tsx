import { List, Subtitle } from "@components/MealDetail";
import { MealDetails } from "@components/MealDetails";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLogic } from "./useLogic";

export const MealDetailScreen = () => {
  const { selectedMeal } = useLogic();

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration || null}
        complexity={selectedMeal?.complexity || ""}
        affordability={selectedMeal?.affordability || ""}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients || []} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps || []} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
