import { Text, View, Modal, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../styles/common";
import { useState, useEffect } from "react";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (newTitle: string) => boolean;
  initialValue: string;
};

export default function EditModal({
  visible,
  onClose,
  onSubmit,
  initialValue,
}: ModalProps) {
  const [editTitle, setEditTitle] = useState<string>("");

  function handleSave(newTitle: string): boolean {
    if (newTitle.length > 0) {
      onClose();
      return onSubmit(
        newTitle
      ); /*la funzione assocciata al prop onSubmit ritorna true in caso di successo,
        quindi mi basta fare return onSubmit(newTitle), è già chiaro che ritornerà true in caso di successo*/
    }
    return false;
  }

  function handleClose() {
    setEditTitle(initialValue);
    onClose();
  }

  /*useEffect per avere l'initialValue corretto ad ogni render, quando l'utente clicca su modifica Task, l'input presenta il vecchio titolo da modificare */
  useEffect(() => {
    setEditTitle(initialValue);
  }, [initialValue]);

  return (
    <Modal visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.containerModal}>
          <Text>Modifica il Task</Text>

          <TextInput
            style={styles.inputStyle}
            placeholder="Modifica il titolo..."
            value={editTitle}
            onChangeText={setEditTitle}
          />

          <View style={styles.containerButtonsModal}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleClose()}
            >
              <Text style={styles.textModal}>Annulla</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleSave(editTitle)}
            >
              <Text style={styles.textModal}>Conferma</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
