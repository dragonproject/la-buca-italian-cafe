import Map from "@/components/Map";
import Link from "next/link";

const Contact = () => {
  return (
    <article className="p-8 min-h-[75vh] max-w-6xl mx-auto pt-24">
      <div className="text-center mb-20">
        <h1 className="text-6xl mb-6 font-bold">お問い合わせ</h1>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-xl text-slate-400 font-light">
          <p>お電話: <Link className="text-[#f39200] hover:text-[#d98300] transition-colors font-medium" href="tel:0312345678">03-1234-5678</Link></p>
          <p>メール: <Link className="text-[#f39200] hover:text-[#d98300] transition-colors font-medium" href="mailto:info@labuca.jp">info@labuca.jp</Link></p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl mb-8 font-bold border-l-4 border-[#f39200] pl-6">営業時間</h2>
            <div className="grid grid-cols-2 gap-y-4 text-lg">
              <p className="font-bold text-stone-200">月曜日</p><p className="text-stone-400">17:00 - 21:00</p>
              <p className="font-bold text-stone-200">火曜日</p><p className="text-stone-400">17:00 - 21:00</p>
              <p className="font-bold text-[#f39200]">水曜日</p><p className="text-[#f39200]">定休日</p>
              <p className="font-bold text-stone-200">木曜日</p><p className="text-stone-400">17:00 - 21:00</p>
              <p className="font-bold text-stone-200">金曜日</p><p className="text-stone-400">17:00 - 22:00</p>
              <p className="font-bold text-stone-200">土曜日</p><p className="text-stone-400">17:00 - 21:30</p>
              <p className="font-bold text-stone-200">日曜日</p><p className="text-stone-400">17:00 - 21:00</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl mb-6 font-bold border-l-4 border-[#f39200] pl-6">所在地</h2>
            <p className="text-xl text-stone-400 mb-6">東京都港区三田 1-2-3</p>
            <Link className="inline-block bg-[#f39200] hover:bg-[#d98300] text-stone-950 px-10 py-4 rounded-xl font-bold transition-all shadow-lg" href="https://www.google.com/maps/search/?api=1&query=東京都港区三田1-2-3">ルート案内を表示</Link>
          </div>
        </div>
        <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#f39200]">
          <Map />
        </div>
      </div>
    </article>

  )
}

export default Contact;