import {View, TextInput, Text, TouchableOpacity} from "react-native"
import {styles} from "../styles/common"
import { useState } from "react"
import { useAppContext } from "../contexts/AppContext"


export default function HomeScreen(){
    const {stateToView, updateState, addTask, tasks} = useAppContext()
    const [title, setTitle] = useState<string>("")

    function handleSubmit(){
        if(title){
            addTask(title);
            setTitle('')
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.containerInput}>

            <TextInput 
            placeholder="Inserisci il testo del task"
            placeholderTextColor="black"
            value={title}
            onChangeText={setTitle} /* Medesimo di scrivere: updateState((text) => setStateToView(text)) in Native ricevo già la stringa pronta
                                        Non  devo estrarre dall'evento (e) come in React Web.
                                        Con onChange normale updateState((e) => setStateToView(e.target.value))*/
            style={styles.inputStyle}                           
            />

            <TouchableOpacity style={styles.buttonAdd} onPress={() => handleSubmit()}>
                <Text  style={styles.textAdd}>Aggiungi Task</Text>
            </TouchableOpacity>
            </View>

            {
                tasks && tasks.length > 0 && ( 
                    <View style={styles.taskList}>
                        {
                            tasks.map((t) => (
                                <Text key={t.id} style={{marginBottom: 5, color: "white", textAlign: "center"}}>{t.title}</Text>
                            ))
                        }
                    </View>
                )
            }
            </View>

            
               
    )
}