import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import { Route, Routes,} from 'react-router-dom';
import Home from './component/home';
import  Desti from './component/destination'
import Mars from './component/space/mars'
import Europa from './component/space/europa';
import Titan from './component/space/titan';
import Crew from './component/crew';
import Crew2 from './component/crews/crew2'
import Crew3 from './component/crews/crew3'
import Crew4 from './component/crews/crew4'
import Tech from './component/tech'


function App() {

  return (
    <div className="App">
      <React.Fragment>
        {/* <Nav /> */}
        <Routes>
        <Route path='/tech' element={<Tech/>}/>
            <Route path='/crew/crew4' element={<Crew4/>}/>
            <Route path='/crew/crew3' element={<Crew3/>}/>
            <Route path='/crew/crew2' element={<Crew2/>}/>
        <Route path='/crew/crew1' element={<Crew/>}/>
            <Route path='/desti/titan' element={<Titan/>}/>
            <Route path='/desti/europa' element={<Europa/>}/>
            <Route path='/desti/mars' element={<Mars/>}/>
          <Route path='/desti/moon' element={<Desti/>}/>
          <Route  path='/' exact element={<Home/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
