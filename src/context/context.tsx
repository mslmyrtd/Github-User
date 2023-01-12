import { createContext } from "react";

interface InputProviderProps {
    children: React.ReactNode
}
const GithubContext = createContext("");

const GithubProvider = ({ children }: InputProviderProps) => {
    return (<GithubContext.Provider value={"hello"}>{children}</GithubContext.Provider>)
}
export { GithubContext, GithubProvider }