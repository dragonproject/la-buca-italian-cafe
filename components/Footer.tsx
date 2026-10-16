import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-500 py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link href="/" className="text-4xl font-serif lowercase italic text-primary">
            la buca
          </Link>
          <p className="text-sm font-light tracking-wide max-w-xs text-center md:text-left leading-relaxed text-stone-400">
            三田の街角で、手作りの味を気軽に。<br />
            毎日でも通いたくなる、アットホームなイタリアン。
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="flex gap-10 text-3xl">
            <Link href="#" className="hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-5 text-lg">
          <Link href="/menu" className="hover:text-white transition-colors">メニュー</Link>
          <Link href="/contact" className="hover:text-white transition-colors">店舗情報</Link>
          <Link href="/catering" className="hover:text-white transition-colors">ケータリング</Link>
          <Link href="/#reviews" className="hover:text-white transition-colors">お客様の声</Link>
        </div>
      </div>
      <div className="mt-20 pt-12 border-t border-white/5 text-center text-[10px] font-medium tracking-[0.3em] uppercase text-stone-700">
        &copy; {new Date().getFullYear()} La Buca Italian Cafe. お越しを心よりお待ちしております。
      </div>
    </footer>
  );
}
