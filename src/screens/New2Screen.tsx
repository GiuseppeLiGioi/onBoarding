import {View, Text, TextInput} from "react-native"
import {styles} from "../styles/common"
import { useAppContext } from "../contexts/AppContext"
export default function New2Screen(){
    const {stateToView, updateState} = useAppContext()
    return(
              <View style={styles.container}>
                      <TextInput 
                      placeholder="Inserisci il testo..."
                      placeholderTextColor="black"
                      value={stateToView}
                      onChangeText={updateState}
                      style={styles.inputStyle}                           
                      />
          
                      <Text style={styles.text}>Hai scritto: {stateToView}</Text>
          
                      
                         
                  </View>
      )
}