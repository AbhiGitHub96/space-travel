import React from "react";
import crewImage from '../../images/crew-images/image-victor-glover.png'
import { Link } from "react-router-dom";
import logo from '../../images/icon/logo.svg'
import hamburger from '../../images/icon/icon-hamburger.svg'
import close from '../../images/icon/icon-close.svg'

export default function Crew3(){
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
        <div className="nav-conatiner">
             <nav className="nav">
                <img className="logo" src={logo}/>
                {
                    openNav ?
                    <button onClick={removeNav}><img className="nav-close-btn" src={close}></img></button> : 
                    <button onClick={addNav}><img className="nav-open-btn" src={hamburger}></img></button> 
                }
                
                
                <ul className={`nav-list`} >
                    <Link className="link" to='/'><li >00 home</li></Link>
                    <Link className="link" to='/desti/moon'><li>01 destination</li></Link>
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
            <div className="crew-main-container">
          <div className="crew-container">
            <div className="crew-detiles">
                    <h2 className="crew-title"><span>02 </span> Meet your crew</h2>
                    <h1 className="post">Pilot</h1>
                    <h1 className="name">Victor Glover</h1>
                    <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
                    <div class="dot-indicators ">
                           
                            <Link to='/crew/crew1' aria-selected="false"><span class="sr-only">Slide title</span></Link>
                            <Link to='/crew/crew2' aria-selected="false"><span class="sr-only">Slide title</span></Link>
                            <Link to='/crew/crew3' aria-selected="true"><span class="sr-only">Slide title</span></Link>
                            <Link to='/crew/crew4' aria-selected="false"><span class="sr-only">Slide title</span></Link>
                    </div>
                </div>
                <div className="crew-img">
                    <img className="crew-img" src={crewImage}></img>
                </div>
          </div>
       </div>
        </div>
       
    )
}