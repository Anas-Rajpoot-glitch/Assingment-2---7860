import { useState } from "react";
import { Box, Input, Button, Text, VStack } from "native-base";
import { api, setToken } from "../api/axios";
export default function Profile(){
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const [name,setName]=useState(""); const [token,setTok]=useState("");
  const signup=async()=>{ await api.post("/auth/signup",{name,email,password}); };
  const login=async()=>{
    const r = await api.post("/auth/login",{email,password});
    setTok(r.data.token); setToken(r.data.token);
  };
  return (
    <Box p="4">
      <VStack space="2">
        <Text bold>Login / Signup</Text>
        <Input placeholder="Name (for signup)" value={name} onChangeText={setName}/>
        <Input placeholder="Email" value={email} onChangeText={setEmail}/>
        <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry/>
        <Button onPress={signup}>Signup</Button>
        <Button onPress={login}>Login</Button>
        <Text mt="3" selectable numberOfLines={2}>Token: {token?.slice(0,40)}...</Text>
      </VStack>
    </Box>
  );
}
