import React, { useRef } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import emailjs from '@emailjs/browser';
import  CloseButton  from "react-bootstrap/CloseButton";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Modal from 'react-bootstrap/Modal'
import { Spinner } from "react-bootstrap";
export default function ModalPopup(){

    const [open,setopen] = React.useState(false)
    const[loader,setloader] = React.useState(false)
    let form = React.useRef()
  function sendemail(e){
    setloader(true)
     e.preventDefault();

    emailjs.sendForm('service_whyp4lj', 'template_9hrrijl',e.target, 'hcsWT9t1HwZVn40PM')
      .then((result) => {
        setloader(false)
          toast.success('Success! Message sent',{autoClose:3000,className:'toast-message'})
           e.target.reset()
      }, (error) => {
          setloader(false)
          toast.warn('Message will be sent soon! This may take a while',{
            autoClose:false,
            position:toast.POSITION.BOTTOM_CENTER,
            className:'toast-message'
          })
          e.target.reset()
      });
     
  }

  return(
    <React.Fragment>
   
       <a onClick={()=>setopen(true)}>
  Message Me
       </a>

<Modal  show={open} onHide={()=>setopen(false)} backdrop="static" size="md" centered >
<Modal.Header closeButton>
<Modal.Title>Mail Me</Modal.Title>

</Modal.Header>
<Modal.Body>

      
        <form ref={form} onSubmit={sendemail} style={{display:"flex",justifyContent:'center',width:"100%",flexDirection:'column',alignItems:'flex-start'}} action="">
       
            <label htmlFor="">Subject : &nbsp;</label><input name="subject" type="text" minLength={10} className="w-100"  required />
            <label htmlFor="">Description :</label><textarea className="w-100" width={200} minLength={20} name="message" id="" cols="30" rows="10" required></textarea>
           
       
            {loader? (<Spinner style={{alignSelf:'flex-end',marginTop:10}} animation="border" variant="danger" />) :      <input className="m-1 btn btn-primary" style={{alignSelf:'flex-end',marginTop:10}} type="submit" value="send"/>}
        </form>
       </Modal.Body>
  </Modal>


 
    <ToastContainer />
       
    </React.Fragment>
    
  )
}