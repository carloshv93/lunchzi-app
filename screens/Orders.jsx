import { View, StyleSheet, Text } from "react-native";

const Orders = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Orders</Text>
    </View>
  );
};

Orders.navigationOptions = {
  title: "Order",
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

export default Orders;
