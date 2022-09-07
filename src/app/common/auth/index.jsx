import {createContext, useContext, useMemo, useState} from "react";

const AuthContext = createContext({
    user: null,
    setUser: () => {}
})

const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const context = useMemo(() => ({ user,  setUser}), [user])

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuthContext }
