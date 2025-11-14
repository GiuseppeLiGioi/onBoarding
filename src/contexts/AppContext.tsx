import { createContext, useContext } from "react";
import { useState } from "react";

/*Creo il contesto fuori dalla funzione in modo da non crearne uno nuovo ad ogni invocazione.
specifico il tipo dello stato, del parametro della funzione + il tipo del valore ritornato dalla funzione, in questo caso void, non restituisce nulla. */
type Task = {
  id: number;
  title: string;
};
const AppContext = createContext<
  | {
      addTask: (title: string) => Task;
      editTask: (id: number, title: string) => boolean;
      deleteTask: (id: number) => boolean;
      tasks: Task[];
    }
  | undefined
>(undefined);

/*Diverso da Js {children}: {children: React.ReactNode} = specifico che il children potrà essere qualsiasi elemento native */
function AppProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  /*Creo funzioni di aggiornamento per i task da visualizzare negli screens. Senza utilizzare prev, prima di aver acquisito pieno padronanza dello state precedente. */
  const addTask = (title: string): Task => {
    const NewTask: Task = {
      id: Date.now(),
      title,
    };

    setTasks([...tasks, NewTask]);

    return NewTask;
  };

  const editTask = (id: number, title: string): boolean => {
    const exists = tasks.some((t) => t.id === id);
    if (!exists) return false;

    const updatedTasks = tasks.map((t) => (t.id === id ? { ...t, title } : t));
    setTasks(updatedTasks);

    return true;
  };

  const deleteTask = (id: number): boolean => {
    const exists = tasks.some((t) => t.id === id);
    if (!exists) return false;

    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);

    return true;
  };

  return (
    <AppContext.Provider value={{ addTask, editTask, deleteTask, tasks }}>
      {children}
    </AppContext.Provider>
  );
}

/*Funzione generica per non fare il controllo su ogni componente. Verifica che il contesto contenga il valore e non undefined */
function useAppContext() {
  const contextValue = useContext(AppContext);

  if (!contextValue) {
    throw new Error("Devi essere dentro il Provider");
  } else {
    return contextValue;
  }
}

export { useAppContext, AppProvider };
