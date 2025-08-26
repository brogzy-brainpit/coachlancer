import localFont from "next/font/local";
import "./globals.css";
import "./fonts.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { base } from "@/axios";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title:{
    default: "coaches web designer portfolio",
    template:"%s - bymemet"
  },
  description: "professional web design and development services for coaches. by the professional designer Memet Oumar aka Bokchexa",
  openGraph: {
        title:"memet's web dev. portfolio",
        description:"professional web design and development services for coaches. by the professional designer Memet Oumar aka Bokchexa",
        url:`${base}/`,
        images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png'}],
        // images: [{url: `open-graph/?slug=${slug}`}],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        site: "@bok_cheza",
        title:"memet's web dev. portfolio",
        description:"professional web design and development services",
        images: [{url:'http://res.cloudinary.com/brainpit/image/upload/v1739285313/olrejjgbkfkyo8buiigu.png',width:1200,height:630,alt:`image for memet logo`}],
      },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inconsolata:wght@200..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
      </link>
      </head>
      <body
        className={`body-noise ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        {children}
    <Footer/>

      </body>
    </html>
  );
}
