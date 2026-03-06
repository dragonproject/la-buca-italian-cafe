import Map from "@/components/Map";
import Review from "@/components/Review";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/toppageimage01.jpg",
    "/images/toppageimage02.jpg",
    "/images/toppageimage03.jpg",
    "/images/aboutpageimage01.jpg",
    "/images/menupageimage01.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <article className="overflow-x-hidden selection:bg-[#f39200]/30 text-stone-100">
      <section className="min-h-screen relative flex justify-center items-center px-4 overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.5, scale: 1 }}
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
          {/* Overlay to darken and add depth */}
          <div className="absolute inset-0 bg-stone-950/60 z-[1]" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-stone-950 to-transparent z-[2]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full max-w-2xl bg-stone-900/70 backdrop-blur-3xl px-10 py-20 flex flex-col justify-center items-center shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-[3rem] z-10 text-center border border-white/10"
        >
          <span className="handwritten text-[#f39200] text-3xl mb-4 italic">Benvenuti</span>
          <div className="relative mb-10 mix-blend-lighten drop-shadow-2xl shadow-2xl overflow-hidden rounded-[10px] bg-black">
            <Image src="/logo.jpg" alt="La Buca Logo" width={256} height={141} />
          </div>
          <h1 className="mb-6 text-5xl md:text-8xl lowercase italic text-[#f39200] font-serif">la buca</h1>
          <p className="text-xl md:text-2xl font-light tracking-[0.4em] uppercase text-stone-100 mb-2">
            三田の街角、手作りの温もり。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
            <motion.a
              href="#story"
              whileHover={{ scale: 1.02, backgroundColor: "#d98300" }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-[#f39200] text-stone-950 px-8 py-5 rounded-2xl font-bold transition-shadow text-center shadow-lg hover:shadow-[#f39200]/40"
            >
              La Bucaのこだわり
            </motion.a>
            <motion.a
              href="#access"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 border-2 border-white/20 hover:border-[#f39200] text-stone-100 px-8 py-5 rounded-2xl font-bold transition-all text-center"
            >
              アクセス・営業時間
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 flex flex-col items-center gap-2 z-20"
        >
          <span className="handwritten text-[#f39200] text-xl">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#f39200] to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy Section - Warmth Addition */}
      <section id="story" className="warm-bg py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#f39200]/10 rounded-full blur-3xl" />
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl overflow-hidden relative z-10 grayscale-[0.2] sepia-[0.1]">
              <Image
                src="/images/aboutpageimage02.jpg"
                layout="fill"
                objectFit="cover"
                alt="Handmade Pasta"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 md:block hidden">
              <span className="handwritten text-[#f39200] text-4xl">Since 2002</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="warm-text"
          >
            <span className="handwritten text-[#f39200] text-2xl mb-4 block">Our Philosophy</span>
            <h2 className="text-5xl mb-8 leading-tight font-bold">手仕事の温もりを、<br />もっと身近に。</h2>
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
              <span className="handwritten text-[#f39200] text-5xl">Chef & Staff</span>
            </div>
          </motion.div>
        </div>
      </section>


      <section id="access" className="bg-stone-900 py-32 relative z-10 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[4fr_6fr] gap-24 items-center">
          <div className="space-y-8">
            <span className="handwritten text-[#f39200] text-2xl block">Find Us</span>
            <h2 className="text-5xl !leading-[1.3] tracking-widest uppercase mb-12">
              三田で愛される<br /><span className="text-[#f39200]">街のイタリアン</span>
            </h2>
            <div className="space-y-4 text-lg font-light text-stone-400 leading-relaxed italic border-l-2 border-[#f39200]/30 pl-6 mb-12">
              <p>三田の喧騒を少し離れた、静かな路地裏。</p>
              <p>オレンジ色の灯りが漏れるそのドアが、私たちの目印です。</p>
              <p>わざわざ足を運んでくださるあなたを、</p>
              <p>焼きたてのパンの香りと、変わらない笑顔でお迎えします。</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-lg border-t border-stone-800 pt-12">
              <div className="space-y-4">
                <p className="flex justify-between border-b border-stone-800/50 pb-2"><span className="font-semibold text-stone-200">月曜 - 火曜</span> <span className="text-stone-400">17:00 - 21:00</span></p>
                <p className="flex justify-between border-b border-stone-800/50 pb-2"><span className="font-semibold text-[#f39200]">水曜</span> <span className="text-[#f39200]">定休日</span></p>
                <p className="flex justify-between border-b border-stone-800/50 pb-2"><span className="font-semibold text-stone-200">木曜</span> <span className="text-stone-400">17:00 - 21:00</span></p>
              </div>
              <div className="space-y-4">
                <p className="flex justify-between border-b border-stone-800/50 pb-2"><span className="font-semibold text-stone-200">金曜</span> <span className="text-stone-400">17:00 - 22:00</span></p>
                <p className="flex justify-between border-b border-stone-800/50 pb-2"><span className="font-semibold text-stone-200">土曜</span> <span className="text-stone-400">17:00 - 21:30</span></p>
                <p className="flex justify-between border-b border-stone-800/50 pb-2"><span className="font-semibold text-stone-200">日曜</span> <span className="text-stone-400">17:00 - 21:00</span></p>
              </div>
            </div>
            <div className="pt-8 text-center lg:text-left">
              <Link href="https://www.google.com/maps/search/?api=1&query=東京都港区三田1-2-3" className="text-xl text-[#f39200] hover:text-[#d98300] transition-colors inline-flex items-center gap-2">
                東京都港区三田 1-2-3
                <span className="text-sm">→ アクセス</span>
              </Link>
            </div>
          </div>
          <div className="h-[500px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-stone-800 group bg-[#f39200] relative">
            <Map />
          </div>
        </div>
      </section>

      <section id="dishes" className="bg-stone-950 py-32 relative z-10 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="handwritten text-[#f39200] text-2xl mb-4 block">Signature Selection</span>
              <h2 className="text-5xl mb-6">こだわりの <span className="text-[#f39200]">看板料理</span></h2>
              <p className="text-xl text-stone-400 font-light">地元の新鮮な食材と厳選された輸入品を使用し、シェフが心を込めて作り上げる伝統的なイタリア料理の数々をご堪能ください。</p>
            </div>
            <Link href="/menu" className="text-[#f39200] border-b border-[#f39200] pb-1 hover:text-white hover:border-white transition-all text-lg tracking-widest uppercase">全メニューを見る</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="group relative h-[600px] rounded-3xl overflow-hidden border border-stone-800">
              <Image src="/dish1.jpg" alt="Signature Dish" layout="fill" objectFit="cover" className="transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[#f39200] text-sm uppercase tracking-widest mb-2 font-bold">自慢のパスタ</p>
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

      <section className="bg-gradient-to-b from-stone-950 via-stone-900 to-black relative py-32 z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#f39200]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="handwritten text-[#f39200] text-2xl mb-4 block">Testimonials</span>
          <h2 className="text-5xl mb-24 italic">お客様の声</h2>
          <div className="flex flex-col gap-16">
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
    </article >
  )
}


export default Home;