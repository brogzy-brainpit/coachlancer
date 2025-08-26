// /app/sitemap.xml.js

export default  async function sitemap() {

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency:"monthly",
      priority:"1",
    },{
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency:"monthly",
      priority:"0.5",

    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/works`,
      lastModified: new Date(),
      changeFrequency:"weekly",
      priority:"1",
    }, {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency:"weekly",
      priority:"1",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency:"yearly",
      priority:"1",
    },
    ]
}

// Revalidation period of 2 days (48 hours)
// export const revalidate = 60 * 60 * 24;   // Revalidate the page every 24 hours
export const revalidate = 60 * 60 * 4; // Revalidate the page every 6 hours (21600 seconds)
