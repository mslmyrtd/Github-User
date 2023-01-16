import { createContext, useContext, useState, useEffect } from "react";
import mockFollowers from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";
import mockUser from "./mockData/mockUser";
import axios from "axios";
import { IGithubUser, IFollowers } from "../types/context.types";

const rootUrl = 'https://api.github.com';

interface InputProviderProps {
    children: React.ReactNode
}
interface GithubContextInterface {
    githubUser: IGithubUser
    repos: Array<object>
    followers: IFollowers[]
    requests: number
    error: { show: boolean, msg: string }
    searchGithubUser: Function
}
const initialContext = {
    githubUser: mockUser,
    repos: mockRepos,
    followers: mockFollowers,
    requests: 0,
    error: {
        show: false, msg: ""
    },
    searchGithubUser: Function
}

const GithubContext = createContext<GithubContextInterface>(initialContext);
const GithubProvider = ({ children }: InputProviderProps) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    //request loading
    const [requests, setRequests] = useState(0)
    const [loading, setLoading] = useState(false)
    //error
    const [error, setError] = useState({ show: false, msg: "" })

    const searchGithubUser = async (user: string): Promise<any> => {
        toggleError()
        const response = await axios(`${rootUrl}/users/${user}`).catch((err) => console.log(err)
        )
        if (response) {
            if (response.status === 200) {
                setGithubUser(response.data)
            } else {
                toggleError(true, "there is no user with that username")
            }
        }
    }
    //check rate
    const checkRequest = () => {
        axios(`${rootUrl}/rate_limit`).then(({ data }) => {
            let { rate: { remaining } } = data
            setRequests(remaining)
            if (remaining === 0) {
                toggleError(true, "sorry, you have exceeded your hourly rate limit")
            }
        }).catch((err) => console.log(err))
    }
    function toggleError(show: boolean = false, msg: string = "") {
        setError({ show, msg })
    }
    //error
    useEffect(
        checkRequest

        , [])
    return (<GithubContext.Provider value={{ githubUser, repos, followers, requests, error, searchGithubUser }}>{children}</GithubContext.Provider>)
}
const useGlobalContext = () => {
    return useContext(GithubContext)
}
export { GithubContext, GithubProvider, useGlobalContext }