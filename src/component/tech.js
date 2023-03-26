import React from "react";
import {Link} from 'react-router-dom'
import Image from '../images/tech-decktop-images/image-launch-vehicle-portrait.jpg'
import logo from '../images/icon/logo.svg'
import hamburger from '../images/icon/icon-hamburger.svg'
import close from '../images/icon/icon-close.svg'
    export default function(){
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
                <Link className="link" to='/tech'><li className="active">03 technology</li></Link>
            </ul>
            <ul className={`${secoundClass}   ${className}`} >
                <Link className="link" to='/'><li >00 home</li></Link>
                <Link className="link" to='/desti/moon'><li>01 destination</li></Link>
                <Link className="link" to='/crew/crew1'><li>02 crew</li></Link>
                <Link className="link" to='/tech'><li>03 technology</li></Link>
            </ul>
          </nav>
               <div className="tech-main-container">
            <h2 className="tech-title"><span>03 </span>SPACE LAUNCH 101</h2>
            <div className="secondary-container">
            <div className="tech-conatiner">
                   <div class="tech-nav">
                           <Link to='/crew/crew1' aria-selected="true"><button className="tech-btn">1</button></Link>
                           <Link to='/crew/crew1' aria-selected="false"><button className="tech-btn">2</button></Link>
                           <Link to='/crew/crew1' aria-selected="false"><button className="tech-btn">3</button></Link>
    
                   </div>
                   <div className="tech-data">
                        <p className="load">The terminology...</p>
                        <h1>Launch vehicle</h1>
                        <p className="subtitle">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                   </div>
              </div>
                   <div>
                     <img src={Image} className='tech-img'></img>
                   </div>
            </div>      
           </div>
            </div>
           
        )
    }