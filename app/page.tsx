'use client';
import Map from '@/components/Map';
import Review from '@/components/Review';
import SectionHeader from '@/components/SectionHeader';
import Avatar from '@/components/Avatar';
import Link from 'next/link';
import Image from 'next/image';
// framer-motion: アニメーションを簡単に実装できるライブラリ
import { motion, AnimatePresence } from 'framer-motion';
// Reactの標準Hooks: 状態管理(useState)と副作用実行(useEffect)
import { useState, useEffect } from 'react';

const Home = () => {
  // カルーセル（背景画像）のインデックス管理。0から順に画像が切り替わる
  const [index, setIndex] = useState(0);
  const images = [
    '/images/toppageimage01.jpg',
    '/images/toppageimage02.jpg',
    '/images/toppageimage03.jpg',
    '/images/aboutpageimage01.jpg',
    '/images/menupageimage01.jpg',
  ];

  // コンポーネントが描画された後に実行される処理
  useEffect(() => {
    // 5秒ごとにカルーセルのインデックスを更新するタイマー
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    // コンポーネントが消える（アンマウント）時にタイマーを解除してメモリ漏れを防ぐ
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <article className="selection:bg-primary/30 overflow-x-hidden text-stone-100">
      {/* ヒーローセクション：Webサイトの最上部、最初に目が触れるエリア */}
      <section
        id="hero"
        className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden px-4 pt-6 pb-28 md:py-12"
      >
        {/* 背景カルーセル：画像がふわっと切り替わる仕組み */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                fill={true}
                style={{ objectFit: 'cover' }}
                priority
                alt="Background"
              />
            </motion.div>
          </AnimatePresence>
          {/* オーバーレイ：画像を以前より明るく調整して視認性を向上 */}
          <div className="absolute inset-0 z-1 bg-black/40" />
          <div className="absolute inset-x-0 bottom-0 z-2 h-48 bg-linear-to-t from-stone-950/80 to-transparent" />
        </div>

        {/* センターコンテンツ：ロゴやメインキャッチコピー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="z-10 my-auto flex w-[90%] max-w-md sm:max-w-xl flex-col items-center justify-center rounded-[3rem] border border-white/10 bg-transparent px-6 py-8 text-center shadow-[0_0_100px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:px-8 md:px-10 md:py-10"
        >
          <span className="handwritten text-primary mb-4 text-2xl italic md:text-3xl">
            Benvenuti
          </span>
          {/* ロゴ：統一されたAvatarコンポーネントを使用 */}
          <Avatar
            src="/images/logo_dynamic.png"
            alt="La Buca Logo"
            size="hero"
            bgColor="bg-white"
            shadow="drop-shadow-2xl shadow-2xl"
            pulse={true}
            objectFit="contain"
            imageScale={1.1}
            className="mb-6 md:mb-8"
            borderWidth="border-none"
          />
          <h1 className="text-primary mb-6 font-serif text-4xl lowercase italic md:text-6xl">
            la buca
          </h1>
          <p className="mb-4 text-base font-light tracking-[0.2em] text-stone-100 uppercase sm:whitespace-nowrap sm:text-lg sm:tracking-[0.3em] md:text-xl md:tracking-[0.35em]">
            三田の街角、手作りの温もり。
          </p>
          {/* アクションボタン：ユーザーを特定ページへ誘導 */}
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-4 md:gap-6">
            <motion.a
              href="#story"
              whileHover={{ scale: 1.02, backgroundColor: '#d98300' }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary hover:shadow-primary/40 flex-1 whitespace-nowrap rounded-2xl px-4 py-4 text-center text-sm font-bold text-stone-950 shadow-lg transition-shadow sm:px-5 sm:text-base md:px-6 md:py-5"
            >
              La Bucaのこだわり
            </motion.a>
            <motion.a
              href="#access"
              whileHover={{
                scale: 1.02,
                backgroundColor: 'rgba(255,255,255,0.1)',
              }}
              whileTap={{ scale: 0.98 }}
              className="hover:border-primary flex-1 whitespace-nowrap rounded-2xl border-2 border-white/20 px-4 py-4 text-center text-sm font-bold text-stone-100 transition-all sm:px-5 sm:text-base md:px-6 md:py-5"
            >
              アクセス・営業時間
            </motion.a>
          </div>
        </motion.div>

        {/* スクロールインジケーター：下にコンテンツがあることを伝える補助パーツ */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pointer-events-none absolute bottom-4 z-20 flex flex-col items-center gap-1.5 md:bottom-6"
        >
          <span className="handwritten text-primary text-base md:text-lg">Scroll</span>
          <div className="from-primary h-8 w-px bg-linear-to-b to-transparent md:h-10" />
        </motion.div>
      </section>

      {/* Philosophy Section: お店の想いや歴史を伝えるセクション */}
      <section id="story" className="warm-bg section-padding">
        <div className="section-gap mx-auto grid max-w-6xl items-center md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary/10 absolute -top-10 -left-10 h-40 w-40 rounded-full blur-3xl" />
            <div className="relative z-10 aspect-4/3 w-full overflow-hidden rounded-[2.5rem] shadow-2xl grayscale-[0.2] sepia-[0.1]">
              <Image
                src="/images/aboutpageimage02.jpg"
                fill={true}
                style={{ objectFit: 'cover' }}
                alt="Handmade Pasta"
              />
            </div>
            <div className="absolute -right-6 -bottom-6 z-20 hidden rounded-2xl bg-white p-6 shadow-xl md:block">
              <span className="handwritten text-primary text-4xl">
                Since 2002
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="warm-text"
          >
            <SectionHeader
              subtitle="Our Philosophy"
              title={
                <>
                  <span className="inline-block whitespace-nowrap">手仕事の温もりを、</span>
                  <br />
                  <span className="inline-block whitespace-nowrap">もっと身近に。</span>
                </>
              }
              subtitleClassName="mb-1"
              titleClassName="text-[clamp(2.1rem,6vw,2.8rem)] md:text-[clamp(2.2rem,3.7vw,3.4rem)] lg:text-[3.8rem] font-bold tracking-tighter leading-[1.15]"
              className="mb-10 md:mb-16"
              dark={true}
            />
            <div className="space-y-6 text-lg leading-relaxed font-light opacity-90">
              <p>
                三田の街角で、毎日通いたくなるような「気軽で元気が出る味」を目指しています。
              </p>
              <p>
                気合を入れて行くレストランではなく、仕事帰りや家族との夕食に、ふらっと立ち寄れる場所。
                そんな庶民的な温もりが、私たちの自慢です。
              </p>
              <p>
                「La
                Buca（隠れ家・穴場）」の名に込められたのは、あなたにとっての「いつもの場所」になりたいという願い。
                肩肘を張らずに、お腹いっぱいイタリアンを楽しんでいってください！
              </p>
            </div>
            <div className="mt-12">
              <span className="handwritten text-primary text-5xl">
                Chef & Staff
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="section-padding bg-stone-900">
        <div className="section-gap mx-auto grid max-w-7xl items-center lg:grid-cols-[4fr_6fr]">
          <div className="space-y-8">
            <SectionHeader
              subtitle="Find Us"
              title={
                <>
                  <span className="inline-block whitespace-nowrap">三田で愛される</span>
                  <br />
                  <span className="inline-block whitespace-nowrap text-primary">街のイタリアン</span>
                </>
              }
              subtitleClassName="mb-1"
              titleClassName="text-[clamp(2.1rem,6vw,2.8rem)] md:text-[clamp(2.4rem,4.5vw,3.4rem)] lg:text-[3.6rem] font-bold tracking-tighter leading-[1.15] uppercase"
            />
            <div className="border-primary/30 mb-8 space-y-4 border-l-2 pl-6 text-lg leading-relaxed font-light text-stone-400 italic lg:mb-12">
              <p>三田の喧騒を少し離れた、静かな路地裏。</p>
              <p>オレンジ色の灯りが漏れるそのドアが、私たちの目印です。</p>
              <p>わざわざ足を運んでくださるあなたを、</p>
              <p>焼きたてのパンの香りと、変わらない笑顔でお迎えします。</p>
            </div>
          </div>
          <div className="group relative">
            <div className="bg-primary/10 group-hover:bg-primary/20 absolute -inset-4 rounded-[3rem] blur-2xl transition-all duration-700" />
            <div className="relative h-150 overflow-hidden rounded-[2.5rem] border border-white/5 shadow-2xl">
              <Image
                src="/images/experience_dining.png"
                fill={true}
                style={{ objectFit: 'cover' }}
                alt="Dining Experience at La Buca"
                className="transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-black/20 to-transparent p-8 md:p-12">
                <p className="font-serif text-lg leading-relaxed font-medium tracking-wider text-white drop-shadow-lg md:text-2xl">
                  湯気の向こうに、弾む声。
                  <br />
                  今宵も三田の路地裏で、
                  <br />
                  小さな幸せが重なります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="dishes"
        className="section-padding overflow-hidden bg-stone-950"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="max-w-2xl text-left">
              <SectionHeader
                subtitle="Signature Selection"
                title={
                  <>
                    こだわりの <span className="text-primary">看板料理</span>
                  </>
                }
                subtitleClassName="mb-1"
              />
              <p className="mt-6 text-xl font-light text-stone-400">
                地元の新鮮な食材と厳選された輸入品を使用し、シェフが心を込めて作り上げる伝統的なイタリア料理の数々をご堪能ください。
              </p>
            </div>
            <Link
              href="/menu"
              className="text-primary border-primary mb-4 border-b pb-1 text-lg tracking-widest uppercase transition-all hover:border-white hover:text-white"
            >
              全メニューを見る
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-150 overflow-hidden rounded-3xl border border-stone-800"
            >
              <Image
                src="/dish1.jpg"
                alt="Signature Dish"
                fill={true}
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute right-8 bottom-8 left-8">
                <p className="text-primary mb-2 text-sm font-bold tracking-widest uppercase">
                  自慢のパスタ
                </p>
                <h3 className="m-0 border-none p-0 text-3xl text-white">
                  自家製タリアテッレ
                </h3>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-150 overflow-hidden rounded-3xl border border-stone-800"
            >
              <Image
                src="/dish2.jpg"
                alt="Signature Dish"
                fill={true}
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute right-8 bottom-8 left-8">
                <p className="text-primary mb-2 text-sm font-bold tracking-widest uppercase">
                  メイン料理
                </p>
                <h3 className="m-0 border-none p-0 text-3xl text-white">
                  ポレンタと豚肉のロースト
                </h3>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-150 overflow-hidden rounded-3xl border border-stone-800"
            >
              <Image
                src="/interior.jpg"
                alt="Restaurant Interior"
                fill={true}
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute right-8 bottom-8 left-8">
                <p className="text-primary mb-2 text-sm font-bold tracking-widest uppercase">
                  空間・おもてなし
                </p>
                <h3 className="m-0 border-none p-0 text-3xl text-white">
                  温かみのある癒しの時間
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="section-padding-tight overflow-hidden border-t border-white/5 bg-[#1c1917]"
      >
        <div className="bg-primary/5 pointer-events-none absolute top-1/2 left-1/2 h-300 w-300 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeader
            subtitle="Testimonials"
            title="お客様の声"
            align="center"
            titleClassName="italic mb-2"
          />
          <div className="section-gap-tight mt-12 flex flex-col md:mt-24">
            <Review
              body="三田の路地裏にある、本当は教えたくない穴場のお店です。仕事終わりにふらっと寄って、自家製パスタとワインで一息つくのが毎週末の楽しみ。気取らないスタッフの方々との会話も心地よく、明日への元気がもらえます。"
              name="佐藤 健一"
              title="近隣にお勤めの会社員"
              left={false}
              avatar="/images/avatar1.png"
            />
            <Review
              body="子供を連れてのランチでいつもお世話になっています。お子様メニューも充実していて、家族みんなで本格的な味が楽しめるのが嬉しいです。この街に、こんなにアットホームなイタリアンがあって良かったです。"
              name="田中 恵美"
              title="主婦"
              left={true}
              avatar="/images/avatar2.png"
              imageScale={1.35}
            />
            <Review
              body="散歩のついでに立ち寄ることが多いのですが、いつ行っても温かく迎えてくれます。丁寧な手仕事が伝わる料理はどれも優しくて、店主の温かい人柄がそのまま味に出ているようです。ずっと通い続けたいお店です。"
              name="鈴木 裕樹"
              title="ご近所の常連さん"
              left={false}
              avatar="/images/avatar3.png"
            />
          </div>
        </div>
      </section>

      <section
        id="access"
        className="section-padding border-t border-white/5 bg-stone-950 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]"
      >
        <div className="section-gap mx-auto grid max-w-7xl items-center lg:grid-cols-[5fr_7fr]">
          <div className="space-y-12">
            <div>
              <SectionHeader
                subtitle="Hours & Location"
                title="営業時間・アクセス"
                subtitleClassName="mb-1"
                titleClassName="md:text-5xl"
              />
              <div className="mt-10 space-y-4 text-base md:mt-16 md:text-xl">
                <div className="flex flex-col items-start justify-between gap-2 border-b border-stone-800 pb-3 sm:flex-row sm:items-center">
                  <span className="font-bold text-stone-200">月曜 - 火曜</span>
                  <div className="flex items-center gap-3 text-stone-400">
                    <span>12:00-15:00</span>
                    <span className="text-stone-600">/</span>
                    <span>18:00-22:00</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span className="text-primary font-bold">水曜</span>
                  <span className="text-primary">定休日</span>
                </div>
                <div className="flex flex-col items-start justify-between gap-2 border-b border-stone-800 pb-3 sm:flex-row sm:items-center">
                  <span className="font-bold text-stone-200">木曜 - 日曜</span>
                  <div className="flex items-center gap-3 text-stone-400">
                    <span>12:00-15:00</span>
                    <span className="text-stone-600">/</span>
                    <span>18:00-22:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/5 bg-stone-800/30 p-8">
              <p className="mb-6 text-xl text-stone-300">
                東京都港区三田 1-2-3
              </p>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=東京都港区三田1-2-3"
                className="bg-primary inline-block rounded-xl px-10 py-4 font-bold text-stone-950 shadow-lg transition-all hover:bg-[#d98300]"
              >
                Googleマップで開く
              </Link>
            </div>
          </div>

          <div className="group relative h-110 sm:h-125 lg:h-140 w-full overflow-hidden rounded-[3rem] border border-stone-800 shadow-2xl">
            <Map />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Home;
