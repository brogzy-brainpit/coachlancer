// "use client"
import React, { useState } from 'react'
import "../globals.css"
import { ContactMail, ContactPhone, Email, Instagram, LocationCity, LocationOn, PhoneAndroid, PhoneInTalk, WhatsApp, X } from '@mui/icons-material'
import PageHeader from '../_components/PageHeader'
// import nodemailer from "nodemailer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { CircularProgress } from '@mui/material'
import axios from '@/axios'
import { contactemail } from './contactEmail.js';

function Contact() {
      const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[message,setMessage]=useState("")
  const [isSending, setIsSending] = useState(false);
  const [sent, setIsSent] = useState(false);
async function sendMail(){
    if(message && email && name){
      setIsSending(true)
      await axios.post("/mail",{
        ht:contactemail(email,name,message),
        subject:"prospect in touch!",
        mailList:"dangabarin2020@gmail.com",
        preview:"Coach memet, someone is trying to get in touch from coachlancer"
      }).then(res=>{
        setIsSending(false)
    toast.success("Email sent successfully,i will reach out to you as soon as possible!",{bodyStyle:{fontFamily:"'Poppins'",textTransform:"capitalize",fontSize:"13px",fontWeight:"600"}})
       })
       .catch(err=>{
          toast.error("something went wrong sending emails to test recipients email, please try again!!! ",{bodyStyle:{fontFamily:"'Poppins','Roboto'",textTransform:"capitalize",fontSize:"13px",fontWeight:"600"}})
      //  console.log(err)
      setIsSending(false)
      setTimeout(()=>{
        setHide(true)
      },3000)
  
  
       })
    }else{
      toast.error("please provide recipients email or subject first!!!",{bodyStyle:{zIndex:"2000 !important",fontFamily:"'Poppins','Roboto''",textTransform:"capitalize",fontSize:"13px",fontWeight:"600"}})
  
    }
  }
  return (
    <div className='hero-sectio' style={{padding:"100px 0px"}}>
        <ToastContainer/>
      <div id='contact' className='container'>
      <PageHeader page={"Contact"} title01={"Contact me"} title02={"get in touch"}/>
      <div className='breaker'>
      <div className='breaker-child'>
        <p className='t-large mb-4 capitalize font-custom ' style={{color:"#ffffff"}}>
          Send me a message💌</p>
        <p className='py-2 font-normal'>
        Feel free to reach out through contact form or find my contact information 
        below. Your feedback, questions, and suggestions are important to
         me as i strive to provide exceptional  email development services to your business.
        </p>
        <div>
        <svg width="0" height="0">
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#0F79A7", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#1DB5D0", stopOpacity: 1 }} />
                </linearGradient>
            </svg>

          
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <PhoneAndroid sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            
            <Link className='font-normal' href="tel:+2349063260237">+2349063260237</Link>
            </div>
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <Email sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            <Link href="mailto:lancingmemet@gmail.com" className='font-normal' >lancingmemet@gmail.com</Link>
            </div>
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <WhatsApp sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            <Link href="https://wa.me/2349063260237" target='_blank' className='font-normal' >Chat on WhatsApp</Link>
            </div>
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <Instagram sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            <Link href="https://www.instagram.com/bokchexa2020/" target='_blank' className='font-normal' >Chat on Instagram</Link>
            </div>
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <X sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            <Link href="https://x.com/bok_cheza" target='_blank' className='font-normal' >Chat on <X style={{fontSize:"18px"}}/></Link>
            </div>
            <div className='py-2 gap-2 flex items-center font-normal'>
            <p  className='rounded-full h-14 w-14 bg-stone-900 flex items-center justify-center mx-1'>
            <LocationOn sx={{color:"#212EA0",fontSize:"30px"}} style={{ fill: "url(#gradient1)"}}/>
            </p>
            <p className='font-normal' >
            26 Buhari Way, Kaduna KD 800211, Nigeria

            </p>
            </div>
        </div>
      </div>
      <div  style={{margin:"auto",marginTop:"2.5rem"}} className='breaker-child form-control bg-[#262626] p-4 justify-center rounded-lg max-w-screen-sm md:w-[90%]'>
        <input className='input my-4 font-normal text-[#000000]' type='email' placeholder='your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input className='input my-4 font-normal text-[#000000]' type='name' placeholder=" your name" value={name} onChange={(e)=>{setName(e.target.value)}}/>

        {/* <div className='flex gap-1 justify-center items-center'>
        <input className='input m-4' type='name' placeholder="what's your name" name='name'/>
        </div> */}
        <textarea  className='textarea my-4 font-normal min-h-[200px] max-h-[400px] text-[#000000]' placeholder='enter your message here' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
           {sent &&(
           <p className='bg-green-500 p-2 font-normal text-[12px] rounded-md'>email sent successfully</p>
           )}
           <button onClick={()=>{sendMail()}} className='btn custom-btn rounded-full my-2 text-stone-100 flex justify-center items-center' style={{width:"auto"}}>{isSending?<><CircularProgress style={{width:'20px',height:'20px'}} className='w-3 h-3'/> please wait...</>:"submit"}</button>    
      </div>

      </div>
      </div>
    </div>
  )
}

export default Contact