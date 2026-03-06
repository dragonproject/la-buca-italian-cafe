import MenuItem from "./MenuItem";
import { Tag } from "./MenuItem";

const Kids = () => {
  return (
    <section className="p-5 min-h-[50vh]">
      <h3 className="border-l-4 border-[#f39200] pl-6 mb-4 text-3xl font-bold uppercase transition-all hover:pl-8">お子様メニュー / Kids</h3>
      <p className="italic text-stone-400 mb-8 pl-6 text-sm">※ メイン料理にはりんごのスライスとパンが付きます</p>
      <MenuItem
        name="お子様カイノミステーキ"
        description="バター香るマッシュポテト添え"
        price={1300}
        tags={[]}
      />
      <MenuItem
        name="ローストチキン"
        description="ブロッコリーを添えて"
        price={1200}
        tags={[]}
      />
      <MenuItem
        name="お子様パスタ"
        description="ペンネ（マリナラ、アルフレード、またはバター＆パルメザンから選択）"
        price={900}
        tags={[]}
      />
      <div className="mt-12">
        <h4 className="text-xl font-bold mb-4 opacity-70">追加オプション</h4>
        <MenuItem
          name="チキンの追加"
          description=""
          price={500}
          tags={[]}
        />
        <MenuItem
          name="ブロッコリーの追加"
          description=""
          price={400}
          tags={[]}
        />
        <MenuItem
          name="グリンピースの追加"
          description=""
          price={350}
          tags={[]}
        />
        <MenuItem
          name="マッシュポテトの追加"
          description="バター風味"
          price={500}
          tags={[]}
        />
      </div>
    </section>
  );
};

export default Kids;