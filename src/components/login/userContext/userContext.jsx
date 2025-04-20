import { createContext, useState } from 'react'

export const userContext = createContext()

const UserProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(false)
    function handleIsLogged (isUser) {
        setIsLogged(isUser);
    }
    return (
        <userContext.Provider value={{isLogged, setIsLogged, handleIsLogged}}>
            {children}
        </userContext.Provider>
    )
}
export default UserProvider;
