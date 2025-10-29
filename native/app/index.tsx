import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen(){
  return(
    <View style={styles.square}>
      <Text style={styles.colorBlue}>blublu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  colorBlue:{
    color:"#6f95ff",
    fontSize:50,
    alignSelf:"center"
  },

  square:{
    height:200,
    width:200,
    backgroundColor:"#301c41",
    alignSelf:"center"
  }
})