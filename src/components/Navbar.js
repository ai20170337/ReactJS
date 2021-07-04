import React, { useState } from 'react'
import Logo from '../assets/trikrofne2.png'
import { Link } from "react-router-dom"
import ReorderIcon from '@material-ui/icons/Reorder';
import '../styles/Navbar.css'
import { react } from '@babel/types'
import { Reorder } from '@material-ui/icons';

export default function Navbar() {

    const [openLinks, setOpenLinks]=useState(false)
    const toggleNavbar=() => {
        setOpenLinks(!openLinks)

    }

    return (
        <div className="navbar">

        <div className="leftSide" id={openLinks ? "open":"close"}>
            <img src={Logo} />
            <div className="hiddenLinks">
            <Link to="/"> Početna </Link>
            <Link to="/menu"> Meni </Link>
            <Link to="/about"> O nama </Link>
            <Link to="/contact"> Kontakt </Link> 

            </div>

        </div>
        <div className="rightSide">
            <Link to="/"> Početna </Link>
            <Link to="/menu"> Meni </Link>
            <Link to="/about"> O nama </Link>
            <Link to="/contact"> Kontakt </Link> 

            <button onClick={toggleNavbar}>

            <ReorderIcon />

            </button>
           

        </div>


        </div>
    )
}
