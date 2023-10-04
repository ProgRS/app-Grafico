import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Text} from 'react-native';

const Stack = createStackNavigator();

import Home from "./pages/Home";
import MaiorEstoque from "./pages/MaiorEstoque";
import MenorEstoque from "./pages/MenorEstoque";

export default function Routes(){

  const screenOptionStyle = {
   headerStyle: { backgroundColor: '#007281'},
    headerTintColor: "#f1f1f1"
  }

    return(
      <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="MaiorEstoque" component={MaiorEstoque}
          options={{headerTitle: 'Maior Estoque'}}
          />
          <Stack.Screen name="MenorEstoque" component={MenorEstoque} 
            options={{headerTitle: 'Menor Estoque'}}
          />
      </Stack.Navigator>
      </NavigationContainer>
    )
}