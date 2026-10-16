import { motion } from "framer-motion";
import MenuItem from "@/components/MenuItem";
import Link from "next/link";
import Image from "next/image";

const Catering = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-stone-950 text-stone-100 min-h-screen"
    >
      {/* Catering Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image src="/images/menupageimage06.jpg" layout="fill" objectFit="cover" alt="Catering Banner" />
        </motion.div>
        <div className="absolute inset-0 bg-stone-950/40 z-10" />
        <div className="relative z-20 text-center space-y-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-9xl font-serif lowercase italic text-[#f39200]"
          >
            catering
          </motion.h1>
          <p className="text-xl md:text-2xl tracking-[0.3em] font-light uppercase text-stone-300">ケータリング</p>
        </div>
      </section>

      <article className="p-8 max-w-4xl mx-auto pt-20">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <p className="text-[#f39200] italic text-xl mb-6 font-medium leading-relaxed">
            ※ 全メニュー12名様分でのご案内となりますが、<br className="hidden md:block" />人数に合わせた調整も可能です。
          </p>
          <div className="w-16 h-px bg-stone-800 mx-auto mb-8" />
          <p className="text-stone-400 font-light text-lg leading-relaxed">
            オフィスでのパーティー、ご自宅での特別な集まり、イベントなど、<br className="hidden md:block" />
            La Bucaの本格イタリアンを大皿スタイルでお届けいたします。<br />
            三田の街で愛される味を、あなたの場所で。
          </p>
        </div>

        <section className="mb-24">
          <h3 className="text-3xl mb-12 border-l-4 border-[#f39200] pl-6 font-bold tracking-tight">前菜 / Starters</h3>
          <div className="space-y-2">
            <MenuItem
              name="旬の自家製ピクルス盛合せ"
              description="季節の野菜を特製のマリネ液で漬け込みました"
              price={6800}
              tags={[]}
            />
            <MenuItem
              name="カルチョーフィ"
              description="アーティチョーク、ドライトマト、ハーブとオリーブオイルのマリネ"
              price={8000}
              tags={[]}
            />
            <MenuItem
              name="ポルペッテ"
              description="スパイシーミートボール、マリナラソース、スモークモッツァレラ、バゲット添え"
              price={12000}
              tags={[]}
            />
            <MenuItem
              name="オリーブのブルスケッタ"
              description="カラマタオリーブの特製タプナードソース"
              price={11000}
              tags={[]}
            />
            <MenuItem
              name="カプレーゼ・ブルスケッタ"
              description="フレッシュトマト、モッツァレラチーズ、バジルのクラシックな味わい"
              price={12000}
              tags={[]}
            />
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-3xl mb-12 border-l-4 border-[#f39200] pl-6 font-bold tracking-tight">サラダ & サイド / Insalate & Sides</h3>
          <div className="space-y-2">
            <MenuItem
              name="ヴェルディ"
              description="ミックスグリーン、オリーブオイルとバルサミコドレッシング"
              price={8000}
              tags={[]}
            />
            <MenuItem
              name="スピナーチ"
              description="ベビースピナッチ、トマト、オリーブ、フェタチーズ、レモンオリーブオイル仕立て"
              price={9800}
              tags={[]}
            />
            <MenuItem
              name="シーザーサラダ"
              description="ロメインレタス、クルトン、伝統的なアンチョビ・ガーリックのアイオリソース"
              price={9800}
              tags={[]}
            />
            <MenuItem
              name="ゴルゴンゾーラサラダ"
              description="ロメインレタス、リンゴ、ローストウォールナッツ、クリーミーなゴルゴンゾーラドレッシング"
              price={9800}
              tags={[]}
            />
            <MenuItem
              name="マッシュポテト"
              description="バジルペーストとオリーブオイルで仕上げた滑らかなポテト"
              price={8000}
              tags={[]}
            />
            <MenuItem
              name="季節野菜のソテー"
              description="ブロッコリーまたは旬の野菜を、ガーリック、レモン、オリーブオイルでソテー"
              price={9000}
              tags={[]}
            />
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-3xl mb-12 border-l-4 border-[#f39200] pl-6 font-bold tracking-tight">パスタ / Pasta</h3>
          <div className="space-y-4">
            <MenuItem
              name="アルフレッド"
              description="ローストガーリックとパルメザンチーズのクリームソース・リングイネ"
              price={16000}
              tags={[]}
            />
            <MenuItem
              name="ポモドーロ・スパゲッティ"
              description="新鮮なバジルとガーリックが香るトマトソース"
              price={12000}
              tags={[]}
            />
            <MenuItem
              name="ペスト・バジリコ"
              description="バジル、松の実、くるみ、ガーリック、パルメザンを贅沢に使ったリングイネ"
              price={16000}
              tags={[]}
            />
            <MenuItem
              name="ボロネーゼ"
              description="牛・豚の挽肉をたっぷり使った自家製の濃厚ラグーソース"
              price={18800}
              tags={[]}
            />
            <MenuItem
              name="プッタネスカ"
              description="トマト、オリーブ、ケッパー、オレガノ、唐辛子を効かせたペンネ"
              price={16000}
              tags={[]}
            />
            <MenuItem
              name="ヴェジタリアーナ"
              description="トマト、ブロッコリー、パプリカ、松の実をガーリックとレモンで仕上げたペンネ"
              price={16000}
              tags={[]}
            />
            <MenuItem
              name="サーモン・ウブリアーコ"
              description="天然のサーモンをウォッカとクリームソースで仕上げたリングイネ、ネギ添え"
              price={18800}
              tags={[]}
            />
            <MenuItem
              name="自家製ラザニア"
              description="ボロネーゼ、リコッタ、ベシャメル、モッツァレラを層にして焼き上げた贅沢な逸品"
              price={18800}
              tags={[]}
            />
            <MenuItem
              name="アル・フォルノ"
              description="マスカルポーネ、モッツァレラ、フォンティーナ、パルメザンの4種のチーズの焼きペンネ"
              price={16000}
              tags={[]}
            />
            <MenuItem
              name="アビトゥアーレ"
              description="スパイシーなイタリアンソーセージ and トマトクリームソースのペンネ"
              price={18800}
              tags={[]}
            />
            <MenuItem
              name="パンチェッタ・エ・フンギ"
              description="パンチェッタ、マッシュルーム、エシャロットをベルモットとクリームで仕上げたペンネ"
              price={18800}
              tags={[]}
            />
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-3xl mb-4 border-l-4 border-[#f39200] pl-6 font-bold tracking-tight">追加トッピング / Additions</h3>
          <p className="italic text-stone-500 mb-12 pl-6 text-sm">※ 全てのメニューに追加可能です（大皿1枚につき計12名様分）</p>
          <div className="md:grid md:grid-cols-2 md:gap-x-12">
            <MenuItem name="ローストチキン胸肉" price={7700} description="" tags={[]} />
            <MenuItem name="スパイシーミートボール" price={8800} description="" tags={[]} />
            <MenuItem name="イタリアンソーセージ" price={7700} description="" tags={[]} />
            <MenuItem name="季節の野菜追加" price={8800} description="" tags={[]} />
            <MenuItem name="海老の追加" price={12800} description="" tags={[]} />
            <MenuItem name="サーモンの追加" price={12800} description="" tags={[]} />
            <MenuItem name="ブロッコリー追加" price={8800} description="" tags={[]} />
            <MenuItem name="グルテンフリー・ペンネに変更" price={8800} description="" tags={[]} />
            <MenuItem name="ニョッキまたはラビオリに変更" price={8800} description="" tags={[]} />
          </div>
        </section>

        <section className="mb-24">
          <h3 className="text-3xl mb-12 border-l-4 border-[#f39200] pl-6 font-bold tracking-tight">メイン料理 / Entree</h3>
          <div className="space-y-4">
            <MenuItem
              name="ポレンタ・コン・マイアーレ"
              description="じっくり焼いた豚肉、キャラメルオニオン、パルメザンポレンタ、セージのキャンティバターソース"
              price={20000}
              tags={[]}
            />
            <MenuItem
              name="ポッロ・マルサラ"
              description="鶏肉のマッシュルーム・マルサラワインソース、マッシュポテト添え"
              price={22000}
              tags={[]}
            />
            <MenuItem
              name="ポッロ・パルミジャーナ"
              description="鶏肉のカツレツ、スモークモッツァレラ、トマトバジルソース、スパゲッティ添え"
              price={22000}
              tags={[]}
            />
            <MenuItem
              name="マッシュルームと季節野菜のリゾット"
              description="アルボリオ米を使用し、キノコと旬の野菜の旨味を凝縮させたリゾット"
              price={20000}
              tags={[]}
            />
            <MenuItem
              name="本日の魚料理"
              description="旬の鮮魚を使用した日替わり料理です。詳しくはお問い合わせください。"
              price={0}
              tags={[]}
            />
          </div>
        </section>

        <section className="flex flex-col gap-8 p-12 bg-stone-900 border border-white/5 rounded-[2rem] text-stone-400 italic text-sm shadow-2xl">
          <p className="flex items-start gap-4"><span className="w-1.5 h-1.5 bg-[#f39200] rounded-full mt-1.5 shrink-0"></span> 全てのご注文に、20%のサービス料を頂戴しております。</p>
          <p className="flex items-start gap-4"><span className="w-1.5 h-1.5 bg-[#f39200] rounded-full mt-1.5 shrink-0"></span> 配達をご希望の場合は、別途20%の配送料を申し受けます。三田近隣の方もお気軽にご相談ください。</p>
          <p className="flex items-start gap-4"><span className="w-1.5 h-1.5 bg-[#f39200] rounded-full mt-1.5 shrink-0"></span> ご注文は、48時間前までにお声がけいただけますと幸いです。心を込めてご用意いたします。</p>
          <p className="flex items-start gap-4"><span className="w-1.5 h-1.5 bg-[#f39200] rounded-full mt-1.5 shrink-0"></span> ご質問やご要望は、<Link className="text-[#f39200] hover:text-[#d98300] font-bold transition-colors" href="/contact">お問い合わせページ</Link> またはお電話にて、いつでもお気軽にどうぞ。</p>
        </section>
      </article>
    </motion.div>
  );
};

export default Catering;