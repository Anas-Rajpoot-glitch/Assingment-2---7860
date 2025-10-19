import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Box, Input } from "native-base";
import { api } from "../api/axios";
import ProductCard from "../components/ProductCard";
export default function Home({navigation}){
  const [q,setQ]=useState(""); const [data,setData]=useState([]);
  const load = async()=>{ const r = await api.get("/products",{params:{q}}); setData(r.data); };
  useEffect(()=>{ load(); },[]);
  return (
    <Box p="3">
      <Input placeholder="Search..." value={q} onChangeText={setQ} onSubmitEditing={load} mb="3"/>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={x=>x._id}
        renderItem={({item})=>(
          <ProductCard
            item={item}
            onDetails={()=>navigation.navigate("ProductDetails",{id:item._id})}
            onAdd={async()=>{ await api.post("/cart",{product_id:item._id, quantity:1}); }}
          />
        )}
      />
    </Box>
  );
}
