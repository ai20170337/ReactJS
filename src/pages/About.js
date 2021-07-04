import React from 'react'
import BannerImage from "../assets/krofniceback.jpg"
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <div 
            className="aboutTop"
            style={ { backgroundImage:`url(${BannerImage})`  }}
            ></div>
            <div className="aboutBottom">
                <h1> O NAMA </h1>
                 
                <p> Dobro došli. Ovo je Krofnica priča. Ugasite svetlo i  ušuškajte se, jer ulazite u čarobni svet krofni, slatkiša i iznenađenja.</p>

<p> Krofnica je ljubavna priča. U toj priči, princeza se zaljubila u krofne i tako je nastala Krofnica. Dok princeza čeka svog princa, ona vredno radi i otkriva nove ukuse, oblike i dekoracije koje čine Krofnica krofne jedinstvenim. </p>

<p> Krofne koje nastaju iz ljubavi princeze imaju tu moć da spoje krajnosti u savršeno zadovoljstvo, gde tradicionalni recepti naših baka i najkvalitetniji sastojci i prelivi, uz moderno pakovanje i dekoraciju osvajaju na prvi pogled. </p>

<p> Krofne iz Krofnice osvajaju i naše bake, čije smo tradicionalne recepte pretvorili u poslasticu koja sve vraća u detinjstvo. </p>    



              
        </div>
        </div>
    )
}

export default About
