import React from 'react'
import { Info, User, Repos } from '../components'
import { useGlobalContext } from '../context/context'
import loadingImage from '../images/preloader.gif'
const Dashboard = () => {

    return (
        <div>
            dashboard
            <Info />
            <User />
            <Repos />
        </div>
    )
}

export default Dashboard
