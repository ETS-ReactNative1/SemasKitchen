import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const Loading = () =>{
    return(
        <View style={{flex:1}}>
            <LottieView source={require("../Opening/Opening.json")} autoPlay={true} loop={false} />
        </View>
    )
}
export default Loading