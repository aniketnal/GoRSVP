import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  
})

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
  title: "GoRSVP - Event Manager",
  description: "Manage your events like a PRO !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-foreground'>
        <SessionWrapper>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </SessionWrapper>
      </body>
    </html>
  );
}
