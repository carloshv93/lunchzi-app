import { View, FlatList, StyleSheet, Text } from "react-native";
import { ListItem } from "../components";
import { useFetch } from "../hooks";

const Meals = ({ navigation }) => {
  const { loading, data: meals } = useFetch({
    url: "https://lunchzi-api.vercel.app/meals",
  });

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      <FlatList
        style={styles.list}
        data={meals}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => navigation.navigate("Modal", { _id: item._id })}
            name={item.name}
          />
        )}
        keyExtractor={(x) => x._id}
      />
    </View>
  );
};

Meals.navigationOptions = {
  title: "Available Meals",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  list: {
    alignSelf: "stretch",
  },
});

export default Meals;
