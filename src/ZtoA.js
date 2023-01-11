import './App.css';
import React, { Component } from 'react';
import axios from "axios"
import Celebration from './fireworks.gif'
import {Button, Form,Dropdown}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import busi from './busi4.jpg'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
 export default function ZtoA(){
  const navigating = useNavigate()
    const [globalscore,setscore] = React.useState(0)
    let localsavedtime =React.useRef(0);
    React.useEffect(()=>{
        localsavedtime.current = sessionStorage.getItem('timeztoa')
     axios({
    method: "GET",
    url: "http://localhost:5000/ztoa",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    setscore( res.data.message)
  });
})
let myreact = React.createRef()
    const[ZtoA,setZtoA]             = React.useState("zyxwvutsrqponmlkjihgfedcba")
    const[resetactive,setresetactive] = React.useState(false)
  const[inputvalue,setinputvalue] = React.useState("")
  const[labelvalue,setlabelvalue] = React.useState("zyxwvutsrqponmlkjihgfedcba")

  const[millisecond,setmillisecond]=React.useState(0)
  const[time,settime]             = React.useState(0)
  const[err,seterr]               = React.useState(false)
  const [cpm,setcpm]              = React.useState(0)
  const[localhighest,setlocalhighest] = React.useState(0)
  const[win,setwin]               = React.useState(false)
 let highscore = React.useRef(0)
 let intervalId = React.useRef(null)
  let milliinterval = React.useRef(null)
  let comparetime=React.useRef(null)
      let correctwordarray= React.useRef([])
    let incorrectwordarray= React.useRef([])
    let i = React.useRef(0)
     function Word(props){
    const{text,active,correct,incorrect}= props
    if(correct===true){
      return <span className='correct'>{text} </span>
    }
    if(incorrect===true){
      return <span className='incorrect'>{text} </span>
    }
    return <span>{text} </span> 
  } 
   function addtodatabase(){
    var settingcpm = ((26/comparetime.current)*60).toFixed(2)
    setcpm(settingcpm)
    console.log("highscore",highscore.current)
    if(highscore.current!==0){
    if(globalscore>highscore.current){
       Swal.fire(
        {
          icon:'success',
          timer:10000,
          title:'You have set new global record in <i>Typespeed.in</i>',
          text:'Your CPM:' + highscore.current,
          footer:"<h4><u class='footer'>Check Leaderboard</u></h4>"
        }
      )
 axios.post("http://localhost:5000/ztoa",{
  record:highscore.current,
   
}).then(res=>console.log("sent to node")).catch((err)=>console.log(err))
    }else{console.log("react not sent")}}
}
 function textchange(event){ //when input onchange occurs this function performs
    event.stopPropagation()
  var  slicing =  event.target.value[i.current]
  console.log(i.current)
if(slicing!==labelvalue[i.current]){
  seterr(true)
incorrectwordarray.current =incorrectwordarray.current.concat(i.current)
 
}else if(slicing===labelvalue[i.current]){
      correctwordarray.current =correctwordarray.current.concat(i.current)
  seterr(false)
}
 i.current =i.current+1
   if(event.target.value===labelvalue||event.target.value.length===26){ 
    clearInterval(intervalId.current)
    clearInterval(milliinterval.current)
    comparetime.current = time+"."+String(millisecond).slice(-2)
    if(comparetime.current<localsavedtime.current||localsavedtime.current===0){
    highscore.current = comparetime.current
    setlocalhighest(highscore.current)
        sessionStorage.setItem('timeztoa',highscore.current)
    localsavedtime.current = sessionStorage.getItem('timeztoa')
    setwin(true)
    setTimeout(()=>{
      setwin(false)
    },5000)
    }
     if(labelvalue==ZtoA){
    addtodatabase()
    }
   }
   
     setinputvalue(event.target.value)
     if(event.target.value.length===1){
      console.log("length==1",resetactive)
  setresetactive(true)
     }
  }
   React.useEffect(()=>{
     if(resetactive===true){
      console.log("false triggered")
       intervalId.current =setInterval(() => {
      settime((text)=>text+1);
    }, 1000);
    milliinterval.current = setInterval(()=>{
    setmillisecond((text)=>text+1);
   },10)
     }
},[resetactive])
        function reset(){
           clearInterval(intervalId.current)
    clearInterval(milliinterval.current)
          setinputvalue("");setmillisecond(0);settime(0)
      setresetactive(false)
      setcpm(0)
      setwin(false)
       correctwordarray.current=[]
       incorrectwordarray.current=[]
   i.current=0
        }
       
    return(
        <div className='row d-flex justify-content-around' style={{backgroundColor:'white',overflowX:'hidden'}} >
 
    <div className="d-flex justify-content-center align-items-center col-lg-9 col-md-12 col-sm-12" style={{height:window.innerHeight}}  >
    
      <div className="d-flex flex-column justify-content-center align-items-center">
   <div style={{display:'flex',height:"40px",flexDirection:'row',alignItems:'center',margin:4,marginBottom:10}}> {win  && <img style={{height:"30px",width:"30px",marginTop:"-10px"}} src={Celebration} />}  {win ? (<h5 className="shake card card-header" style={{display:'flex',flexDirection:'row'}}>Current HighScore:<h5 style={{color:'blueviolet'}}>{localsavedtime.current==null?0:localsavedtime.current} sec</h5></h5>):<h5 className='card card-header'>Current HighScore:{localsavedtime.current==null?0:localsavedtime.current} sec</h5>}  {win  && <img style={{height:"30px",width:"30px",marginTop:"-10px",marginLeft:"10px"}} src={Celebration} />}</div>
     <div className='d-flex'><h4 className='d-flex align-items-center'>Your CPM :</h4><h4 className='d-flex align-items-center mx-2'> {cpm}</h4>
       <div style={{display:'flex'}}>
      <div className='timer-p-div py-2 h-100 mx-4' style={{border:'1px solid lime',boxShadow:'0 0 5px grey',borderRadius:5,padding:"10px",width:80,textAlign:'center',fontSize:'26px'}}>{time} <br /> <p className='text-muted' style={{fontSize:"10px",height:0}}>seconds</p></div>
      <div className='py-2 h-100' style={{border:'1px solid lime',boxShadow:'0 0 5px grey',borderRadius:5,padding:"10px",width:80,textAlign:'center',fontSize:'26px'}}>{String(millisecond).slice(-2)}<br /> <p className='text-muted' style={{fontSize:"10px",height:0}}>ms</p></div></div>
      </div>
        <h2 style={{marginLeft:10}} >{labelvalue.split('').map((word,index)=>{
      return <Word 
        text={word}
        correct={correctwordarray.current.includes(index)?true:false}
        incorrect={incorrectwordarray.current.includes(index)?true:false}
      />
    })}</h2>
      
        <Form.Control placeholder={labelvalue} className="border border-warning " style={{margin:10,fontSize:20,width:300,color:err ?'red':'black'}} onChange={textchange} value={inputvalue}/>
        
        
        <Button  onClick={reset}>RESET</Button>
       


<h2>Global HighScore: {globalscore} sec</h2>
      </div>
    </div>
   <div className='row col-lg-3 col-md-12 col-sm-12 d-flex justify-content-around' style={{display:'flex',right:0,backgroundColor:'lime',marginTop:5,borderBottomLeftRadius:20,borderTopLeftRadius:20,bottom:-20,paddingBottom:20,paddingTop:20,alignItems:'center'}}>
      <a className='col-lg-12 col-md-3 col-sm-3' href="#" onClick={()=>navigating('/')}>
      <ul style={{}}>
        <li>Read article</li> <br />
          <li>Here's our fastest CPM!</li> <br />
           <li>Here's our fastest CPM!</li> <br />
           </ul>
      </a>
      <a className='col-lg-12 col-md-3 col-sm-3 text-center' href="#" onClick={()=>navigating('/')} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <img src={busi} style={{objectFit:'cover',width:150,height:150,borderRadius:20,border:"5px solid white"}} alt="" />
        <p>Fastest typist !</p>
        <p>Brazilian Guilherme Sandrini</p>
      </a>
       <div className='col-lg-12 col-md-3 col-sm-3 text-center' >Join the community</div>
    </div>
    </div>
    )
 }