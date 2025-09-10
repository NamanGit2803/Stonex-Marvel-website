import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main  className={roboto.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
