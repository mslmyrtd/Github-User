import { createContext, useContext, useState } from "react";
import mockFollowers from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";
import mockUser from "./mockData/mockUser";
import axios from "axios";

const rootUrl = 'https://api.github.com';

interface InputProviderProps {
    children: React.ReactNode
}
interface GithubContextInterface {
    githubUser: Object
    repos: Array<object>
    followers: Array<object>
}
const initialContext = {
    githubUser: mockUser,
    repos: mockRepos,
    followers: mockFollowers
}
const GithubContext = createContext<GithubContextInterface>(initialContext);

const GithubProvider = ({ children }: InputProviderProps) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    return (<GithubContext.Provider value={{ githubUser, repos, followers }}>{children}</GithubContext.Provider>)
}
const useGlobalContext = () => {
    return useContext(GithubContext)
}
export { GithubContext, GithubProvider, useGlobalContext }