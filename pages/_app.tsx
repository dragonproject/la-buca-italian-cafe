import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { LoadScript } from '@react-google-maps/api';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [listener, setListener] = useState(false);

  const toggleNav = () => {
    const nav = document.getElementById("nav");
    const body = document.querySelector("body");
    if (nav && body) {
      if (!listener) {
        setListener(true);
        nav.classList.remove("scale-y-0", "opacity-0");
        nav.classList.add("scale-y-100", "opacity-100");

        setTimeout(() => {
          body.addEventListener("click", () => {
            nav.classList.add("scale-y-0", "opacity-0")
            nav.classList.remove("scale-y-100", "opacity-100")
            setListener(false);
          }, { once: true })
        }, 10)
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#f39200]/30 selection:text-white bg-stone-950 font-sans">
      <Head>
        <title>La Buca | 三田の街角で味わう手作りイタリアン</title>
        <meta name="description" content="港区三田の隠れ家イタリアンLa Buca（ラ・ブカ）。シェフの温もり伝わる手打ちパスタと、ご近所さんのような親しみやすいおもてなしで、至福のひとときをご提供します。" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="grain-overlay" />
      <header className='fixed top-0 left-0 right-0 bg-stone-900/80 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-4 z-50 border-b border-white/5'>
        <Link href="/" className='flex items-center gap-3 group'>
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full mix-blend-lighten group-hover:scale-110 transition-transform" />
          <span className='text-3xl font-serif lowercase italic text-[#f39200] group-hover:text-white transition-colors tracking-tight'>la buca</span>
        </Link>

        <button type="button" onClick={toggleNav} className="z-10 border-none bg-transparent hover:scale-110 transition-all md:hidden text-stone-100">
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>

        <nav id="nav" className='opacity-0 scale-y-0 absolute flex flex-col items-center top-full left-0 right-0 bg-stone-900/95 py-10 transition-all duration-300 origin-top shadow-2xl md:static md:opacity-100 md:scale-y-100 md:flex-row md:gap-12 md:py-0 md:bg-transparent md:shadow-none'>
          <Link href="/menu" className="nav-link">メニュー</Link>
          <Link href="/catering" className="nav-link">ケータリング</Link>
          <Link href="/contact" className="nav-link text-[#f39200] font-bold border border-[#f39200]/30 px-6 py-2 rounded-full hover:bg-[#f39200] hover:text-stone-950 transition-all">ご予約・店舗案内</Link>
        </nav>
      </header>

      <main className="flex-grow pt-20">
        <LoadScript googleMapsApiKey={"AIzaSyABGsCfvz2E6KsmLkqzewSdJJ6feKoozmk"}>
          <Component {...pageProps} />
        </LoadScript>
      </main>

      <footer className='bg-stone-950 text-stone-500 py-24 px-6 border-t border-white/5'>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className='text-4xl font-serif lowercase italic text-[#f39200]'>la buca</Link>
            <p className="text-sm font-light tracking-wide max-w-xs text-center md:text-left leading-relaxed text-stone-400">
              三田の街角で、手作りの味を気軽に。<br />毎日でも通いたくなる、アットホームなイタリアン。
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="flex gap-10 text-3xl">
              <Link href="#" className="hover:text-[#f39200] transition-colors"><FontAwesomeIcon icon={faFacebook} /></Link>
              <Link href="#" className="hover:text-[#f39200] transition-colors"><FontAwesomeIcon icon={faTwitter} /></Link>
              <Link href="#" className="hover:text-[#f39200] transition-colors"><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-5 text-lg">
            <Link href="/menu" className="hover:text-white transition-colors">メニュー</Link>
            <Link href="/contact" className="hover:text-white transition-colors">店舗情報</Link>
            <Link href="/catering" className="hover:text-white transition-colors">ケータリング</Link>
          </div>
        </div>
        <div className="mt-20 pt-12 border-t border-white/5 text-center text-[10px] font-medium tracking-[0.3em] uppercase text-stone-700">
          &copy; {new Date().getFullYear()} La Buca Italian Cafe. お越しを心よりお待ちしております。
        </div>
      </footer>
    </div>
  )
}

