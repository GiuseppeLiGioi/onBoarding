import {View, TextInput, Text} from "react-native"
import {styles} from "../styles/common"
import { useAppContext } from "../contexts/AppContext"


export default function HomeScreen(){
    const {stateToView, updateState} = useAppContext()


    return(
        <View style={styles.container}>
            <View style={styles.containerInput}>

            <TextInput 
            placeholder="Inserisci il testo..."
            placeholderTextColor="black"
            value={stateToView}
            onChangeText={updateState} /* Medesimo di scrivere: updateState((text) => setStateToView(text)) in Native ricevo già la stringa pronta
                                        Non  devo estrarre dall'evento (e) come in React Web.
                                        Con onChange normale updateState((e) => setStateToView(e.target.value))*/
            style={styles.inputStyle}                           
            />
            </View>

            <Text style={styles.text}>Hai scritto: {stateToView}</Text>

            
               
        </View>
    )
}