import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/common";
import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import EditModal from "../components/EditModal";

export default function HomeScreen() {
  const { addTask, tasks, deleteTask, editTask } = useAppContext();
  const [title, setTitle] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number>();
  const [initialValue, setInitialValue] = useState<string>("");

  function handleSubmit(): boolean {
    if (title) {
      addTask(title);
      setTitle("");
      return true;
    }
    return false;
  }

  function handleDelete(id: number): boolean {
    return id > 0 ? deleteTask(id) : false;
  }

  function handleEditSubmit(title: string): boolean {
    if (selectedTaskId !== undefined) {
      return editTask(selectedTaskId, title);
    }
    return false;
  }

  function onClose() {
    setIsModalVisible(false);
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

              <View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(t.id)}
                >
                  <Text style={styles.textButton}>Rimuovi Task</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => {
                    setIsModalVisible(true);
                    setInitialValue(t.title);
                    setSelectedTaskId(t.id);
                  }}
                >
                  <Text style={styles.textButton}>Modifica Task</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}

      <EditModal
        visible={isModalVisible}
        onClose={onClose}
        onSubmit={handleEditSubmit}
        initialValue={initialValue}
      />
    </View>
  );
}
