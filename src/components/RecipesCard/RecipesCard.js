import React from "react";
import { View,Text,ImageBackground, TouchableOpacity } from "react-native";
import styles from "./RecipesCard.style"
import  Icon from "react-native-vector-icons/MaterialCommunityIcons";
const RecipesCard = ({recipe,onPress}) =>{
   
    return(
       <View style={styles.contaniner}>
           <ImageBackground source={{uri:recipe.image}} style={styles.backroundImage}>
            <TouchableOpacity onPress={onPress}>
                <Icon name="arrow-left" size={35} color="white" style={styles.backIcon}/>

            </TouchableOpacity>   
           </ImageBackground>
           <View style={styles.description}>
               <View style={styles.wrapper}>
                   <Icon name="chef-hat" size={32} color="white" />
               </View>
            
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.meal}>{recipe.strMeal}</Text>
                <Text style={styles.title}>Malzemeler:</Text>
                <Text style={styles.materials}>{recipe.strMaterials}</Text>
                <Text style={styles.title2}>Yapılışı:</Text>
                <Text style={styles.recipe}>{recipe.strRecipe}</Text>

            
            </View>
            
            
       </View>

    )

}

export default RecipesCard