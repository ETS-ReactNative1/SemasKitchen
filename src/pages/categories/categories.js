import React,{useState,useEffect} from "react";
import {SafeAreaView,FlatList,Text,View,Image,ActivityIndicator} from "react-native"
import database from "@react-native-firebase/database"
import CategoriesCard from "../../components/CategoriesCard"
import styles from "./categories.style";
import Loading from "../../components/Loading";
import sema from "../../sema.json"
const Categories = ({navigation}) =>{
    const [a,setA]=useState([])
    const [loading, setLoading] = useState(false)
    
    function getCategory() {
      setLoading(true)
      const response =  database().ref('categories/').on("value", snapshot => {
          const contentData = snapshot.val();
          
          
          setA(contentData)
          setLoading(false)
      });
  }

  useEffect(() => {
      getCategory()
  }, [])
 

  const renderItem = ({item}) => <CategoriesCard categories={item} onPress={()=>goMeal(item)} />
  const goMeal = (item) =>{
    navigation.navigate("Yemekler",item)
  }
  
  const getHeader = () => {
    return(
      <View style={styles.top_container}>
                <Image source={{uri:"https://firebasestorage.googleapis.com/v0/b/sema-skitchen.appspot.com/o/dfebb6f1bb51c59a66db17345c743b07.png?alt=media&token=0ead7135-b5cd-4cb3-8a8a-bda30da2f6ef"}} style={styles.image} />
                <Text style={styles.text}>Sema's Kitchen</Text>
      </View>

    )
};


    return(
        
          <View style={styles.container}>
            
              
              
                <FlatList data={a} renderItem={renderItem}  ListHeaderComponent={getHeader}/>


            
            
          </View>
       
       
    )
}

export default Categories