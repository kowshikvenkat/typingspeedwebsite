import React, { Component } from 'react';

function Verzeo(props){
    const[time,setime] = React.useState(0);
    const[active,setactive] = React.useState(0);
    
    let intervalId = React.useRef(null)
    React.useEffect(()=>{
 
    })
    
    function display(event){
      console.log("display")
      event.stopPropagation()
        if(event.target.value.length===1){
 intervalId.current = setInterval(()=>{
    setime((text)=>text+1);
   },1000)
    } 
     
}

 if(time>3){
    // clearInterval(intervalId.current)
    // console.log("yes")
    }

  
   
return(
   
    <>
   <button onClick={display}>Button</button>
   <h2>{time}</h2>
   <input type="text" onInput={display} />
    </>
)
}

export default Verzeo ;