import { createContext, useState } from 'react'

export const userContext = createContext()

const UserProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(false)
    const [profilePic, setProfilePic] = useState(
        JSON.parse(localStorage.getItem('currentUser'))?.profilePicture || null
    );
    function handleIsLogged (isUser) {
        setIsLogged(isUser);
    }
    return (
        <userContext.Provider value={{isLogged, setIsLogged, handleIsLogged, profilePic, setProfilePic}}>
            {children}
        </userContext.Provider>
    )
}
export default UserProvider;
