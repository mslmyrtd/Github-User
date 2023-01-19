export interface IGithubUser {
  public_repos: number
  followers: number
  following: number
  public_gists: number
  avatar_url: string
  html_url: string
  name: string
  company: string
  blog: string
  bio: string
  location: string
  twitter_username: string
}
export interface IFollowers {
  login: string
  avatar_url: string
  html_url: string
}
export interface InputProviderProps {
  children: React.ReactNode
}
export interface GithubContextInterface {
  githubUser: IGithubUser
  repos: Array<object>
  followers: IFollowers[]
  requests: number
  error: { show: boolean; msg: string }
  searchGithubUser: Function
  isLoading: boolean
}
