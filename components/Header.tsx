'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  // ページ遷移時にモバイルメニューを自動で閉じる
  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  // モバイルメニュー表示時に背面のスクロールを抑制
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-stone-900/80 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-4 z-50 border-b border-white/5">
      <Link href="/" className="flex items-center gap-3 group" onClick={closeNav}>
        <div className="relative w-14 h-14 rounded-full overflow-hidden group-hover:scale-110 transition-transform">
          <Image src="/images/logo_dynamic.png" alt="Logo" fill className="object-contain" priority />
        </div>
        <span className="text-3xl font-serif lowercase italic text-primary group-hover:text-white transition-colors tracking-tight">
          la buca
        </span>
      </Link>

      {/* ハンバーガーボタン */}
      <button
        type="button"
        onClick={toggleNav}
        aria-expanded={isNavOpen}
        aria-label={isNavOpen ? "メニューを閉じる" : "メニューを開く"}
        className="z-50 border-none bg-transparent hover:scale-110 transition-transform md:hidden text-stone-100 p-2 focus:outline-none"
      >
        <FontAwesomeIcon icon={isNavOpen ? faXmark : faBars} className="text-2xl" />
      </button>

      {/* モバイル用背景オーバーレイ */}
      {isNavOpen && (
        <div
          onClick={closeNav}
          aria-hidden="true"
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
        />
      )}

      {/* ナビゲーションメニュー */}
      <nav
        className={`
          md:flex md:flex-row md:items-center md:gap-8 md:static md:bg-transparent md:p-0 md:shadow-none md:opacity-100 md:scale-y-100 md:pointer-events-auto
          ${isNavOpen
            ? 'flex flex-col items-center gap-6 absolute top-full left-0 right-0 bg-stone-900/95 py-10 shadow-2xl z-40 opacity-100 scale-y-100 pointer-events-auto transition-all duration-300 origin-top border-b border-white/5'
            : 'hidden md:flex'
          }
        `}
      >
        <Link href="/menu" className="nav-link" onClick={closeNav}>
          メニュー
        </Link>
        <Link href="/catering" className="nav-link" onClick={closeNav}>
          ケータリング
        </Link>
        <Link href="/#reviews" className="nav-link" onClick={closeNav}>
          お客様の声
        </Link>
        <Link
          href="/contact"
          className="nav-link text-primary font-bold border border-primary/40 px-6 py-2 rounded-full hover:bg-primary hover:text-stone-950 transition-all"
          onClick={closeNav}
        >
          コンタクト
        </Link>
      </nav>
    </header>
  );
}
