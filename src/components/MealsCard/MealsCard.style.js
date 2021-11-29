import { StyleSheet,Dimensions} from "react-native";
const deviceSize=Dimensions.get("window")

export default StyleSheet.create({
   container:{
    backgroundColor:"white",
    borderRadius: 25,
    paddingTop: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor:"black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginTop:10,
    
   },
   inner_container:{
    flexDirection: 'row',
    alignItems: 'center',
    
   },
   titles:{
    marginTop: 20,
    marginRight:10,
   },
   titlestitle:{
    fontFamily:'MontserratAlternates-BoldItalic',
    fontSize: 12.5,
    color:"black",
    textAlign:"auto",
    
    
   },
   bottom:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
   },
   button:{
    backgroundColor:"#EF4044",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
   },
   image_container:{
    marginLeft: 130,
    marginTop:-65,
    
    

   },
   image:{
    width: 182,
    height: 125,
    resizeMode: 'cover',
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,

   },
   text1:{
    color:"#EF4044",
    fontFamily:"IrishGrover-Regular"
   }
   
    
   

})