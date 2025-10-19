import { NativeBaseProvider } from "native-base";
import RootStack from "./src/navigation/RootStack";
export default function App(){ 
  return (<NativeBaseProvider><RootStack/></NativeBaseProvider>);
}
