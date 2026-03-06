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
            <div className="space-y-4 text-lg">
              {[
                { day: "月曜日", hours: ["12:00-15:00", "18:00-22:00"] },
                { day: "火曜日", hours: ["12:00-15:00", "18:00-22:00"] },
                { day: "水曜日", hours: ["定休日"], isHoliday: true },
                { day: "木曜日", hours: ["12:00-15:00", "18:00-22:00"] },
                { day: "金曜日", hours: ["12:00-15:00", "18:00-22:00"] },
                { day: "土曜日", hours: ["12:00-15:00", "18:00-22:00"] },
                { day: "日曜日", hours: ["12:00-15:00", "18:00-22:00"] },
              ].map((item) => (
                <div key={item.day} className="flex justify-between items-center border-b border-stone-800/50 pb-2 gap-4">
                  <span className={`font-bold ${item.isHoliday ? 'text-[#f39200]' : 'text-stone-200'}`}>{item.day}</span>
                  <div className={`flex flex-col items-end whitespace-nowrap ${item.isHoliday ? 'text-[#f39200]' : 'text-stone-400'}`}>
                    {item.hours.map((h, i) => <span key={i}>{h}</span>)}
                  </div>
                </div>
              ))}
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