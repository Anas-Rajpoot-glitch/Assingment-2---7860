import { useEffect, useState } from "react";
import { Box, Select, CheckIcon, FlatList, Text } from "native-base";
import { api } from "../api/axios";
export default function Categories(){
  const [cat,setCat]=useState(""); const [data,setData]=useState([]);
  const load=async()=>{ const r=await api.get("/products",{params:{cat}}); setData(r.data); };
  useEffect(()=>{ load(); },[cat]);
  return (
    <Box p="3">
      <Select selectedValue={cat} minWidth="200" placeholder="Choose Category" onValueChange={setCat}
        _selectedItem={{ bg:"teal.600", endIcon:<CheckIcon/> }}>
        <Select.Item label="All" value=""/>
        <Select.Item label="Apparel" value="Apparel"/>
        <Select.Item label="Shoes" value="Shoes"/>
        <Select.Item label="Electronics" value="Electronics"/>
      </Select>
      <FlatList data={data} renderItem={({item})=><Text mt="3">• {item.name} (${item.price})</Text>} />
    </Box>
  );
}
