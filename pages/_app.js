import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // Optional: use as a CSS variable
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main  className={montserrat.variable}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
