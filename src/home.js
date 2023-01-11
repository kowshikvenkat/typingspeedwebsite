import React, { Component } from 'react';
import busi1 from './busi.jpg'
import busi2 from './busi2.jpg'
import busi3 from './busi3.jpg'
import busi4 from './busi4.jpg'
import photoinfo from './photoinfos.jpg'
import logo from './logo.jpg'
import './App.css'
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer,CDBBox } from 'cdbreact';
import styled from 'styled-components';
export default function Home(){
    return(
        <div className='app-div' style={{overflowX:'hidden'}}>
         <div style={{margin:0,padding:0,height:window.innerHeight+1000,backgroundColor:'white',position:'absolute',left:'30%',width:500,zIndex:0,top:0}}>dkw</div>
         <div className='row d-flex justify-content-around ' >
        
         <div className='col-lg-5 col-md-5 col-sm-12  col-md-6 d-flex flex-column'>
           
            <div className='col d-flex justify-content-center align-items-center'>
               <img src={logo} width={50} style={{borderRadius:"50%"}} height={50} alt="" />
               <h1 className='mx-4 typespeed'>Typespeed Test</h1>
            </div>
            <div>
                <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis exercitationem itaque totam illum, magni, nisi dolorem fugiat nemo asperiores tempora rerum distinctio, eos fuga accusantium. Sint adipisci temporibus minima!</i></p>
            </div>
         </div>
        <div className=' col-lg-5 col-md-5 col-sm-12 col-md-6 d-flex text-center justify-content-center '>
           <div className="photo-info d-flex justify-content-center">
             <img className='align-self-center' src={photoinfo} width={250} height={250} alt="" />
           </div>
        </div>
        </div>
           <div style={{overflowX:'hidden'}}>
          
            <div className='row d-flex justify-content-around my-5'>
                <div className=' shadow rounded col-lg-5 col-md-5 col-sm-12 mx-3 col-md-6 card p-0' >
                    <img src={busi1} className='card-img-top' style={{height:200,objectFit:'cover'}}  alt="" />
                    <div className='card-body p-4 d-flex flex-column'>
                        <h5 className='card-title'>Benefits of speed typing</h5>
                        <p className='card-text'>Everyone is looking for ways to be more productive both in the workplace and at home, and typing faster is a simple way to get more done.</p>
                        <a href="#" className='btn btn-primary align-self-end'>Read more</a>
                    </div>
                </div>
                <div className='shadow rounded col-lg-5 col-md-5 col-sm-12 mx-3 col-md-6 card p-0' >
                    <img src={busi2} className='card-image-top' style={{height:200,objectFit:'cover'}}  alt="" />
                    <div className='card-body p-4'>
                        <h5 className='card-title'>Benefits of speed typing</h5>
                        <p className='card-text'>Finally, because touch-typing is such a useful skill that boosts productivity in the workplace, it can help you to find more and better opportunities when it comes to getting a job.</p>
                        <a href="#" className='btn btn-primary'>Read more</a>
                    </div>
                </div>
            </div>

             <div className='row d-flex justify-content-around my-5'>
                <div className='shadow rounded col-lg-5  col-sm-12 mx-3 col-md-6 card p-0' >
                    <img src={busi3} className='card-img-top' style={{height:200,objectFit:'cover'}}  alt="" />
                    <div className='card-body p-4 d-flex flex-column'>
                        <h5 className='card-title'>Learn to type faster</h5>
                        <p className='card-text'>The great thing about typing is that it is not difficult to learn, and anyone can learn with a bit of dedication and practice. So start learning today</p>
                        <a href="#"  className='btn btn-success align-self-end mt-4'>Explore</a>
                    </div>
                </div>
                <div className='shadow rounded col-lg-5 col-sm-12 mx-3 col-md-6 card p-0' >
                    <img src={busi4} className='card-image-top' style={{height:200,objectFit:'cover'}}  alt="" />
                    <div className='card-body p-4'>
                        <h5 className='card-title'>Fastest typist today !</h5>
                        <p className='card-text'>On one online typing platform, Brazilian Guilherme Sandrini reached a whopping typing speed of 241.82 wpm.Sean Wrona set another record at the Ultimate Typing Championship with a speed of 256 wpm.</p>
                        <a href="#" className='btn btn-success '>Register</a>
                    </div>
                </div>
            </div>
        </div>
   

    <CDBFooter className="shadow" style={{backgroundColor:'white'}}>
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="30px" />
              <span className="ml-3 h5 font-weight-bold mx-2">Typespeed</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              We are creating High Quality Resources and tools to Aid developers during the
              developement of their projects
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Devwares
            </p>
            <CDBBox   flex="column" display="flex" style={{ cursor: 'pointer', padding: '0', }}>
              <CDBFooterLink href="/">Resources</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Windframe</CDBFooterLink>
              <CDBFooterLink href="/">Loop</CDBFooterLink>
              <CDBFooterLink href="/">Contrast</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <small className="text-center" style={{ width: '50%' }}>
            &copy; Typespeed, 2022. All rights reserved.
          </small>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  

        </div>
    )
}