/*Import dependencies*/
import { createContext, useContext, useState } from "react"

/* Import API functions*/
import { getPsicologos } from "../api/psicologos.api"

/*Context instance*/
const PsicologosContext = createContext()

export const usePsicologos = () => {
    const context = useContext(PsicologosContext);
    if (!context) {
        throw new Error('usePsicologos must be used within a PsicologosProvider')
    }
    return context
}

export function PsicologosProvider({ children }) {
    const [psicologos, setPsicologos] = useState([])

    const getPsicologosApi = async () => {
        const res = await getPsicologos()
        try {
            setPsicologos(res.data)
            return psicologos
        } catch (error) {
            throw new Error(error)
        }
    }
 
    return (
        <PsicologosContext.Provider value={{
            psicologos,
            getPsicologosApi
        }}>
            {children}
        </PsicologosContext.Provider>
    )

} 