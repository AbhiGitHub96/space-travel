import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/icon/logo.svg'
import hamburger from '../images/icon/icon-hamburger.svg'
import close from '../images/icon/icon-close.svg'

export default function Nav(){
    const [openNav, setOpenNav] = React.useState(true)
    const [className, setClassName] = React.useState('')

    function navigation(){
        setOpenNav(!openNav) 
        setClassName("");  
        addNav()   
    }
    function addNav(){
        if(openNav){
            setClassName("");     
        }
        else{  
            setClassName("open-nav");   
        }  
      };

    return(
        <div className="nav-conatiner">
          <nav className="nav">
            <img className="logo" src={logo}/>
            <ul className={`nav-list  ${className}`} >
                <Link className="link" to='/'><li >00 home</li></Link>
                <Link className="link" to='/desti/moon'><li>01 destination</li></Link>
                <Link className="link" to='/crew/crew1'><li>02 crew</li></Link>
                <Link className="link" to='/tech'><li>03 technology</li></Link>
            </ul>
        
            <img onClick={navigation} className="hamburger" src={openNav ? hamburger : close}/>
          </nav>
        </div>
    )
}