import React, { Fragment } from 'react';
import { StyleSheet, AsyncStorage, Image, Text, View, ScrollView, tatusBar, FlatList, SafeAreaView } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import { Ionicons } from 'react-native-vector-icons';
import { Container, Content } from 'native-base';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen'


import Login from './Login';
import Register from './Register';
import Account from './Account';
import Dashboard from './Dashboard';
import Series from './Series';
import Library from './Library';
import Search from './Search';
import Filter from './Filter';
import ForgotPassword from './ForgotPassword';
import Wishlist from './Wishlist';
import Profile from './Profile';
import EditProfile from './EditProfile';
import AuthLoadingScreen from './AuthLoadingScreen';
import SeriesDetails from './SeriesDetails';
import ChangePassword from './ChangePassword';
import Privacy from './Privacy';
import FAQs from './FAQs';
import Feedback from './Feedback';
import FullSearch from './FullSearch';
import ytPlayer from './ytPlayer';


import Icon from 'react-native-vector-icons/Feather';



 const BAppNav = createBottomTabNavigator({
  Movies: {
    screen: Dashboard, navigationOptions: {
      tabBarLabel: 'Movies',
      tabBarIcon: ({ focused }) => (
        focused
          ? <Image source={require('../assets/home.png')} style={{ width: 35, height: 35 }} />
          : <Image source={require('../assets/home.png')} style={{ width: 30, height: 30 }} />
      )
    }
  },
  Search: {
    screen: Search, navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ focused }) => (
        focused
          ? <Image source={require('../assets/search.png')} style={{ width: 35, height: 35 }} />
          : <Image source={require('../assets/search.png')} style={{ width: 30, height: 30 }} />
      )
    }
  },
  Library: {
    screen: Library, navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ focused }) => (
        focused
          ? <Image source={require('../assets/favs.png')} style={{ width: 35, height: 35 }} />
          : <Image source={require('../assets/favs.png')} style={{ width: 30, height: 30 }} />
      )
    }
  },
  Wishlist: {
    screen: Wishlist, navigationOptions: {
      tabBarLabel: 'Wishlist',
      tabBarIcon: ({ focused }) => (
        focused
          ? <Image source={require('../assets/wish.png')} style={{ width: 35, height: 35 }} />
          : <Image source={require('../assets/wish.png')} style={{ width: 30, height: 30 }} />
      )
    }
  },
  Filter: {
    screen: Filter, navigationOptions: {
      tabBarLabel: 'Filter',
      tabBarIcon: ({ focused }) => (
        focused
          ? <Image source={require('../assets/filter.png')} style={{ width: 35, height: 35 }} />
          : <Image source={require('../assets/filter.png')} style={{ width: 30, height: 30 }} />
      )
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: "#fff",
    inactiveTintColor: "grey",
    style: { backgroundColor: '#000', height: 60 },
    activeTabStyle: {
      borderTopColor: '#01c72c', borderTopWidth: 2
    }
  }
});

async function getName() {
  const uname = await AsyncStorage.getItem('name');
  return uname;
}

const MainNavigator = createStackNavigator({
  //AuthLoadingScreen:AuthLoadingScreen,

  Dashboard: {
    screen: BAppNav, navigationOptions: {
      header: null,
    }
  },
  Login: { screen: Login, navigationOptions: { header: null } },
  Feedback: { screen: Feedback, navigationOptions: { header: null } },
  FAQs: { screen: FAQs, navigationOptions: { header: null } },
  FullSearch: { screen: FullSearch, navigationOptions: { header: null } },
  Privacy: { screen: Privacy, navigationOptions: { header: null } },
  Account: { screen: Account, navigationOptions: { header: null } },
  ChangePassword: { screen: ChangePassword, navigationOptions: { header: null } },
  EditProfile: { screen: EditProfile, navigationOptions: { header: null } },
  Profile: { screen: Profile, navigationOptions: { header: null } },
  SeriesDetails: { screen: SeriesDetails, navigationOptions: { header: null } },
  Register: { screen: Register, navigationOptions: { header: null } },
  ForgotPassword: { screen: ForgotPassword, navigationOptions: { header: null } },
  ytPlayer: { screen: ytPlayer, navigationOptions: { header: null } },
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: <Ionicons style={{ marginLeft: 15, color: '#fff' }} onPress={() => navigation.toggleDrawer()} name="md-menu" size={30} />,
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#2f77e1' },
      headerTitle: 'KHOJ',
      headerRight: <Ionicons onPress={() => logout().then(navigation.navigate("Login"))} style={{ marginRight: 10, color: '#fff' }}
        name="md-log-out" size={25} />
    }
  }

})

async function logout() {
  await AsyncStorage.removeItem('LoggedIn');
}


const Navigation = createAppContainer(MainNavigator)


export default Navigation;

// const styles = StyleSheet.create({
//   scrollView: { backgroundColor: Colors.lighter, },
//   listHeader: { backgroundColor: '#eee', color: "#222", height: 44, padding: 12 },
//   title: { fontSize: 18, fontWeight: 'bold', paddingTop: 10 },
//   message: { fontSize: 14, paddingBottom: 15, borderBottomColor: "#ccc", borderBottomWidth: 1 },
//   engine: { position: 'absolute', right: 0, },
//   body: { backgroundColor: Colors.white, paddingHorizontal: 20, paddingVertical: 10, },
//   sectionContainer: { marginTop: 32, paddingHorizontal: 24, },
//   sectionTitle: { fontSize: 24, fontWeight: '600', color: Colors.black },
//   sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: '400', color: Colors.dark, },
//   highlight: { fontWeight: '700' },
//   footer: { color: Colors.dark, fontSize: 12, fontWeight: '600', padding: 4, paddingRight: 12, textAlign: 'right', },
// });