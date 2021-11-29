import React from "react"
import { View,Text,TouchableWithoutFeedback,Image} from "react-native"
import styles from "./MealsCard.style"
import Icon  from "react-native-vector-icons/MaterialCommunityIcons"
const MealsCard = ({meals,onPress}) =>{
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View>
                    <View>
                        <View style={styles.inner_container}>
                            <Icon name="hexagram" size={12} color="#EF4044" />
                            <Text style={styles.text1}>Sema's Kitchen</Text>


                        </View>
                        <View style={styles.titles}>
                            <Text style={styles.titlestitle}>{meals.strMeal}</Text>

                        </View>

                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.button}>
                            <Icon name="chef-hat" size={20} color="white" />
                        </View>
                        <View style={styles.image_container}>
                         <Image source={{uri:meals.image}} style={styles.image} />
                    
                        </View>


                    </View>
                    
                </View>
            </View>
        </TouchableWithoutFeedback>
       )

    
}

export default MealsCard