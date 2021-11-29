import { StyleSheet } from "react-native";
export default StyleSheet.create({
    top_container:{
        
        backgroundColor:"#f7353d",
        justifyContent:"space-around",
        flexDirection:"row",
        borderWidth:1,
        
        borderBottomStartRadius:10,
        borderBottomEndRadius:10,
        borderColor:"#efefef",
        shadowColor:"black",
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        
    },
    image:{
        marginTop:10,
        marginLeft:110,
        resizeMode:"contain",
        width: 50,
        height: 50,
    },
    text:{
        textAlign:"center",
        marginRight:135,
        marginTop:30,
        fontSize:15,
        color:"#efefef",
        fontFamily:"IrishGrover-Regular"}



})

