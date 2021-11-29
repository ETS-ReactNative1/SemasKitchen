import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        backgroundColor:"#efefef",
        flex:1,
        
    },
    top_container:{
        
        backgroundColor:"white",
        justifyContent:"space-around",
        flexDirection:"row",
        borderWidth:1,
        
        borderBottomStartRadius:40,
        borderBottomEndRadius:40,
        borderColor:"white",
        shadowColor:"black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        
    },
    
    image:{
            marginTop:10,
            marginLeft:25,
            resizeMode:"contain",
            width: 90,
            height: 90,
        },
    text:{
            textAlign:"justify",
            marginRight:50,
            marginTop:40,
            fontSize:30,
            color:"#EF4044",
            fontFamily:"IrishGrover-Regular"}

    
})