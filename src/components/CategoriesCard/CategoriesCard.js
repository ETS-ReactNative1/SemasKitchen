import React from "react"
import styles from "./CategoriesCard.style"
import { View,Text,Image,TouchableWithoutFeedback,Pressable, ImageBackground } from "react-native"

const CategoriesCard = ({categories,onPress}) =>{
    return(
        <ImageBackground source={{uri:categories.strCategoryThumb}} style={styles.ImageBackground}>
            <Pressable onPress={onPress}>
                <View style={styles.imageContentContainer}>
                    <View>
                        <Text style={styles.title}>{categories.strCategory}</Text>
                    </View>
                </View>
            </Pressable>

        </ImageBackground>
    )

}
export default CategoriesCard