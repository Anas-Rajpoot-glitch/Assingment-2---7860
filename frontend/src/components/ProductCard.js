import { Box, Image, Text, Button, VStack } from "native-base";
export default function ProductCard({item, onDetails, onAdd}){
  return (
    <Box borderWidth={1} borderRadius="lg" p="3" m="1">
      <Image alt={item.name} source={{uri:item.image_url}} height={120} borderRadius={8}/>
      <VStack space="1" mt="2">
        <Text bold>{item.name}</Text>
        <Text>${item.price.toFixed(2)}</Text>
        <Button size="sm" onPress={onDetails}>View</Button>
        <Button size="sm" variant="outline" onPress={onAdd}>Add to Cart</Button>
      </VStack>
    </Box>
  );
}
