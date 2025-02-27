import react from "react"
import user from "../data";

const UserContext = react.createContext();

function userProvider({ children }) {
    const [ user, setUser ] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };