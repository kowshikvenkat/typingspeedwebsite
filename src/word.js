import React, { Component } from 'react';
import './App.css';
import Celebration from './fireworks.gif';
import {Button, Form,Dropdown}  from 'react-bootstrap';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import busi from './busi4.jpg'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
var randomwords = require('random-words')
export default function Word(){
  const navigating = useNavigate()
    const [globalscore,setscore] = React.useState(0)
let localsavedtime =React.useRef(0);
      const[resetactive,setresetactive] = React.useState(false)
      const[win,setwin]               = React.useState(false)
      const[localhighest,setlocalhighest] = React.useState(0)
    const [cpm,setcpm]              = React.useState(0)
    const[inputvalue,setinputvalue] = React.useState("")
    const[err,seterr]               = React.useState(false)
    const[millisecond,setmillisecond]=React.useState(0)
  const[time,settime]             = React.useState(0)
  const[equal,setequal] = React.useState(false)
  const[disabled,setdisabled] = React.useState(false)
  let emptyinput  =React.useRef(true)
  let correctwordarray= React.useRef([])
    let incorrectwordarray= React.useRef([])
  let worddata = React.useRef(  randomwords({exactly:220,join:' '}))
  let spacepress = React.useRef(false)
   let f = React.useRef(0)
    let wordcount = React.useRef(0)
     let intervalId = React.useRef(null)
  let milliinterval = React.useRef(null)
       const scrolltoref=React.useRef(null)
       const secondScroll = React.useRef(null)
     React.useEffect(()=>{
    localsavedtime.current = sessionStorage.getItem('time')
     axios({
    method: "GET",
    url: "http://localhost:5000/word",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    setscore( res.data.message)
  });
})
  function Word(props){
    const{text,active,correct,incorrect}= props
    if(correct===true){
      return <span className='correct'>{text} </span>
    }
    if(incorrect===true){
      return <span className='incorrect'>{text} </span>
    }
    if(active){
    return <span className='active'>{text} </span> 
    }
    return <span>{text} </span> 
  }  
  
  function textchange(event){
  setinputvalue(event.target.value)
       var singleword =  worddata.current.split(" ")
       var inputword = event.target.value.trim() 
        
   if(spacepress.current===true){
       
       setinputvalue(' ')
       console.log(event.target.value.trim(),'checking',singleword[f.current])
   if(singleword[f.current]===event.target.value.trim()){
  correctwordarray.current =correctwordarray.current.concat(f.current)
   }
    if(singleword[f.current]!==event.target.value.trim()){
      console.log("unmatched")
        incorrectwordarray.current =incorrectwordarray.current.concat(f.current)
          for(let i=0;i<singleword[f.current].length;i++){
        if(singleword[f.current][i]==inputword[i]){
         setcpm(data=>data+1)
        }
       }
    }
      f.current=f.current+1
  }else if(singleword[f.current]===event.target.value.trim()){
          console.log("matched")
   
     wordcount.current = wordcount.current+1;
      for(let i=0;i<singleword[f.current].length;i++){
        if(singleword[f.current][i]==inputword[i]){
         setcpm(data=>data+1)
        }
       }
     }
    if(event.target.value.length===1){
  setresetactive(true)
  
  
     }

   
}
  React.useEffect(()=>{
     if(resetactive===true){
       intervalId.current =setInterval(() => {
      settime((text)=>text+1);
    }, 1000);
    milliinterval.current = setInterval(()=>{
    setmillisecond((text)=>text+10);
   },100)
     }
   
},[resetactive])
React.useEffect(()=>{

if(time==60){
 
  if(millisecond==6000){
  clearInterval(intervalId.current)
    clearInterval(milliinterval.current)
    setdisabled(true)
    
    if(wordcount.current>localsavedtime.current){
 
      setwin(true)
     setTimeout(()=>{
      setwin(false)
    },5000)
       sessionStorage.setItem('time',wordcount.current)
        localsavedtime.current = sessionStorage.getItem('time')
      if(wordcount.current>globalscore){
          Swal.fire(
        {
          icon:'success',
          timer:10000,
          title:'You have set new global record in <i>Typespeed.in</i>',
          text:'Your WPM : '+wordcount.current,
          footer:"<h4><u class='footer'>Check Leaderboard</u></h4>"
        }
      )
        axios.post("http://localhost:5000/word",{
  record:wordcount.current,
   
}).then(res=>console.log("sent to node")).catch((err)=>console.log(err))
      }
      
    else{console.log("react not sent")}
    }
     scrolltoref.current.scrollIntoView({block:'center'})
  }}
})


        function reset(){

     
             clearInterval(intervalId.current)
    clearInterval(milliinterval.current)
          setinputvalue("");setmillisecond(0);settime(0)
      setresetactive(false)
      wordcount.current=0;f.current=0;
      setcpm(0)
      worddata.current  =randomwords({exactly:220,join:' '})
      setwin(false)
      setdisabled(false)
       correctwordarray.current=[]
       incorrectwordarray.current=[]
            secondScroll.current.scrollIntoView({block:'center'})
        }
        const handleSpace=(e)=>{
          if(e.keyCode===32){
            console.log("Spaaaceee")
            spacepress.current=true
          }
          else{
            spacepress.current=false
          }
        }

    return(

        <div className='row d-flex justify-content-around' style={{backgroundColor:'white',overflowX:'hidden'}}>
        
           
 
    <div className="d-flex justify-content-center align-items-center col-lg-9 col-md-12 col-sm-12 " style={{marginTop:50,marginBottom:20}}  >
    
      <div className="d-flex flex-column justify-content-center  align-items-center w-100 ">
   <div style={{ display:'flex',height:"40px",flexDirection:'row',alignItems:'center',margin:4,marginBottom:15}}> {win  && <img style={{height:"30px",width:"30px",marginTop:"-10px"}} src={Celebration} />}  {win ? (<h5 className="shake border border-dark card card-header" style={{display:'flex',flexDirection:'row'}}>Current HighScore:<h5 style={{color:'blueviolet'}}> {localsavedtime.current==null?      0: localsavedtime.current} WPM</h5></h5>):<h5 className='card border border-dark card-header'>Current HighScore: {localsavedtime.current==null? 0:localsavedtime.current} WPM</h5>}  {win  && <img style={{height:"30px",width:"30px",marginTop:"-10px",marginLeft:"10px"}} src={Celebration} />}</div>
         <div style={{display:'flex'}}>
      <div className='timer-p-div py-2 h-100 mx-4' style={{border:'1px solid lime',boxShadow:'0 0 5px grey',borderRadius:5,padding:"10px",width:80,textAlign:'center',fontSize:'26px'}}>{time} <br /> <p className='text-muted' style={{fontSize:"10px",height:0}}>seconds</p></div>
      <div className='py-2 h-100' style={{border:'1px solid lime',boxShadow:'0 0 5px grey',borderRadius:5,padding:"10px",width:80,textAlign:'center',fontSize:'26px'}}>{String(millisecond).slice(-2)}<br /> <p className='text-muted' style={{fontSize:"10px",height:0}}>ms</p></div></div>
    

    {/* <textarea rows={2}  style={{width:"100%",overflowY:'hidden'}} value={worddata.current.split(" ").map((word,index)=>{
      return <Word 
        text={word}
        active={true}
      />
    })} readOnly></textarea>  */}
   <p style={{marginLeft:10}} ref={secondScroll}>{worddata.current.split(" ").map((word,index)=>{
      return <Word 
        text={word}
        active={index===f.current?true:false}
        correct={correctwordarray.current.includes(index)?true:false}
        incorrect={incorrectwordarray.current.includes(index)?true:false}
      />
    })}</p>
        <Form.Control  disabled={disabled}  type="text" placeholder={"Type the above words"} className="border border-warning " style={{margin:10,fontSize:25,width:300,color:err ?'red':'black'}} value={inputvalue} onChange={textchange} onKeyDown={handleSpace} />
        {/* <p className='timer-p bg-dark ' style={{color:'white',margin:5,display:'flex',flexDirection:'row'}}><div className='timer-p-div h-100' style={{padding:"10px"}}>TIMER</div> <div className='timer-p-div py-2 h-100' style={{width:"50px",textAlign:'center'}}>{time} <br /> <p className='text-muted' style={{fontSize:"10px",height:0}}>seconds</p></div><div className='py-2 h-100' style={{padding:"10px",width:'40px',textAlign:'center'}}>{String(millisecond).slice(-2)}<br /> <p className='text-muted' style={{fontSize:"10px",height:0}}>ms</p></div> </p> */}
  
        <Button className='mt-4 mb-5'  onClick={reset}>RESET</Button>

 <div ref={scrolltoref} style={{boxShadow:disabled?"0 0 10px grey":'none',display:'flex',backgroundColor:'white',flexDirection:'row',gap:30,height:100,border:'2px solid gold',borderRadius:5}}>
     <h4 style={{backgroundColor:'#A8A8A8',height:'100%',marginLeft:20,fontFamily:'sans-serif',display:'flex',alignItems:'center',padding:10,fontWeight:'700'}}>Your WPM: {wordcount.current} </h4>
     <h4 style={{backgroundColor:'#A8A8A8',height:'100%',marginRight:20,display:'flex',alignItems:'center',padding:10,fontFamily:'sans-serif',fontWeight:'700'}}>Your CPM: {cpm} </h4>
     </div> 

<h2 className='mt-3'>Global HighScore: {globalscore} WPM</h2>
      </div>
    </div>
    <div className='row col-lg-3 col-md-12 col-sm-12 d-flex justify-content-around' style={{display:'flex',right:0,backgroundColor:'lime',marginTop:5,borderBottomLeftRadius:20,borderTopLeftRadius:20,paddingBottom:20,paddingTop:20,alignItems:'center'}}>

      <a className='col-lg-12 col-md-3 col-sm-3' href="#" onClick={()=>navigating('/')}>
      <ul style={{marginLeft:-10}}>
        <li>Read article</li> <br />
          <li>Here's our fastest CPM!</li> <br />
           <li>Here's our fastest CPM! </li> <br />
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