import MenuItem from "./MenuItem";
import { Tag } from "./MenuItem";

const Drinks = () => {
  return (
    <section className="min-h-screen p-5">
      {/* ---------- Speciale Cocktails ---------- */}
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-8 text-3xl font-bold uppercase transition-all hover:pl-8">厳選カクテル (Speciale Cocktails)</h3>
      <MenuItem
        name="グレープフルッティ・マルガリータ"
        description="クエルボ・ゴールドテキーラ、グラガラ、絞りたてルビーグレープフルーツ、ライム"
        price={1100}
        tags={[]}
      />
      <MenuItem
        name="ウイスキーサワー"
        description="メーカーズマーク、レモン、シロップ、アマレーナチェリー"
        price={1100}
        tags={[]}
      />
      <MenuItem
        name="ア・タヴェルシアーモ"
        description="モノポロワ・ウォッカ、サンジェルマン・エルダーフラワー、ライム、シロップ"
        price={1100}
        tags={[]}
      />
      <MenuItem
        name="アメリカーノ"
        description="カンパリ、スイートベルモット、ソーダ、オレンジピール"
        price={1100}
        tags={[]}
      />
      <MenuItem
        name="ダーク＆ストーミー"
        description="ゴズリングス・ダークラム、ライム、ジンジャー、ソーダ"
        price={1100}
        tags={[]}
      />
      <MenuItem
        name="アビエーション"
        description="タンカレー・ジン、クレーム・ド・ヴィオレット、レモン、ルクサルド・マラスキーノ"
        price={1100}
        tags={[]}
      />
      <MenuItem
        name="モダン・ファッションド"
        description="バッファロートレース・バーボン、ラマゾッティ・アマーロ、オレンジピール"
        price={1100}
        tags={[]}
      />
      <MenuItem
        name="サゼラック"
        description="ブレット・ライ、サンブーカ、ペイショーズ・ビターズ、オレンジピール"
        price={1100}
        tags={[]}
      />

      {/* ---------- Vino Bianco ---------- */}
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-8 text-3xl font-bold uppercase transition-all mt-20 hover:pl-8">白ワイン (Vino Bianco)</h3>
      <MenuItem
        name="ヴァンドリ"
        description="ピノ・グリージョ (イタリア)"
        price={[800, 2600]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="ファリーナ"
        description="キアレット・バルドリーノ (イタリア '21)"
        price={[900, 3300]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="サンガーデン"
        description="リースリング (ドイツ '20)"
        price={[900, 3300]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="フランコ・セッラ"
        description="ビアンコ（シャルドネ/コルテーゼ）ピエモンテ (イタリア '21)"
        price={[900, 3300]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="リフ"
        description="ピノ・グリージョ、ヴェネツィエ (イタリア '21)"
        price={[1000, 3700]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="クーパー・マウンテン"
        description="オーガニック・ピノ・グリ、ウィラメットバレー ('21)"
        price={[1100, 4100]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="ラ・ベッラ"
        description="プロセッコ、フリウリ (イタリア)"
        price={[0, 1000]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="モンカルヴィーナ"
        description="モスカート・ダスティ (イタリア '19)"
        price={[0, 3500]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />

      {/* ---------- Vino Rosso ---------- */}
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-8 text-3xl font-bold uppercase transition-all mt-20 hover:pl-8">赤ワイン (Vino Rosso)</h3>
      <MenuItem
        name="ヴァンドリ"
        description="カベルネ・ソーヴィニヨン (イタリア)"
        price={[800, 2600]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="サン・ジョルジョ"
        description="サンジョヴェーゼ・ディ・プーリア (イタリア '20)"
        price={[900, 3300]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="カーサ・ベナサル"
        description="ティント・ガルナッチャ (スペイン '20)"
        price={[900, 3300]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="トラヴィニョーリ"
        description="キャンティ (イタリア '21)"
        price={[1000, 3700]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="バローネ・コルナッキア"
        description="モンテプルチャーノ・ダブルッツォ (イタリア '19)"
        price={[1000, 3700]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="スローバック"
        description="カベルネ・ソーヴィニヨン、コロンビアバレー ('19)"
        price={[1100, 4100]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="ルーセン・クリストファー"
        description="JJ ピノ・ノワール、ウィラメットバレー ('19)"
        price={[1300, 4600]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />
      <MenuItem
        name="ボデガス・オンタニョン"
        description="テンプラニーリョ・ガルナッチャ、リオハ (スペイン '18)"
        price={[0, 3900]}
        sizes={["グラス", "ボトル"]}
        tags={[]}
      />

      {/* ---------- Beer on Tap ---------- */}
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-8 text-3xl font-bold uppercase transition-all mt-20 hover:pl-8">生ビール (Beer on Tap)</h3>
      <MenuItem
        name="アップライト"
        description="エンゲルベルグ・ピルスナー (ポートランド)"
        price={[500, 700]}
        sizes={["グラス", "パイント"]}
        tags={[]}
      />
      <MenuItem
        name="ハマー・アンド・スティッチ"
        description="ザ・ヴァイツェン (ポートランド)"
        price={[500, 700]}
        sizes={["グラス", "パイント"]}
        tags={[]}
      />
      <MenuItem
        name="ダブルマウンテン (IRA)"
        description="フードリバー産アイリッシュ・レッドエール"
        price={[500, 700]}
        sizes={["グラス", "パイント"]}
        tags={[]}
      />

      {/* ---------- Bottled Beer & Cider ---------- */}
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-8 text-3xl font-bold uppercase transition-all mt-20 hover:pl-8">瓶ビール＆シードル</h3>
      <MenuItem
        name="パブスト・ブルーリボン"
        description="アメリカ産定番ラガー"
        price={600}
        tags={[]}
      />
      <MenuItem
        name="ペローニ"
        description="イタリアを代表するラガービール"
        price={700}
        tags={[]}
      />
      <MenuItem
        name="Pfriem IPA"
        description="フードリバー産 IPA (500mL)"
        price={800}
        tags={[]}
      />

      {/* ---------- Non-Alcoholic Beverages ---------- */}
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-8 text-3xl font-bold uppercase transition-all mt-20 hover:pl-8">ノンアルコール飲料</h3>
      <MenuItem
        name="サンペレグリノ"
        description="スパークリング・ミネラルウォーター"
        price={400}
        tags={[]}
      />
      <MenuItem
        name="ファウンテン・ソーダ"
        description="コーラ、サイダーなど各種"
        price={350}
        tags={[]}
      />
      <MenuItem
        name="自家製レモネード"
        description="店内で手作りしているフレッシュなレモネード"
        price={400}
        tags={[]}
      />
      <MenuItem
        name="コーヒー"
        description="挽きたての豆を使用したホットコーヒー"
        price={400}
        tags={[]}
      />
      <MenuItem
        name="アイスティー"
        description="すっきりとした味わいのアイスティー"
        price={400}
        tags={[]}
      />
      <MenuItem
        name="ホットチョコレート"
        description="マシュマロを添えた濃厚なココア"
        price={500}
        tags={[]}
      />
    </section>
  );
};

export default Drinks;