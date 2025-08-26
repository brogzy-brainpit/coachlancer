import { useScroll,motion,useTransform } from 'framer-motion'
import { useRef } from 'react'
import React from 'react'
import Image from 'next/image'
import Word2 from './Word2'
import Rounded from '../common/RoundedButton'
import Link from 'next/link'
import CalModalButton from '@/app/_components/CalModalButton';

function RecentWorks() {
  const textRef=useRef(null)
  const textRef2=useRef(null)
  const textRef3=useRef(null)
  const {scrollYProgress}= useScroll({
    target:textRef,
    offset:["start 0.9",'start 0.25']
  })

  const firstPara="As a coach, your website is often the first impression potential clients get of you. If it looks outdated, confusing, or unclear about what you do, people will click away before they ever book a call. A well-designed website gives you credibility, clearly explains who you help, and makes it easy for clients to take the next step with you.".split(" ")
    const secondPara="But a website alone isn’t enough. Most visitors won’t hire you on their first visit — that’s where email marketing comes in. By staying connected through regular, valuable emails, you build trust, demonstrate your expertise, and gently guide prospects toward becoming paying clients. Together, your website and email marketing work as a simple but powerful system: one attracts the right people, the other nurtures them until they’re ready to invest in your coaching.".split(" ")
    return <div className='container breaker relative flex gap-4 py-10'>
      <div className=' flex items-center justify-center breaker-child py-3'>
        <Image src={"https://emailsyall.com/wp-content/uploads/2020/09/npr_examples.png"} width={400} height={400}/>
      </div>
      <div  className='breaker-child  h-full   py-3'>
        <h1 ref={textRef} className='py-4 text-[16px] text-customColor font-normal flex flex-wrap'  >
      {firstPara.map((word,i)=>{
        var start= i/firstPara.length;
        var end= start+ (1/firstPara.length);
        return <Word2 from={0.9} to={0.25}   ref={textRef} key={i} range={[start,end]} word={word}/>
      })}

        </h1>
        <h1 ref={textRef2} className='py-4 text-[16px] text-customColor font-normal flex flex-wrap' >
{secondPara.map((word,i)=>{
        var start= i/secondPara.length;
        var end= start+ (1/secondPara.length);
        return <Word2 from={0.70} to={0.25}   ref={textRef2} key={i} range={[start,end]} word={word}/>
      })}

</h1>
<Rounded>
      <CalModalButton/>
    </Rounded>
      {/* <button className='btn border p-4 rounded-[30px] capitalize'>my works</button> */}
      </div>

    </div>
  
}

const Word=({word,progress,range})=>{
  const textOpacity= useTransform(progress,range,[0,1])
  return(
<span className='relative text-customColor'>
  <span style={{opacity:0.13}}   className='mr-[10px] absolute' >{word}</span>
  <motion.span style={{opacity:textOpacity}}   className='mr-[10px]' >{word}</motion.span>

</span>
  )
}

export default RecentWorks