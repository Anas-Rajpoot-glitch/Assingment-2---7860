import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Box, HStack, Text, Button, Input } from "native-base";
import { api } from "../api/axios";
export default function Cart({navigation}){
  const [items,setItems]=useState([]);
  const load=async()=>{ const r=await api.get("/cart"); setItems(r.data); };
  useEffect(()=>{ const focus= navigation.addListener('focus',load); return focus; },[navigation]);
  const total = items.reduce((s,i)=> s + i.product_id.price * i.quantity, 0);
  return (
    <Box p="3">
      <FlatList
        data={items}
        keyExtractor={x=>x._id}
        renderItem={({item})=>(
          <HStack justifyContent="space-between" alignItems="center" mb="2">
            <Text flex={1}>{item.product_id.name}</Text>
            <Input width="16" keyboardType="numeric" defaultValue={String(item.quantity)}
              onEndEditing={async e=>{await api.post("/cart",{product_id:item.product_id._id, quantity:+e.nativeEvent.text||1}); load();}}/>
            <Button ml="2" onPress={async()=>{await api.delete(`/cart/${item._id}`); load();}}>Remove</Button>
          </HStack>
        )}
      />
      <HStack justifyContent="space-between" mt="4">
        <Text bold>Total: ${total.toFixed(2)}</Text>
        <Button onPress={()=>navigation.navigate("Checkout",{total})}>Checkout</Button>
      </HStack>
    </Box>
  );
}
