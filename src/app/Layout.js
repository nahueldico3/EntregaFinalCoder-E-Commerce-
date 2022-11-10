import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarMio from '../components/NavBarMio'

const Layout = () => {
return (
    <div>
        <NavBarMio />
        <Outlet />
    </div>
)
}

export default Layout