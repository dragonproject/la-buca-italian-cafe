import MenuItem from "./MenuItem";
import { Tag, symbols } from "./MenuItem";

const Food = () => {
  return (
    <section className="min-h-screen p-5">
      {/* ---------- 前菜 (Primi) ---------- */}
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-8 text-3xl font-bold uppercase transition-all hover:pl-8">前菜 / Primi</h3>
      <MenuItem
        name="季節の自家製ピクルス"
        description="旬のお野菜を自家製ピクルス液で漬け込みました"
        price={700}
        tags={[Tag.gf, Tag.v, Tag.vegan]}
      />
      <MenuItem
        name="地中海産オリーブ"
        description="レモンとガーリック、オリーブオイルの特製マリネ"
        price={800}
        tags={[Tag.gf, Tag.v, Tag.vegan]}
      />
      <MenuItem
        name="アランチーニ"
        description="ボロネーゼとフォンティーナチーズを詰め、マリナラソースを添えたライスコロッケ"
        price={900}
        tags={[]}
      />
      <MenuItem
        name="アーティチョークのカルチョーフィ"
        description="アーティチョーク、ドライトマト、ハーブのオリーブオイル和え"
        price={800}
        tags={[Tag.gf, Tag.v, Tag.vegan]}
      />
      <MenuItem
        name="ポルペッテ"
        description="スパイシーミートボール、マリナラソース、スモークモッツァレラを添えたグリルバゲット"
        price={1200}
        tags={[]}
      />
      <MenuItem
        name="カラマリ"
        description="軽く揚げたイカのフライ、特製ローストペッパーアイオリソース添え"
        price={1500}
        tags={[]}
      />
      <MenuItem
        name="オリーブ・ブルスケッタ"
        description="カラマタオリーブのタプナードソース"
        price={1100}
        tags={[Tag.v, Tag.vegan]}
      />
      <MenuItem
        name="ポモドーロ・ブルスケッタ"
        description="フレッシュトマトとローストガーリック"
        price={1100}
        tags={[Tag.v, Tag.vegan]}
      />
      <MenuItem
        name="カプレーゼ・ブルスケッタ"
        description="トマト、フレッシュモッツァレラ、バジルのハーモニー"
        price={1200}
        tags={[Tag.v]}
      />

      {/* ---------- サラダ・スープ・サイドメニュー ---------- */}
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-8 text-3xl font-bold uppercase transition-all mt-20 hover:pl-8">サラダ & サイド / Insalate & Sides</h3>
      <MenuItem
        name="本日のスープ"
        description=""
        price={[800, 1000]}
        sizes={["カップ", "ボウル"]}
        tags={[]}
      />
      <MenuItem
        name="ヴェルディ・サラダ"
        description="ミックスグリーンとレッドオニオンをオリーブオイル、バルサミコ酢で"
        price={[900, 1300]}
        sizes={["小", "大"]}
        tags={[Tag.gf, Tag.v, Tag.vegan]}
      />
      <MenuItem
        name="スピナーチ・サラダ"
        description="ほうれん草、トマト、オリーブ、フェタチーズ。レモンオリーブオイルとバルサミコ仕上げ"
        price={[1000, 1400]}
        sizes={["小", "大"]}
        tags={[Tag.gf, Tag.v, Tag.vegan]}
      />
      <MenuItem
        name="シーザーサラダ"
        description="ロメインレタスとクルトンに、アンチョビ・ニンニク・レモンの自家製アイオリソース"
        price={[1000, 1400]}
        sizes={["小", "大"]}
        tags={[]}
      />
      <MenuItem
        name="ゴルゴンゾーラ・サラダ"
        description="ロメインレタス、リンゴ、ローストくるみにクリーミーなゴルゴンゾーラドレッシング"
        price={[1000, 1400]}
        sizes={["小", "大"]}
        tags={[Tag.gf, Tag.v]}
      />
      <MenuItem
        name="マッシュポテト"
        description="バジルペーストをトッピング"
        price={800}
        tags={[Tag.gf, Tag.v]}
      />
      <MenuItem
        name="旬の野菜のソテー"
        description="ブロッコリーまたは季節の野菜をオリーブオイル、ガーリック、レモンでソテー"
        price={900}
        tags={[Tag.gf, Tag.v, Tag.vegan]}
      />

      {/* ---------- パスタ (Pasta) ---------- */}
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-8 text-3xl font-bold uppercase transition-all mt-20 hover:pl-8">パスタ / Pasta</h3>
      <MenuItem
        name="アルフレード"
        description="リングイネ：ローストガーリックとパルメザンチーズのクリームソース"
        price={1700}
        tags={[Tag.v]}
      />
      <MenuItem
        name="ポモドーロ"
        description="スパゲッティ：フレッシュバジルとガーリックの風味豊かなトマトソース"
        price={1400}
        tags={[Tag.v, Tag.vegan]}
      />
      <MenuItem
        name="ジェノベーゼ (Pesto Basilica)"
        description="リングイネ：バジル、松の実、くるみ、ニンニク、パルメザンを贅沢に使った逸品"
        price={1800}
        tags={[Tag.v]}
      />
      <MenuItem
        name="ボロネーゼ"
        description="スパゲッティ：牛と豚をじっくり煮込んだコクのあるラグーソース"
        price={1900}
        tags={[]}
      />
      <MenuItem
        name="プッタネスカ"
        description="ペンネ：トマト、オリーブ、ケッパー、アンチョビのアクセントが効いたピリ辛ソース"
        price={1700}
        tags={[]}
      />
      <MenuItem
        name="ベジタリアーナ"
        description="ペンネ：カラフルな野菜と松の実をガーリックとオリーブオイルで"
        price={1800}
        tags={[Tag.v, Tag.vegan]}
      />
      <MenuItem
        name="サーモンのウォッカクリーム"
        description="スパゲッティ：ウォッカとクリームで仕上げた天然サーモン。万能ネギの彩り"
        price={1900}
        tags={[]}
      />
      <MenuItem
        name="ラザニア"
        description="ボロネーゼ、リコッタ、ベシャメル、モッツァレラを重ねた伝統の味"
        price={1800}
        tags={[]}
      />
      <MenuItem
        name="アル・フォルノ"
        description="ペンネのオーブン焼き：4種のチーズとトマトソースの絶妙なハーモニー"
        price={1700}
        tags={[Tag.v]}
      />
      <MenuItem
        name="アビチュアーレ"
        description="ペンネ：ピリ辛のイタリアンソーセージとガーリック・トマトクリームソース"
        price={1800}
        tags={[]}
      />
      <MenuItem
        name="パンチェッタとキノコのパスタ"
        description="ペンネ：パンチェッタ、キノコ、エシャロットのクリーミーな仕立て"
        price={1800}
        tags={[]}
      />

      {/* ---------- メイン料理 (Entrata) ---------- */}
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-8 text-3xl font-bold uppercase transition-all mt-20 hover:pl-8">メイン料理 / Entrata</h3>
      <MenuItem
        name="チキンのマルサラ"
        description="鶏肉のメダリオンソテー、マルサラワインとキノコのソース。マッシュポテト添え"
        price={2000}
        tags={[]}
      />
      <MenuItem
        name="豚肉のポレンタ添え"
        description="じっくりローストしたポーク、パルメザンポレンタ。セージとキャンティのソース"
        price={1900}
        tags={[Tag.gf]}
      />
      <MenuItem
        name="キノコと野菜のリゾット"
        description="キノコ、季節の野菜、パルメザンチーズの贅沢なリゾット"
        price={1900}
        tags={[Tag.v]}
      />
      <MenuItem
        name="バベットステーキ (約230g)"
        description="カイノミのステーキ：マッシュポテト、ローストトマト添え"
        price={2600}
        tags={[Tag.gf]}
      />

      {/* ---------- 追加トッピング (Additions) ---------- */}
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-4 text-3xl font-bold mt-20">追加トッピング / Additions</h3>
      <p className="italic text-stone-400 mb-8 pl-6 text-sm">※ 全てのメニューに追加いただけます</p>
      <div className="md:grid md:grid-cols-2 md:gap-x-24">
        <MenuItem
          name="カイノミステーキの追加 (約230g)"
          description=""
          price={1300}
          tags={[]}
        />
        <MenuItem
          name="ローストチキンの追加"
          description=""
          price={700}
          tags={[]}
        />
        <MenuItem
          name="サーモンの追加"
          description=""
          price={900}
          tags={[]}
        />
        <MenuItem
          name="海老の追加"
          description=""
          price={900}
          tags={[]}
        />
        <MenuItem
          name="イタリアンソーセージの追加"
          description=""
          price={700}
          tags={[]}
        />
        <MenuItem
          name="ミートボールの追加"
          description=""
          price={800}
          tags={[]}
        />
        <MenuItem
          name="プロシュートの追加"
          description=""
          price={400}
          tags={[]}
        />
        <MenuItem
          name="ブロッコリー・季節野菜の追加"
          description=""
          price={600}
          tags={[Tag.gf, Tag.v, Tag.vegan]}
        />
        <MenuItem
          name="フレッシュモッツァレラの追加"
          description=""
          price={400}
          tags={[Tag.gf, Tag.v]}
        />
        <MenuItem
          name="ニョッキ/チーズラビオリに変更"
          description=""
          price={400}
          tags={[Tag.v]}
        />
        <MenuItem
          name="グルテンフリーペンネに変更"
          description=""
          price={400}
          tags={[Tag.gf, Tag.v, Tag.vegan]}
        />
      </div>
      <hr className="my-12 border-stone-800" />
      <div className="mt-6 flex flex-col gap-6 text-sm text-stone-400">
        <p>※ 生または加熱不十分な魚介類、卵、肉類の摂取は、食中毒のリスクを高める可能性があります。</p>
        <div className="flex flex-wrap gap-x-12 gap-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[#f39200]">{symbols["GLUTEN FREE"]}</span>
            <p>グルテンフリー (Gluten Free)</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#f39200]">{symbols.VEGETARIAN}</span>
            <p>ベジタリアン (Vegetarian)</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#f39200]">{symbols.VEGAN}</span>
            <p>ヴィーガン (Vegan)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;