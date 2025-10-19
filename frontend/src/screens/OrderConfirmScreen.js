import { Box, Text, Button } from "native-base";
export default function OrderConfirm({route, navigation}){
  const { orderId, total } = route.params ?? {};
  return (
    <Box p="4" alignItems="center">
      <Text fontSize="xl" bold>Order Placed!</Text>
      <Text mt="2">Order ID: {orderId}</Text>
      <Text mt="1">Total: ${Number(total||0).toFixed(2)}</Text>
      <Button mt="6" onPress={()=>navigation.navigate("Tabs",{screen:"Home"})}>Back to Home</Button>
    </Box>
  );
}
