import React from 'react'
import BannerImage from "../assets/cute-donuts.jpg"
import '../styles/Contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide"
            style={ { backgroundImage:`url(${BannerImage})`  }}
            ></div>
            <div className="rightSide">
                <h1> Kontaktirajte nas </h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name"> Ime i prezime</label>
                    <input name="name" placeholder="Unesite ime i prezime..." type="text"/>
                    <label htmlFor="email"> Email </label>
                    <input name="email" placeholder="Unesite email adresu..." type="email"/>
                    <label htmlFor="message"> Poruka </label>
                    <textarea
                     rows="6" 
                     placeholder="Unesite poruku..." 
                     name="message" 
                     required> 
                     </textarea>
                     <button type="submit"> Pošalji poruku </button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact
