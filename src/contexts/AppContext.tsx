import { createContext, useContext } from "react";
import { useState } from "react";

/*Creo il contesto fuori dalla funzione in modo da non crearne uno nuovo ad ogni invocazione.
specifico il tipo dello stato, del parametro della funzione + il tipo del valore ritornato dalla funzione, in questo caso void, non restituisce nulla. */
const AppContext = createContext<{stateToView: string, updateState: (val : string) => void} | undefined>(undefined)

/*Diverso da Js {children}: {children: React.ReactNode} = specifico che il children potrà essere qualsiasi elemento native */
function AppProvider({children}: {children: React.ReactNode}){
const [stateToView, setStateToView] = useState<string>("")


const updateState = (value : string) => {
setStateToView(value)
}

 return (
    <AppContext.Provider value={{updateState, stateToView}}>
        {children}
    </AppContext.Provider>
 )
}

/*Funzione generica per non fare il controllo su ogni componente. Verifica che il contesto contenga il valore e non undefined */
function useAppContext(){

    const contextValue = useContext(AppContext)

    if(!contextValue){
        throw new Error ("Devi essere dentro il Provider")
    }
    else{
        return contextValue
    }
}

export {useAppContext, AppProvider};