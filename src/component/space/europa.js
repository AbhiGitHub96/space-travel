import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import europa from '../../images/space-image/image-europa.png'
import logo from '../../images/icon/logo.svg'
import hamburger from '../../images/icon/icon-hamburger.svg'
import close from '../../images/icon/icon-close.svg'

export default function Europa(){
    const [openNav, setOpenNav] = React.useState(false)
    const [className, setClassName] = React.useState('')
    const [secoundClass, setSecoudClass] = React.useState('nav2 ')

    function addNav(){
        setOpenNav(true)
        setClassName('small-nav-list')
        setSecoudClass('')
      };
      function removeNav(){
        setOpenNav(false)
        setClassName('')
        setSecoudClass('nav2')
      }
    return(
        <div>
             <div className="nav-conatiner">
          <nav className="nav">
            <img className="logo" src={logo}/>
            {
                openNav ?
                <button onClick={removeNav}><img className="nav-close-btn" src={close}></img></button> : 
                <button onClick={addNav}><img className="nav-open-btn" src={hamburger}></img></button> 
            }
            
            
            <ul className={`nav-list`} >
            <Link className="link" to='/'><li  >00 home</li></Link>
                <Link className="link" to='/desti/moon'><li className="active">01 destination</li></Link>
                <Link className="link" to='/crew/crew1'><li>02 crew</li></Link>
                <Link className="link" to='/tech'><li>03 technology</li></Link>
            </ul>
            <ul className={`${secoundClass}   ${className}`} >
                <Link className="link" to='/'><li >00 home</li></Link>
                <Link className="link" to='/desti/moon'><li>01 destination</li></Link>
                <Link className="link" to='/crew/crew1'><li>02 crew</li></Link>
                <Link className="link" to='/tech'><li>03 technology</li></Link>
            </ul>
          </nav>
        </div>
             <div className="desti-main-container">
      <div className="moon-container">
            <div className="moon-img">
                <h2><span>01 </span>Pick your destination</h2>
                <img className="img" src={europa}></img>
            </div>
            <div className="moon-data">
            <ul className="moon-link">
                <li><Link className="moon-link-text" to="/desti/moon">MOON</Link></li>
                <li><Link className="moon-link-text" to="/desti/mars">MARS</Link></li>
                <li><Link className="moon-link-text active" to="/desti/europa">EUROPA</Link></li>
                <li><Link className="moon-link-text" to="/desti/titan">TITAN</Link></li>
            </ul>
                <h1>Europa</h1>
                <p className="moon-para">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                <div className="distance">
                    <div>
                        <p>Avg. distance</p>
                        <h2>628 mil. km</h2>
                    </div>
                    <div>
                        <p>Est. travel time</p>
                        <h2>3 years</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
       
    )
}