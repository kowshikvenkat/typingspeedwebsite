import logo from './logo.svg';
import './App.css';
import React from 'react'
import AtoZ from './AtoZ';
import ZtoA from './ZtoA';
import Word from './word'
import Verzeo from './verzeo';
import Home from './home';
import Nav from './nav';
import {Routes,Route,Link,NavLink,useLocation} from 'react-router-dom'
import Login from './login';
function App() {
  let location = useLocation()
  const[ser,seter] = React.useState(false)
  React.useEffect(()=>{
     if(location.pathname=="/AtoZ"||location.pathname=="/ZtoA"||location.pathname=="/Word"||location.pathname=="/login"){
     seter(true)
     console.log("changed")
     }
     else if(location.pathname=="/"){
      seter(false)
     }
  })


  return (
    <div style={{backgroundImage:ser==true?'linear-gradient(to right,white,white)':'linear-gradient(to right, whitesmoke, lime, whitesmoke)'}} >
    <Nav  props={ser}/>
    

   <Routes >
   
    <Route exact path="/"   element={<Home />} />
  <Route exact path="/AtoZ" element={<AtoZ />} />
  <Route  exact path="/ZtoA" element={<ZtoA />} />
  <Route exact path="/Word" element={<Word />} />
  <Route exact path="/login" element={<Login />}/>
    </Routes>

      
    </div>
  );
}

export default App;
