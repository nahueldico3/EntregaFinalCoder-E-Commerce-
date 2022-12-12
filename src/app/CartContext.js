import { useState } from "react";
import { createContext, useContext } from "react";


const AppContext = createContext();
export const useMyContext = () => useContext (AppContext);


const CartContext = ({ children }) => {
    const {state, setState} = useState();

    return(
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    )
}

export default CartContext;