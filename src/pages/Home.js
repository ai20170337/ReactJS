import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from "../assets/krofneplave.jpg"
import '../styles/Home.css'

function Home() {
    return (
        <div className="home" style={ { backgroundImage:`url(${BannerImage})`  }}>
            <div className="headerContainer" >
                <h1>KROFNICA</h1>
                <p>TVOJ ČAROBNI ZALOGAJ</p>
                <Link to="/menu">
                <button> NARUČI SADA </button>
                </Link>
            </div>
            
        </div>
    ) 
}

export default Home  
