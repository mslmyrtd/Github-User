import { createContext, useContext, useState, useEffect } from 'react'
import mockFollowers from './mockData/mockFollowers'
import mockRepos from './mockData/mockRepos'
import mockUser from './mockData/mockUser'
import axios from 'axios'
import { IGithubUser, IFollowers } from '../types/context.types'

const rootUrl = 'https://api.github.com'

interface InputProviderProps {
    children: React.ReactNode
}
interface GithubContextInterface {
    githubUser: IGithubUser
    repos: Array<object>
    followers: IFollowers[]
    requests: number
    error: { show: boolean; msg: string }
    searchGithubUser: Function
    isLoading: boolean
}
const initialContext = {
    githubUser: mockUser,
    repos: mockRepos,
    followers: mockFollowers,
    requests: 0,
    error: {
        show: false,
        msg: '',
    },
    searchGithubUser: Function,
    isLoading: false,
}

const GithubContext = createContext<GithubContextInterface>(initialContext)
const GithubProvider = ({ children }: InputProviderProps) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    //request loading
    const [requests, setRequests] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    //error
    const [error, setError] = useState({ show: false, msg: '' })

    const searchGithubUser = async (user: string): Promise<any> => {
        toggleError()
        setIsLoading(true)
        const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
            console.log(err)
        )
        if (response) {
            if (response.status === 200) {
                setGithubUser(response.data)
                const { login, followers_url } = response.data
                await Promise.allSettled([
                    axios(`${rootUrl}/users/${login}/repos?per_page=100`),
                    axios(`${followers_url}?per_page=100`),
                ]).then((results) => {
                    const [repos, followers] = results;
                    const status = 'fulfilled';
                    if (repos.status === status) {
                        setRepos(repos.value.data);
                    }
                    if (followers.status === status) {
                        setFollowers(followers.value.data);
                    }
                }).catch(err => console.log(err))
            } else {
                toggleError(true, 'there is no user with that username')
            }
            checkRequest()
            setIsLoading(false)
        }
    }
    //check rate
    const checkRequest = () => {
        axios(`${rootUrl}/rate_limit`)
            .then(({ data }) => {
                let {
                    rate: { remaining },
                } = data
                setRequests(remaining)
                if (remaining === 0) {
                    toggleError(true, 'sorry, you have exceeded your hourly rate limit')
                }
            })
            .catch((err) => console.log(err))
    }
    function toggleError(show: boolean = false, msg: string = '') {
        setError({ show, msg })
    }
    //error
    useEffect(
        checkRequest,

        []
    )
    return (
        <GithubContext.Provider
            value={{
                githubUser,
                repos,
                followers,
                requests,
                error,
                searchGithubUser,
                isLoading,
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}
const useGlobalContext = () => {
    return useContext(GithubContext)
}
export { GithubContext, GithubProvider, useGlobalContext }
