import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { Home } from "../Screens/Home";
import { Details } from "../Screens/Details";
import { Register } from "../Screens/Register";

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes(){

  return (
   <Navigator>
    <Screen name= 'home' component= {Home}/>
    <Screen name= 'register' component= {Register}/>
    <Screen name= 'details' component= {Details}/>
   </Navigator>

  )
}