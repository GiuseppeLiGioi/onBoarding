import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/common";
import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

export default function HomeScreen() {
  const { addTask, tasks, deleteTask } = useAppContext();
  const [title, setTitle] = useState<string>("");

  function handleSubmit() {
    if (title) {
      addTask(title);
      setTitle("");
    }
  }

  function handleDelete(id: number) {
    if (id) {
      deleteTask(id);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Inserisci il testo del task"
          placeholderTextColor="black"
          value={title}
          onChangeText={
            setTitle
          } /* Medesimo di scrivere: updateState((text) => setStateToView(text)) in Native ricevo già la stringa pronta
                                        Non  devo estrarre dall'evento (e) come in React Web.
                                        Con onChange normale updateState((e) => setStateToView(e.target.value))*/
          style={styles.inputStyle}
        />

        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.textAdd}>Aggiungi Task</Text>
        </TouchableOpacity>
      </View>

      {tasks && tasks.length > 0 && (
        <View style={styles.taskList}>
          {tasks.map((t) => (
            <View style={styles.containerSingleTask}>
              <Text
                key={t.id}
                style={{ marginBottom: 5, color: "white", textAlign: "center" }}
              >
                {t.title}
              </Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(t.id)}
              >
                <Text style={styles.textDelete}>Rimuovi Task</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
