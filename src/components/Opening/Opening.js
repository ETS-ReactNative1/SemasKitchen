import React from "react";
import LottieView from "lottie-react-native"
import { View,ImageBackground, Image,Text} from "react-native";
import styles from "./Opening.style"
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";

const Opening = ({navigation}) =>{
    function go(){
        navigation.navigate("Kategoriler")
    }
    return(
        <View style={styles.container}>
         <View style={styles.image_container}>
         <Image source={{uri:"https://firebasestorage.googleapis.com/v0/b/sema-skitchen.appspot.com/o/dfebb6f1bb51c59a66db17345c743b07.png?alt=media&token=0ead7135-b5cd-4cb3-8a8a-bda30da2f6ef"}} style={styles.image} />
         <Text style={styles.text}>Sema's Kitchen</Text>
         </View>
          <View style={styles.inner_container}>
             <LottieView source={require("../Loading/Loading.json")} autoPlay={true} loop={false} onAnimationFinish={go} speed={1.7}/>
          </View>
          
         
          <View style={styles.bottom}>
            <Icon name="google-play" size={50} />
            <Icon name="firebase"    size={50} />
            <Icon name="react" size={50} />
            <Icon name="android" size={50} />
          </View>
          

        </View>
       
        

    )
}

export default Opening