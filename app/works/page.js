import axios, { base } from '@/axios'
import PageHeader from '../_components/PageHeader';
// import SendEmail from '../_components/SendEmail';





async function getPublished() {
    const id = "66b6151748ee1c92617b2712";
    try {
      const res = await axios.get(`/blogs/${id}/get/templates`, {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
    //   /:id/blogs/get/templates
      const allBlogs = res?.data;
    //   console.log("Inside getPublished - Blogs:", allBlogs?.user?.templates); // Debugging
      return allBlogs?.user?.templates || []; // Return blogs or an empty array
    } catch (err) {
      console.error("Error fetching blogs:", err.message);
      throw new Error("Failed to fetch blogs!!!");
    }
  }
  export const metadata = {
    title:"my email work samples",
    description: "explore the kind of emails i designed and developed for my clients and agencies.",
     openGraph: {
           title:"my email dev. work samples",
           description:"explore the kind of emails i designed and developed for my clients and agencies.",
           url:`${base}/works`,
           images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png'}],
           // images: [{url: `open-graph/?slug=${slug}`}],
           type: "website",
         },
         twitter: {
           card: "summary_large_image",
           site: "@bok_cheza",
           title:"my email dev. work samples",
           description:"explore the kind of emails i designed and developed for my clients and agencies.",
           images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png',width:1200,height:630,alt:`image for memet logo`}],
         },
  };
  
  async function page() {

  let templates = [];
  
    try {
      templates = await getPublished(); // Properly await the templates from the server-side
      // console.log(templates)
    } catch (err) {
      return ;
    }
    return (
        <div className='container relative h-[100v flex-col  w-full font-custom4 flex items-center py-[20vh] '>
          <PageHeader page={"works"} title01={"portfolio"} title02={"explore samples"}/>
        <div className='flex gap-3 flex-wrap items-center justify-center '>
        {/* <div className='relative w-full'>
                  <img className='w-full object-cover' src={thumbnail}/>
                  <p className='w-full text-[11px] p-[10px] absolute top-[0px] bg-[rgba(0,0,0,0.72)] h-full flex items-end'>{topic}</p>
                </div> */}
        {templates.map(({img,name,tempId,newContent},index)=>{
            return <div key={index} className='relative w-[140px] md:w-[200px] h-[400px] overflow-hidden '>
                <div className='w-full h-full overflow-hidden rounded-xl'>
                <img className='object-cover' src={img}/>
                </div>
                  {/* <div className='scale-0 overflow-hidden w-full text-[11px] p-[10px] gap-2 absolute top-[0px] flex flex-col bg-[rgba(91,90,90,0.72)] h-full items-center justify-center'> */}
                 {/* <SendEmail newContent={newContent} /> */}
                {/* <div className='text-[#000000] gap-2 transition-transform duration-800 hover:shadow-md hover:scale-105 w-full h-full absolute top-0 left-0 hover:bg-[rgba(0,0,0,0.73)] flex flex-col justify-center items-center '>
                    <input className='input font-normal w-[86%]'/>
                    <button className='btn font-normal '>send</button>
                    </div> */}
                </div>
        })}
        </div>
    </div>
    )
}

export default page