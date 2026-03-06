import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Food from "@/components/Food";
import Desserts from "@/components/Desserts";
import Drinks from "@/components/Drinks";
import Kids from "@/components/Kids";

enum Page {
  food = "FOOD",
  drinks = "DRINKS",
  kids = "KIDS",
  desserts = "DESSERTS"
}

const Menu = () => {
  const [page, setPage] = useState(Page.food);

  const bannerImage = useMemo(() => {
    switch (page) {
      case Page.food: return "/images/menupageimage01.jpg";
      case Page.drinks: return "/images/menupageimage07.jpg";
      case Page.desserts: return "/images/menupageimage04.jpg";
      case Page.kids: return "/images/menupageimage03.jpg";
      default: return "/images/menupageimage02.jpg";
    }
  }, [page]);

  const getPage = () => {
    switch (page) {
      case Page.kids:
        return <Kids />
      case Page.drinks:
        return <Drinks />
      case Page.desserts:
        return <Desserts />
      default:
        return <Food />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-stone-950 text-stone-100 min-h-screen"
    >
      {/* Menu Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={bannerImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img src={bannerImage} className="w-full h-full object-cover" alt="Menu Banner" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-stone-950/40 z-10" />
        <div className="relative z-20 text-center space-y-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-9xl font-serif lowercase italic text-[#f39200]"
          >
            menu
          </motion.h1>
          <p className="text-xl md:text-2xl tracking-[0.3em] font-light uppercase text-stone-300">メニュー</p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="sticky top-20 bg-stone-900/95 backdrop-blur-xl z-40 border-b border-white/5 shadow-2xl">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4 md:gap-12 p-6 overflow-x-auto no-scrollbar">
          {[
            { id: Page.food, label: "お料理" },
            { id: Page.drinks, label: "お飲み物" },
            { id: Page.desserts, label: "デザート" },
            { id: Page.kids, label: "お子様メニュー" }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`whitespace-nowrap transition-all duration-300 px-4 py-2 text-sm md:text-lg tracking-widest uppercase font-bold relative group ${page === tab.id ? "text-[#f39200]" : "text-stone-500 hover:text-stone-200"
                }`}
              onClick={() => setPage(tab.id)}
            >
              {tab.label}
              {page === tab.id && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#f39200] rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      <article className="max-w-4xl mx-auto">
        {getPage()}
        <div className="p-8 mt-12 mb-16 bg-stone-900/50 rounded-2xl border border-stone-800 text-stone-400 italic text-sm space-y-4">
          <p>※ 5名様以上でご利用の場合は、20%のサービス料を頂戴しております。</p>
          <p>※ テーブルごとのお支払いは、状況により最大2分割までとさせていただいております。何卒ご了承ください。</p>
          <p>※ テイクアウトのご注文も承っております（別途20%のサービス料を申し受けます）。お気軽にご相談ください。</p>
        </div>
      </article>
    </motion.div>
  )
}

export default Menu;