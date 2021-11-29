import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"column",
        justifyContent:"flex-start",
    },
    image_container:{
        flex:1,
        flexDirection:"row",
        marginTop:50,
        marginRight:10,
        justifyContent:"center"
        
    },
    image:{
        marginTop:15,
        marginLeft:10,
        resizeMode:"contain",
        width: 110,
        height: 110,
        
    },
    bottom:{
       
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
       
    },
    inner_container:{
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
        borderColor:"white",
        shadowColor:"black",
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
    },
    text:{
        textAlign:"auto",
        marginRight:20,
        marginTop:60,
        fontSize:35,
        color:"#EF4044",
        fontFamily:"IrishGrover-Regular"
    }
    
})