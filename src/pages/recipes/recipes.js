import React,{useEffect,useState} from "react";
import {FlatList, SafeAreaView,Text, View,Image,ActivityIndicator} from "react-native"
import database from "@react-native-firebase/database"
import RecipesCard from "../../components/RecipesCard/RecipesCard";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./recipes.style"
import Loading from "../../components/Loading";

const Recipes = (props) =>{
    const { id,strMeal } = props.route.params
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([]);
    useEffect(() => {
       
        setLoading(true)
       
        
        database().ref('/recipes').on("value", snapshot => {

            const recipe = []
            snapshot.forEach(element => {
                if (element.val().mealsId == id && element.val().strMeal == strMeal) {
                    recipe.push(element.val())
                }
            });
           
            
            setRecipeList(recipe)
            setLoading(false)
            console.log(recipe)
            
            
        })
    }, [])
    const Back = () =>{
        props.navigation.goBack("Yemekler")
    }
    
    if (loading == true) {
            return <SafeAreaView style={{flex:1}}><Loading /></SafeAreaView>
        }
   
    const renderRecipe = ({item}) => <RecipesCard recipe={item} onPress={Back}/>
    const getHeader = () => {
        return(
          <View style={styles.top_container}>
                    
                    <Image source={{uri:"https://firebasestorage.googleapis.com/v0/b/sema-skitchen.appspot.com/o/dfebb6f1bb51c59a66db17345c743b07.png?alt=media&token=0ead7135-b5cd-4cb3-8a8a-bda30da2f6ef"}} style={styles.image} />
                    <Text style={styles.text}>Sema's Kitchen</Text>
                    
          </View>
    
        )
    };
    
    return(
        
            
            <FlatList data={recipeList} renderItem={renderRecipe} ListFooterComponent={getHeader} />
        
    )
}
export default Recipes