import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from "./SideDrawer.module.css"

const sideDrawer = (pros) => {
    //... 
    return ( 
    <div className = {classes.SideDrawer} >
        <Logo />
        <nav>
            <NavigationItems />
        </nav> 
    </div>
    )
}

export default sideDrawer;