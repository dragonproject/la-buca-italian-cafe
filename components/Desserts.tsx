import MenuItem from "./MenuItem";
import { Tag } from "./MenuItem";

const Desserts = () => {
  return (
    <section className="p-5 min-h-[50vh]">
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-8 text-3xl font-bold uppercase transition-all hover:pl-8">自家製デザート</h3>
      <MenuItem
        name="ティラミス"
        description="エスプレッソが香る、本場仕込みの贅沢な味わい"
        price={900}
        tags={[]}
      />
      <MenuItem
        name="レモン・チーズケーキ"
        description="マスカルポーネを使用した、ベリーソース添えの爽やかなチーズケーキ"
        price={900}
        tags={[]}
      />
      <MenuItem
        name="温かいブレッドプディング"
        description="リンゴ、レーズン、シナモンを練り込み、特製ウイスキークリームを添えて"
        price={800}
        tags={[]}
      />
      <MenuItem
        name="小麦粉不使用のショコラトルテ"
        description="濃厚なチョコレートの風味を堪能できる逸品"
        price={900}
        tags={[]}
      />
      <MenuItem
        name="ダブルファッジ・チョコレートケーキ"
        description="ダークチョコレートガナッシュを使った、重厚で贅沢なケーキ"
        price={1000}
        tags={[]}
      />
      <MenuItem
        name="キャロットケーキ"
        description="自家製バタークリームのアイシングと一緒に"
        price={900}
        tags={[]}
      />
      <MenuItem
        name="本日のジェラート"
        description="フレーバーについてはスタッフまでお尋ねください"
        price={600}
        tags={[]}
      />
    </section>
  );
};

export default Desserts;