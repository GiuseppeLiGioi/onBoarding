import { Text, View, Modal, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../styles/common";
import { useState } from "react";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => boolean;
  initialValue: string;
};

export default function EditModal({
  visible,
  onClose,
  onSubmit,
  initialValue,
}: ModalProps) {
  const [editTitle, setEditTitle] = useState<string>("");

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
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.textModal}>Annulla</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.textModal}>Conferma</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
