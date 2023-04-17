import { View, Text, StyleSheet, Button } from "react-native";
import { useFetch } from "../hooks";

export default function Modal({ navigation }) {
  const { loading, data: meal } = useFetch({
    url: "https://lunchzi-api.vercel.app/meals",
    id: navigation.getParam("_id"),
  });

  const placeOrder = async () => {
    try {
      const response = await fetch("https://lunchzi-api.vercel.app/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meal_id: meal._id,
          user_id: "5f9f1b9b9b9b9b9b9b9b9b9b",
        }),
      });
      const data = await response.json();
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const handleOrder = () => {
    placeOrder().then((data) => {
      console.log(data);
      navigation.navigate("Orders", {
        _id: data._id,
      });
    });
  };

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      <Text style={styles.title}>Meal: {meal.name}</Text>
      <Text style={styles.description}>{meal.description}</Text>
      <View style={styles.buttons}>
        <Button title="Order" onPress={handleOrder} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});
