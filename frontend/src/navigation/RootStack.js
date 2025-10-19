import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import ProductDetails from "../screens/ProductDetailsScreen";
import Checkout from "../screens/CheckoutScreen";
import OrderConfirm from "../screens/OrderConfirmScreen";
const Stack = createNativeStackNavigator();
export default function RootStack(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails}/>
        <Stack.Screen name="Checkout" component={Checkout}/>
        <Stack.Screen name="OrderConfirm" component={OrderConfirm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
