import SlideUpText from '@/effects/SlideUpText'
import { useScroll,motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

function Services() {
    const textRef=useRef(null)
    const textRef2=useRef(null)
    const {scrollYProgress}= useScroll({
      target:textRef,
      offset:["start end",'start 0.25']
    })
    const {scrollYProgress:ss}= useScroll({
      target:textRef2,
      offset:["start end",'start 0.25']
    })
    const secondPara= "How i can Help?".split(" ")
    const secondPara2= "About / Intro".split(" ")

  return (
<div id='about' className=' container flex flex-col gap-[5vh] py-[150px]'>
{/* <h1 className='py-4 text-[22px] text-customColor font-normal ' >
{secondPara.map((word,i)=>{
        var start= i/secondPara.length;
        var end= start+ (1/secondPara.length);
        return <Word key={i} range={[start,end]} word={word} progress={scrollYProgress}/>
      })}

</h1> */}
<h1 ref={textRef2} once={true}  className=" t-large mb-4 font-custom gap-3 flex flex-wrap" gap='10px'>
{secondPara2.map((word,i)=>{
    var start= i/secondPara2.length;
    var end= start+ (1/secondPara2.length);
    return <Word key={i} range={[start,end]} word={word} progress={ss}/>
  })}
</h1>
<div className='flex grid-cols-12 gap-x-4 md:grid pb-10'>


<div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs sm:flex-row md:col-start-6'>
{/* <div className='flex gap-[30px]'> */}
    {/* <SlideUpText duration={0.1} delay={0.1} className="leading-[1] inline-flex overflow-hidden text-[20px] text-stone-500 font-normal" text={"()"}/> */}
   <SlideUpText duration={0.1} delay={0.1} className="leading-[1 ] inline-flex overflow-hidden text-[22px] text-customColor font-normal" text={"Hi, I’m Memet Oumar. I work with coaches who are great at what they do but feel stuck when it comes to building an online presence that actually brings in clients."}/>
</div>
</div>
<h1 ref={textRef} once={true}  className="t-large mb-4 font-custom gap-3 flex flex-wrap" gap='10px'>
    {secondPara.map((word,i)=>{
        var start= i/secondPara.length;
        var end= start+ (1/secondPara.length);
        return <Word key={i} range={[start,end]} word={word} progress={scrollYProgress}/>
      })}
    </h1>
<div className='flex grid-cols-12 gap-x-4 md:grid'>


    <div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs sm:flex-row md:col-start-6'>
    {/* <div className='flex gap-[30px]'> */}
        <SlideUpText duration={0.1} delay={0.1} className="leading-[1] inline-flex overflow-hidden text-[20px] text-stone-500 font-normal" text={"(Services)"}/>
        <SlideUpText duration={0.02} delay={0.03} className="leading-[1] inline-flex overflow-hidden text-[22px] text-customColor font-normal" text={"I help coaches build a professional online presence by designing clear, client-focused websites and setting up strategic email marketing systems that not only showcase their expertise but also nurture relationships, generate trust, and consistently bring in new clients."}/>
    </div>
</div>

<Service/>
</div>
  )
}

const Word=({word,progress,range})=>{
    const textOpacity= useTransform(progress,range,[0,1])
    return(
  <span className='relative text-customColor'>
    <span style={{opacity:0.09}}   className='mr-[10px] absolute' >{word}</span>
    <motion.span style={{opacity:textOpacity}}   className='mr-[10px]' >{word}</motion.span>
  
  </span>
    )
  }
const Service=()=>{
    return <div className='h-[330vh] relative'>
        <div className='noise h-[100vh] sticky top-[15%] border-t py-3 border-stone-500'>
        <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='md:text-[40px] text-[30px] font-custom capitalize '>01</h1>
    <h1 className='md:text-[40px] text-[30px]  font-custom= capitalize font-custom dm-mono-regula'>Web Design & Dev.</h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/3OTKoEZctLHsU75qKdenDH/a241fd9d6e8c8f0622811fe2bed44b87/Shape.svg"/>
   </div>
        <div className='flex grid-cols-12 gap-x-4 md:grid'>

    <div className='w-full gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs  md:col-start-6'>
   <p className='font-light font-body w-full md:w-[75%] text-[14px]'>A modern, simple website built around your coaching services — so clients know exactly who you help and how.</p>
      <div className='w-ful'>
      <div className='flex gap-6 border-b py-3 border-stone-500 items-center '>
            <h1 className='text-[22px] text-stone-500 font-normal'>01</h1>
            <h1 className='text-[22px] font-custo font-normal'>Responsive Designs</h1>
        </div>
        <div className='flex gap-6 border-b py-3 border-stone-500 items-center '>
            <h1 className='text-[22px] text-stone-500 font-normal'>02</h1>
            <h1 className='text-[22px] font-custo font-normal'>CMS Integration.</h1>
        </div>
        <div className='flex gap-6 border-b py-3 border-stone-500 items-center '>
            <h1 className='text-[22px] text-stone-500 font-normal'>03</h1>
            <h1 className='text-[22px] font-normal'>Motion & Animations </h1>
        </div>
        <div className='flex gap-6 border-b py-3 border-stone-500 items-center '>
            <h1 className='text-[22px] text-stone-500 font-normal'>04</h1>
            <h1 className='text-[22px] font-normal'>3D Development</h1>
        </div>
      </div>
    </div>
</div>

</div>
<div className=' noise h-[100vh] sticky top-[27%] border-t py-3 border-stone-500'>
            <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='md:text-[40px] text-[30px] font-custom capitalize '>02</h1>
    <h1 className='md:text-[40px] text-[30px]  font-custom capitalize'>Email Marketing</h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/4tOmYgqGG5ImynJhHuG6k6/bfdee331cc56aa0f1ab40a4c83510a28/L9.svg"/>
   </div>
        <div className='flex grid-cols-12 gap-x-4 md:grid'>

    <div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs  md:col-start-6'>
   
         <p className='font-light font-body w-full md:w-[75%] text-[14px]'> Stay top of mind with your audience. I help you set up and design email campaigns that turn curious visitors into long-term clients</p>

      <div>
      <div className='flex gap-6 border-b py-3 border-stone-500  items-center '>
            <h1 className='text-[22px] text-stone-500 font-normal'>01</h1>
            <h1 className='text-[22px] font-normal capitalize'>email Design</h1>
        </div>
        <div className='flex gap-6 border-b py-3 border-stone-500 items-center '>
            <h1 className='text-[22px] text-stone-500 font-normal'>02</h1>
            <h1 className='text-[22px] font-normal capitalize'>Automations Setup</h1>
        </div>
        <div className='flex gap-6 border-b py-3 border-stone-500 items-center '>
            <h1 className='text-[22px] text-stone-500 font-normal'>03</h1>
            <h1 className='text-[22px] font-normal capitalize'>campaign management</h1>
        </div>
      </div>
    </div>
</div>

</div>
<div className=' noise h-[100vh] sticky top-[38%] border-t py-3 border-stone-500'>
            <div className='flex items-center md:justify-between justify-start pb-[30px] gap-4'>
    <h1 className='md:text-[40px] text-[30px] font-custom capitalize '>03</h1>
    <h1 className='md:text-[40px] text-[30px]  font-custom uppercase'>SEO</h1>
    <img style={{width:"20px",height:"20px"}} className='md:block hidden opacity-30'   src="https://images.ctfassets.net/fwy0yv14lkat/4tOmYgqGG5ImynJhHuG6k6/bfdee331cc56aa0f1ab40a4c83510a28/L9.svg"/>
   </div>
        <div className='flex grid-cols-12 gap-x-4 md:grid'>

    <div className='gap-[10px] md:gap-[30px] col-span-8 flex flex-col gap-x-space-xl gap-y-space-2xs  md:col-start-6'>
   
         <p className='font-light font-body w-full md:w-[75%] text-[14px]'>
          Your website deserves to be seen. I optimize your online presence to elevate your visibility in search results, helping your business attract the right audience and stand out in the digital landscape.
           </p>

      <div>
      <div className='flex gap-6 border-b py-3 border-stone-500  items-center '>
            <h1 className='text-[22px] text-stone-500 font-normal'>01</h1>
            <h1 className='text-[22px] font-normal capitalize'>Technical SEO</h1>
        </div>
        <div className='flex gap-6 border-b py-3 border-stone-500 items-center '>
            <h1 className='text-[22px] text-stone-500 font-normal'>02</h1>
            <h1 className='text-[22px] font-normal capitalize'>On-Page Optimization</h1>
        </div>
        <div className='flex gap-6 border-b py-3 border-stone-500 items-center '>
            <h1 className='text-[22px] text-stone-500 font-normal'>03</h1>
            <h1 className='text-[22px] font-normal capitalize'>SEO Audits & Analysis</h1>
        </div>
      </div>
    </div>
</div>

</div>


    </div>
}
export default Services



