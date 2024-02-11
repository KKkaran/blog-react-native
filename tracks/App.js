import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from "./screens/AccountScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import TrackDetailsScreen from "./screens/TrackDetailsScreen";
import TrackListScreen from "./screens/TrackListScreen";
import TrackCreateScreen from "./screens/TrackCreateScreen";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

const SwitchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailsScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(SwitchNavigator);

export default () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
