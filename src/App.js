import React,{useEffect, useState} from "react";
import {SafeAreaView,Text,Button,FlatList, View} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import categories from "./pages/categories"
import meals from "./pages/meals";
import Opening from "./components/Opening";
import recipes from "./pages/recipes";

const Stack = createNativeStackNavigator()
const App = () =>{
  
  
 
  
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Opening" component={Opening} />
        <Stack.Screen name="Kategoriler" component={categories} />
        <Stack.Screen name="Yemekler" component={meals} />
        
        <Stack.Screen name="Tarifler" component={recipes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App