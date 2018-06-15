import React from 'react'
import {Text, Animated, Easing} from 'react-native'
import {StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation'
import LoginScreen from '../Containers/Login/SignIn'
import SignupScreen from '../Containers/Login/SignUp'
import LaunchScreen from '../Containers/LaunchScreen'
import Demo from '../Containers/Demo'
import SideMenu from '../Containers/SideMenu'
import Icon from 'react-native-vector-icons/FontAwesome'

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 100,
    timing  : Animated.timing,
    easing  : Easing.step0
  }
})

// drawer stack
const DrawerStack = DrawerNavigator({
  home: {screen: LaunchScreen},
  demo: {screen: Demo}
}, {
  gesturesEnabled : true,
  drawerWidth     : 220,
  contentComponent: SideMenu
});

const DrawerNavigation = StackNavigator({
  DrawerStack: {screen: DrawerStack},
}, {
  headerMode       : 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle     : {backgroundColor: 'green'},
    headerTintColor : 'red',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    title           : 'Logged In to your app! Logged In to your app!',
    gesturesEnabled : true,
    headerLeft      : <Text onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }}>Menu</Text>
  }),
});

// login stack
const LoginStack = StackNavigator({
  loginScreen : {screen: LoginScreen, navigationOptions: {title: 'Sign In'}},
  signupScreen: {screen: SignupScreen, navigationOptions: {title: 'Sign Up'}},
  //forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode       : 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: 'red'},
    title      : 'You are not logged in'
  }
});

const TabStack = TabNavigator({
    home: {
      screen           : LaunchScreen, //OrdersStack,
      navigationOptions: {
        tabBarLabel: 'Home', //strings('tabs.Orders'),
        tabBarIcon : ({tintColor}) => (<Icon name="list" color={tintColor} size={28}/>),
      }
    },
    demo: {screen: Demo}
  }, {
    animationEnabled: true,
    lazy            : true,
    swipeEnabled    : true,
    gesturesEnabled : true,
  },
      )
;

const PrimaryNav = StackNavigator({
  loginStack : {screen: LoginStack},
  drawerStack: {screen: DrawerNavigation},
  tabStack   : {screen: TabStack}
}, {
  // Default config for all screens
  headerMode      : 'none',
  title           : 'Main',
  initialRouteName: 'tabStack',
  transitionConfig: noTransitionConfig
});
export default PrimaryNav