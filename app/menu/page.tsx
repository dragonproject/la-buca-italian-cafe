'use client';

// ==========================================
// 1. ライブラリ・コンポーネントのインポート
// ==========================================
import { useState, useMemo } from 'react';
// framer-motion: ページ遷移アニメーションやタブの下線移動（layoutId）に使用
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// 各カテゴリごとのメニュー一覧コンポーネント
import Food from '@/components/Food';
import Desserts from '@/components/Desserts';
import Drinks from '@/components/Drinks';
import Kids from '@/components/Kids';

// ==========================================
// 2. メニューカテゴリの列挙型定義 (Enum)
// ==========================================
// 文字列の直書き（タイポ）によるバグを防ぐため、選べるタブを定数化
enum Page {
  food = 'FOOD', // お料理
  drinks = 'DRINKS', // お飲み物
  kids = 'KIDS', // お子様メニュー
  desserts = 'DESSERTS', // デザート
}

// ==========================================
// 3. メインコンポーネント (Menu)
// ==========================================
const Menu = () => {
  // 現在選択されているメニューカテゴリの状態管理（初期値は「お料理」）
  const [page, setPage] = useState(Page.food);

  // ------------------------------------------
  // ロジック①: カテゴリに応じた背景バナー画像の決定
  // ------------------------------------------
  // useMemo: タブが切り替わった時（pageの変更時）だけ再計算し、パフォーマンスを最適化
  const bannerImage = useMemo(() => {
    switch (page) {
      case Page.food:
        return '/images/menupageimage01.jpg'; // お料理用バナー
      case Page.drinks:
        return '/images/menupageimage07.jpg'; // お飲み物用バナー
      case Page.desserts:
        return '/images/menupageimage04.jpg'; // デザート用バナー
      case Page.kids:
        return '/images/menupageimage03.jpg'; // お子様用バナー
      default:
        return '/images/menupageimage02.jpg';
    }
  }, [page]);

  // ------------------------------------------
  // ロジック②: 選択されたタブに応じたコンポーネントの返却
  // ------------------------------------------
  const getPage = () => {
    switch (page) {
      case Page.kids:
        return <Kids />;
      case Page.drinks:
        return <Drinks />;
      case Page.desserts:
        return <Desserts />;
      default:
        return <Food />;
    }
  };

  // ==========================================
  // 4. JSX レンダリング (UI 構造)
  // ==========================================
  return (
    // ページ全体のフェードインアニメーション
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-stone-950 text-stone-100 min-h-screen"
    >
      {/* 4-1. ヒーローバナーセクション (ヘッダー画像) */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* AnimatePresence: 画像が切り替わる際のフェードイン・アウトを制御 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={bannerImage} // keyが変わることで画像切り替えアニメーションが発火
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={bannerImage}
              layout="fill"
              objectFit="cover"
              alt="Menu Banner"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* 画像上の暗膜オーバーレイ（文字の視認性アップ） */}
        <div className="absolute inset-0 bg-stone-950/40 z-10" />

        {/* タイトルとサブタイトル */}
        <div className="relative z-20 text-center space-y-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-9xl font-serif lowercase italic text-[#f39200]"
          >
            menu
          </motion.h1>
          <p className="text-xl md:text-2xl tracking-[0.3em] font-light uppercase text-stone-300">
            メニュー
          </p>
        </div>
      </section>

      {/* 4-2. スティッキータブナビゲーション (画面上部に固定されるタブ) */}
      <nav className="sticky top-20 bg-stone-900/95 backdrop-blur-xl z-40 border-b border-white/5 shadow-2xl">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-12 p-4 md:p-6">
          {/* タブ一覧データをマップ展開してボタンを生成 */}
          {[
            { id: Page.food, label: 'お料理' },
            { id: Page.drinks, label: 'お飲み物' },
            { id: Page.desserts, label: 'デザート' },
            { id: Page.kids, label: 'お子様メニュー' },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`transition-all duration-300 px-4 py-2 text-sm md:text-lg tracking-widest uppercase font-bold relative group ${
                page === tab.id
                  ? 'text-[#f39200]' // 選択中タブはオレンジ色
                  : 'text-stone-500 hover:text-stone-200' // 非選択タブ
              }`}
              // タブクリック時に選択状態（page）を更新
              onClick={() => setPage(tab.id)}
            >
              {tab.label}

              {/* 選択中タブの下線アニメーション (layoutIdによりタブ間をなめらかに移動) */}
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

      {/* 4-3. メニューコンテンツ表示エリア */}
      <article className="max-w-4xl mx-auto">
        {/* 現在選択されているカテゴリのコンポーネントを動的に描画 */}
        {getPage()}

        {/* ページ下部の共通注意事項・インフォメーション */}
        <div className="p-8 mt-12 mb-16 bg-stone-900/50 rounded-2xl border border-stone-800 text-stone-400 italic text-sm space-y-4">
          <p>※ 5名様以上でご利用の場合は、20%のサービス料を頂戴しております。</p>
          <p>
            ※
            テーブルごとのお支払いは、状況により最大2分割までとさせていただいております。何卒ご了承ください。
          </p>
          <p>
            ※
            テイクアウトのご注文も承っております（別途20%のサービス料を申し受けます）。お気軽にご相談ください。
          </p>
        </div>
      </article>
    </motion.div>
  );
};

export default Menu;