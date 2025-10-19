import { Box, Input, Button, VStack, Text } from "native-base";
import { api } from "../api/axios";
export default function Checkout({route, navigation}){
  const { total } = route.params ?? { total: 0 };
  return (
    <Box p="4">
      <VStack space="3">
        <Text bold>Shipping</Text>
        <Input placeholder="Full Name"/>
        <Input placeholder="Address"/>
        <Input placeholder="City"/>
        <Input placeholder="Card Number"/>
        <Button onPress={async()=>{
          const r = await api.post("/orders/checkout");
          navigation.replace("OrderConfirm",{orderId:r.data.orderId, total:r.data.total});
        }}>Pay ${total?.toFixed?.(2) || "0.00"}</Button>
      </VStack>
    </Box>
  );
}
