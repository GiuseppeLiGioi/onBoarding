import {View, TextInput, Text, StyleSheet} from "react-native"
import { useAppContext } from "../contexts/AppContext"


export default function HomeScreen(){
    const {stateToView, updateState} = useAppContext()

    const styles = StyleSheet.create({

        container: {
          alignItems: "center",
          marginTop: 20,

        },

        inputStyle: {
            padding: 10,
            borderColor: "blue",
            borderWidth: 2,
            minWidth: "70%",
            borderRadius: 15,

        },
        
        text:{
            marginTop: 20,
            fontSize: 20
        }

    })

    return(
        <View style={styles.container}>
            <TextInput 
            placeholder="Inserisci il testo..."
            placeholderTextColor="black"
            value={stateToView}
            onChangeText={updateState} /* Medesimo di scrivere: updateState((text) => setStateToView(text)) in Native ricevo già la stringa pronta
                                        Non  devo estrarre dall'evento (e) come in React Web.
                                        Con onChange normale updateState((e) => setStateToView(e.target.value))*/
            style={styles.inputStyle}                           
            />

            <Text style={styles.text}>Hai scritto: {stateToView}</Text>

            
               
        </View>
    )
}