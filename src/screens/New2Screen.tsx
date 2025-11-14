import { View, Text } from "react-native";
import { styles } from "../styles/common";
import { useAppContext } from "../contexts/AppContext";
export default function New1Screen() {
  const { tasks } = useAppContext();
  return (
    <View style={styles.taskListDark}>
      {tasks.length > 0 &&
        tasks.map((t) => (
          <Text
            key={t.id}
            style={{ color: "white", fontSize: 14, textAlign: "center" }}
          >
            {t.title}
          </Text>
        ))}
    </View>
  );
}
