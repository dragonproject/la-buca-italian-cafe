import { motion } from "framer-motion";
import Image from "next/image";

const Review = (props: { body: string, name: string, left: boolean, avatar: string, title?: string }) => {
  const { body, name, left, title, avatar } = props;
  let wrapperStyle: string;

  if (left) {
    wrapperStyle = "self-end rounded-l-2xl md:rounded-2xl";
  } else {
    wrapperStyle = "rounded-r-2xl md:rounded-2xl self-start";
  }

  return (
    <motion.div
      className={`relative ${wrapperStyle} bg-stone-100 shadow-2xl text-stone-900 p-6 md:p-12 w-full md:w-3/4 max-w-2xl border-l-8 border-[#f39200]`}
      initial={left ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-left">
        <div className="relative w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg bg-stone-200">
          <Image src={avatar} alt={name} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl leading-relaxed italic text-stone-700">&quot;{body}&quot;</p>
          <div className="mt-2">
            <p className="font-bold text-2xl text-stone-900">{name}<span className="text-lg font-light ml-1">さん</span></p>
            {title && <p className="text-sm text-[#f39200] font-bold mt-1 tracking-widest uppercase">{title}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Review;