import Map from "@/components/Map";
import Review from "@/components/Review";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import Image from "next/image";
// framer-motion: アニメーションを簡単に実装できるライブラリ
import { motion, AnimatePresence } from "framer-motion";
// Reactの標準Hooks: 状態管理(useState)と副作用実行(useEffect)
import { useState, useEffect } from "react";

const Home = () => {
  // カルーセル（背景画像）のインデックス管理。0から順に画像が切り替わる
  const [index, setIndex] = useState(0);
  const images = [
    "/images/toppageimage01.jpg",
    "/images/toppageimage02.jpg",
    "/images/toppageimage03.jpg",
    "/images/aboutpageimage01.jpg",
    "/images/menupageimage01.jpg",
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
    <article className="overflow-x-hidden selection:bg-primary/30 text-stone-100">
      {/* ヒーローセクション：Webサイトの最上部、最初に目が触れるエリア */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:py-0">
        {/* 背景カルーセル：画像がふわっと切り替わる仕組み */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                layout="fill"
                objectFit="cover"
                priority
                alt="Background"
              />
            </motion.div>
          </AnimatePresence>
          {/* オーバーレイ：画像を以前より明るく調整して視認性を向上 */}
          <div className="absolute inset-0 bg-black/40 z-[1]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-stone-950/80 to-transparent z-[2]" />
        </div>

        {/* センターコンテンツ：ロゴやメインキャッチコピー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-[90%] max-w-md bg-stone-900/20 backdrop-blur-3xl px-10 py-12 md:py-12 flex flex-col justify-center items-center shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-[3rem] z-10 text-center border border-white/10 my-8 md:my-0"
        >
          <span className="handwritten text-primary text-3xl mb-4 italic">Benvenuti</span>
          {/* ロゴ：丸み(rounded)とブレンディング(mix-blend)で洗練された印象に */}
          <div className="relative mb-8 drop-shadow-2xl shadow-2xl overflow-hidden rounded-full w-44 h-44 sm:w-[256px] sm:h-[256px] flex items-center justify-center bg-white">
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <Image src="/images/logo_dynamic.png" alt="La Buca Logo" layout="fill" objectFit="contain" className="scale-110" />
            </motion.div>
          </div>
          <h1 className="mb-6 text-5xl md:text-6xl lowercase italic text-primary font-serif">la buca</h1>
          <p className="text-xl md:text-xl font-light tracking-[0.4em] uppercase text-stone-100 mb-2">
            三田の街角、手作りの温もり。
          </p>
          {/* アクションボタン：ユーザーを特定ページへ誘導 */}
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
            <motion.a
              href="#story"
              whileHover={{ scale: 1.02, backgroundColor: "#d98300" }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-primary text-stone-950 px-8 py-5 rounded-2xl font-bold transition-shadow text-center shadow-lg hover:shadow-primary/40"
            >
              La Bucaのこだわり
            </motion.a>
            <motion.a
              href="#access"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 border-2 border-white/20 hover:border-primary text-stone-100 px-8 py-5 rounded-2xl font-bold transition-all text-center"
            >
              アクセス・営業時間
            </motion.a>
          </div>
        </motion.div>

        {/* スクロールインジケーター：下にコンテンツがあることを伝える補助パーツ */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 flex flex-col items-center gap-2 z-20"
        >
          <span className="handwritten text-primary text-xl">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy Section: お店の想いや歴史を伝えるセクション */}
      <section id="story" className="warm-bg section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 section-gap items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl overflow-hidden z-10 grayscale-[0.2] sepia-[0.1]">
              <Image
                src="/images/aboutpageimage02.jpg"
                fill={true}
                style={{ objectFit: "cover" }}
                alt="Handmade Pasta"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 md:block hidden">
              <span className="handwritten text-primary text-4xl">Since 2002</span>
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
              title={<>手仕事の温もりを、<br />もっと身近に。</>}
              subtitleClassName="mb-1"
              titleClassName="md:text-[3.2rem] lg:text-[3.8rem]"
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
                「La Buca（隠れ家・穴場）」の名に込められたのは、あなたにとっての「いつもの場所」になりたいという願い。
                肩肘を張らずに、お腹いっぱいイタリアンを楽しんでいってください！
              </p>
            </div>
            <div className="mt-12">
              <span className="handwritten text-primary text-5xl">Chef & Staff</span>
            </div>
          </motion.div>
        </div>
      </section>


      <section id="experience" className="bg-stone-900 section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[4fr_6fr] section-gap items-center">
          <div className="space-y-8">
            <SectionHeader
              subtitle="Find Us"
              title={<>三田で愛される<br /><span className="text-primary">街のイタリアン</span></>}
              subtitleClassName="mb-1"
              titleClassName="uppercase"
            />
            <div className="space-y-4 text-lg font-light text-stone-400 leading-relaxed italic border-l-2 border-primary/30 pl-6 mb-8 lg:mb-12">
              <p>三田の喧騒を少し離れた、静かな路地裏。</p>
              <p>オレンジ色の灯りが漏れるそのドアが、私たちの目印です。</p>
              <p>わざわざ足を運んでくださるあなたを、</p>
              <p>焼きたてのパンの香りと、変わらない笑顔でお迎えします。</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
            <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="/images/experience_dining.png"
                fill={true}
                style={{ objectFit: "cover" }}
                alt="Dining Experience at La Buca"
                className="transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8 md:p-12">
                <p className="text-white text-lg md:text-2xl font-serif font-medium leading-relaxed tracking-wider drop-shadow-lg">
                  湯気の向こうに、弾む声。<br />
                  今宵も三田の路地裏で、<br />
                  小さな幸せが重なります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dishes" className="bg-stone-950 section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <SectionHeader
                subtitle="Signature Selection"
                title={<>こだわりの <span className="text-primary">看板料理</span></>}
                subtitleClassName="mb-1"
              />
              <p className="text-xl text-stone-400 font-light mt-6">地元の新鮮な食材と厳選された輸入品を使用し、シェフが心を込めて作り上げる伝統的なイタリア料理の数々をご堪能ください。</p>
            </div>
            <Link href="/menu" className="text-primary border-b border-primary pb-1 hover:text-white hover:border-white transition-all text-lg tracking-widest uppercase mb-4">全メニューを見る</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="group relative h-[600px] rounded-3xl overflow-hidden border border-stone-800">
              <Image src="/dish1.jpg" alt="Signature Dish" layout="fill" objectFit="cover" className="transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-primary text-sm uppercase tracking-widest mb-2 font-bold">自慢のパスタ</p>
                <h3 className="text-3xl text-white m-0 border-none p-0">自家製タリアテッレ</h3>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="group relative h-[600px] rounded-3xl overflow-hidden border border-stone-800 md:mt-12">
              <Image src="/dish2.jpg" alt="Signature Dish" layout="fill" objectFit="cover" className="transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[#f39200] text-sm uppercase tracking-widest mb-2 font-bold">メイン料理</p>
                <h3 className="text-3xl text-white m-0 border-none p-0">ポレンタと豚肉のロースト</h3>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="group relative h-[600px] rounded-3xl overflow-hidden border border-stone-800">
              <Image src="/interior.jpg" alt="Restaurant Interior" layout="fill" objectFit="cover" className="transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[#f39200] text-sm uppercase tracking-widest mb-2 font-bold">空間・おもてなし</p>
                <h3 className="text-3xl text-white m-0 border-none p-0">温かみのある癒しの時間</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#1c1917] section-padding-tight overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeader
            subtitle="Testimonials"
            title="お客様の声"
            align="center"
            titleClassName="italic mb-2"
          />
          <div className="flex flex-col section-gap-tight mt-12 md:mt-24">
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

      <section id="access" className="bg-stone-950 section-padding border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] section-gap items-center">
          <div className="space-y-12">
            <div>
              <SectionHeader
                subtitle="Hours & Location"
                title="営業時間・アクセス"
                subtitleClassName="mb-1"
                titleClassName="md:text-5xl"
              />
              <div className="mt-10 md:mt-16 space-y-4 text-base md:text-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-800 pb-3 gap-2">
                  <span className="font-bold text-stone-200">月曜 - 火曜</span>
                  <div className="flex items-center text-stone-400 gap-3">
                    <span>12:00-15:00</span>
                    <span className="text-stone-600">/</span>
                    <span>18:00-22:00</span>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                  <span className="font-bold text-primary">水曜</span>
                  <span className="text-primary">定休日</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-800 pb-3 gap-2">
                  <span className="font-bold text-stone-200">木曜 - 日曜</span>
                  <div className="flex items-center text-stone-400 gap-3">
                    <span>12:00-15:00</span>
                    <span className="text-stone-600">/</span>
                    <span>18:00-22:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-800/30 p-8 rounded-3xl border border-white/5">
              <p className="text-stone-300 text-xl mb-6">東京都港区三田 1-2-3</p>
              <Link href="https://www.google.com/maps/search/?api=1&query=東京都港区三田1-2-3"
                className="bg-primary text-stone-950 px-10 py-4 rounded-xl font-bold hover:bg-[#d98300] transition-all inline-block shadow-lg">
                Googleマップで開く
              </Link>
            </div>
          </div>

          <div className="h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-stone-800 group relative">
            <Map />
          </div>
        </div>
      </section>
    </article >
  )
}


export default Home;