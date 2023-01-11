import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/collapse.js';
import './App.css';
import ModalPopup from './modal';
import { NavLink,useNavigate } from 'react-router-dom';
export default function Nav(props){
   const navigate = useNavigate()
   let propschange = React.useRef(props.props)
      const[ishovering,setishovering] = React.useState(false)
      const[displaynav,setdisplaynav] = React.useState(false)
      const[changenavcolor,setchangenavcolor] = React.useState(false)
   React.useEffect(()=>{
    let variable = props.props;
console.log(variable,"nav")
   })
   return( <>
   <nav className="navbar navbar-expand-lg navbar-light" style={{zIndex:1,backgroundImage:props.props===true?"linear-gradient(to right, whitesmoke, lime, whitesmoke)":"linear-gradient(to right, white, white)"}}>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      
       <NavLink className="text-decoration-none  col-4 text-center" style={{textAlign:'center'}} to="/login">Sign In</NavLink> <br />
    
        {displaynav==false&& <><NavLink href="#" className="text-decoration-none  col-4  text-center" onClick={()=>setdisplaynav(true)}>Take a test !</NavLink><br /></> } 
      
      {displaynav && <><NavLink onClick={()=>setchangenavcolor(true)} className="text-decoration-none col-1 " to="/AtoZ">AtoZ</NavLink><br /></>} 
        {displaynav && <><NavLink onClick={()=>setchangenavcolor(true)} className="text-decoration-none  col-2 text-center " to="/ZtoA">ZtoA</NavLink> <br /></>
     } 
       {displaynav && <> <NavLink onClick={()=>setchangenavcolor(true)} className="text-decoration-none col-1 text-center" to="/Word">Word</NavLink> <br /></>
     } 
         <a className="text-decoration-none text-center col-4 " href="#" onMouseOver={()=>setishovering(true)}  onMouseLeave={()=>setishovering(false)}><ModalPopup /> 
        {ishovering&& <p class="text-muted" onMouseOver={()=>setishovering(true)} onMouseLeave={()=>setishovering(false)} style={{position:'absolute',fontSize:12,border:'1px solid black',marginRight:10,transitionDuration:5,borderRadius:5,transition:3,padding:2,backgroundColor:'white'}}>Mail me on suggetions and bugs</p>}
         </a> 
    </div>
</nav>
{/* <nav className="navbar navbar-expand-lg px-5 d-flex" style={{height:70}}>
    <h4 style={{}}>TYPESPEED</h4>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div style={{}} class="collapse navbar-collapse" id="navbarSupportedContent">
<div className='navbar-nav mr-auto'>
    <a className="text-decoration-none " href="#" onClick={()=>navigate('/login')}>Sign In</a>
    <a className="text-decoration-none" href="#" onMouseOver={()=>setishovering(true)} onMouseLeave={()=>setishovering(false)}><ModalPopup /> </a>
   {displaynav==false&& <a href="#" className="text-decoration-none" onClick={()=>setdisplaynav(true)}>Take a test !</a>}
     {displaynav && <><NavLink className="text-decoration-none " to="/AtoZ">AtoZ</NavLink><NavLink className="text-decoration-none " to="/ZtoA">ZtoA</NavLink> <NavLink className="text-decoration-none" to="/Word">Word</NavLink></>
     }
     </div>
       
     </div>
    </nav> */}
     
     
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */}
</>
)
}