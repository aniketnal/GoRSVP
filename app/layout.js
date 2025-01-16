import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer, toast } from "react-toastify";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

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
      <body className="bg-foreground">
        <SessionWrapper>
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{ backgroundColor: "rgb(255, 124, 79)" }}
            outerStyle={{ border: "2px solid rgb(255, 124, 79)" }}
          />
          <Navbar />
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
