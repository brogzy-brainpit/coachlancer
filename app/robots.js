export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: 'https://coachlancer.vercel.app/sitemap.xml',
    }
  }