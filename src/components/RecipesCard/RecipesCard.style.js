import { StyleSheet,Dimensions} from "react-native";
const height = Dimensions.get("window").height
export default StyleSheet.create({
    contaniner:{
        flex:1,
        backgroundColor:"#efefef"
    },
    backroundImage:{
        height: height * 0.6,
        justifyContent: 'space-between',
    },
    description:{
        flex:1,
        backgroundColor:"#efefef",
        marginTop:-10,
        borderRadius:25,
        padding:10,
        
        
    },
    backIcon:{
        marginLeft:10,
        marginTop:10,
        
    },

    wrapper:{
        position: 'absolute',
        right:10,
        top:-40,
        width: 64,
        height: 64,
        backgroundColor:"#EF4044",
        borderRadius:64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textWrapper:{
        flex:1,
        backgroundColor:"#efefef",
        marginTop:5
    },
    title:{
        fontFamily:"MontserratAlternates-BoldItalic",
        color:"black",
        fontSize:25,
        marginLeft:15,
        marginTop:10,
        
    },
    materials:{
        fontFamily:"MontserratAlternates-MediumItalic",
        textAlign:"center",
        margin:10,
        fontSize:16,
        color:"black",
        


    

    },
    meal:{
        fontFamily:"MontserratAlternates-BoldItalic",
        color:"#EF4044",
        fontSize:30,
        marginLeft:15,
        textAlign:"center"

    },
    title2:{
        fontFamily:"MontserratAlternates-BoldItalic",
        color:"#EF4044",
        fontSize:25,
        marginLeft:15,
        marginTop:10,

    },
    recipe:{
        fontFamily:"MontserratAlternates-MediumItalic",
        textAlign:"center",
        margin:10,
        fontSize:16,
        color:"black",
        
    }

    
})