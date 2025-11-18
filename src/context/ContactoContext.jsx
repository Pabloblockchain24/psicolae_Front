/*Import dependencies*/
import { createContext, useContext } from "react";

/*Import API functions*/
import { sendMail } from "../api/contact.api"

const ContactContext = createContext()

export const useContact = () => {
    const context = useContext(ContactContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export const ContactProvider = ({ children }) => {
    const sendMailContact = async (data) => {
        try {
            const res = await sendMail(data)
            if (res.status === 200) {
                setUser(null);
                setIsAuthenticated(false);
            }
            return res
        } catch (error) {
            return error
        }
    }

    return (
        <ContactContext.Provider value={{
            sendMailContact,
        }}>
            {children}
        </ContactContext.Provider>
    )
}
