import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { OrdersScreen, MealsScreen, Modal } from "./screens";

const AppNavigator = createStackNavigator(
  {
    Meals: {
      screen: MealsScreen,
    },
    Orders: {
      screen: OrdersScreen,
    },
  },
  {
    initialRouteName: "Meals",
  }
);

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    Modal: Modal,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

export default createAppContainer(RootStack);
