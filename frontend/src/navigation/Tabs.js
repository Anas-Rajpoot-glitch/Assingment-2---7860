import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/HomeScreen";
import Categories from "../screens/CategoriesScreen";
import Cart from "../screens/CartScreen";
import Profile from "../screens/ProfileScreen";
const Tab = createBottomTabNavigator();
export default function Tabs(){
  return (
    <Tab.Navigator screenOptions={{headerTitleAlign:"center"}}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Categories" component={Categories}/>
      <Tab.Screen name="Cart" component={Cart}/>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  );
}
