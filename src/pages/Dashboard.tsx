import React from 'react'
import { Info, User, Repos, Search, Navbar } from '../components'
import { useGlobalContext } from '../context/context'
import loadingImage from '../images/preloader.gif'
const Dashboard = () => {
    const { isLoading } = useGlobalContext()
    if (isLoading) {
        return <main>
            <Navbar />
            <Search />
            <img src={loadingImage} alt="loading" className='loading-img' />
        </main>
    }
    return (
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />
        </main>
    )
}

export default Dashboard
