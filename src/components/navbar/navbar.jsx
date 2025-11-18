/*Import dependencies*/
import React from 'react'
import { useState, useEffect } from 'react'

/*import dependencies*/
import { NavLink, useLocation } from "react-router-dom"

/*import styles*/
import './navbar.css'

import { PiListFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };


      useEffect(() => {
        setMenuOpen(false);
      }, [location.pathname]);



    return (

        < div className='navbar'>
            <div className='topBanner'>
                Horario De Atención: 9:00 am - 7:00 pm / Sábados 9:00 - 13:00
            </div>
        </div>

    )
}

export default Navbar