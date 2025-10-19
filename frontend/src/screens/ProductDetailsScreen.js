import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Box, Image, Text, Button } from "native-base";
import { api } from "../api/axios";
export default function ProductDetails({route, navigation}){
  const {id}=route.params; const [p,setP]=useState(null);
  useEffect(()=>{ api.get(`/products/${id}`).then(r=>setP(r.data)); },[id]);
  if(!p) return null;
  return (
    <ScrollView>
      <Image alt={p.name} source={{uri:p.image_url}} height={250}/>
      <Box p="4">
        <Text bold fontSize="xl">{p.name}</Text>
        <Text my="2">${p.price.toFixed(2)}</Text>
        <Text>{p.description}</Text>
        <Button mt="4" onPress={async()=>{await api.post("/cart",{product_id:p._id, quantity:1}); navigation.navigate("Tabs",{screen:"Cart"});}}>Add to Cart</Button>
      </Box>
    </ScrollView>
  );
}
