import React,{useEffect,useState} from "react";
import {FlatList, SafeAreaView,Text, View,Image,TouchableOpacity,ActivityIndicator} from "react-native"
import database from "@react-native-firebase/database"
import MealsCard from "../../components/MealsCard";
import styles from "./meals.style"
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import Loading from "../../components/Loading";
import sema from "../../sema.json"
const Meals = (props) =>{
    
    const { id,categoryId } = props.route.params
    const [loading, setLoading] = useState(false)
    const [mealList, setMealList] = useState([]);
    useEffect(() => {
       
        setLoading(true)
       
        
        database().ref('/meals').on("value", snapshot => {

            const meals = []
            snapshot.forEach(element => {
                if (element.val().categoryId == id) {
                    meals.push(element.val())
                }
            });
           
            
            setMealList(meals)
            setLoading(false)
            console.log(meals)
            
        })
    }, [])

    if (loading == true) {
        return <SafeAreaView style={styles.container}><Loading /></SafeAreaView>
    }
    const renderItem = ({item}) => <MealsCard meals={item} onPress={()=>goMeal(item)}/>
    const Back = () =>{
        props.navigation.goBack()
    }
    const goMeal = (item) =>{
       props.navigation.navigate("Tarifler",item)
      }
    const getHeader = () => {
        return(
          <View style={styles.top_container}>
                    <TouchableOpacity onPress={Back}> 
                     <Icon name="arrow-left" size={35} color="#EF4044" />

                    </TouchableOpacity>
                    <Image source={{uri:"https://firebasestorage.googleapis.com/v0/b/sema-skitchen.appspot.com/o/dfebb6f1bb51c59a66db17345c743b07.png?alt=media&token=0ead7135-b5cd-4cb3-8a8a-bda30da2f6ef"}} style={styles.image} />
                    <Text style={styles.text}>Sema's Kitchen</Text>
                    
          </View>
    
        )
    };
    return(
        
            <View style={styles.container}> 
             <FlatList data={mealList} renderItem={renderItem} ListHeaderComponent={getHeader} />
            </View>
           
        
    )
}

export default Meals