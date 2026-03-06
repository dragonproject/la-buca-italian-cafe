import { motion } from "framer-motion";

const Review = (props: { body: string, name: string, left: boolean, title?: string }) => {
  const { body, name, left, title } = props;
  let wrapperStyle: string;

  if (left) {
    wrapperStyle = "self-end rounded-l-2xl md:rounded-2xl";
  } else {
    wrapperStyle = "rounded-r-2xl md:rounded-2xl self-start";
  }

  return (
    <motion.div
      className={`relative ${wrapperStyle} bg-stone-100 shadow-2xl text-stone-900 p-10 w-full md:w-3/4 max-w-2xl mb-12 border-l-8 border-[#f39200]`}
      initial={left ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-6">
        <p className="text-xl leading-relaxed italic text-stone-700">"{body}"</p>
        <div className="mt-4 text-right">
          <p className="font-bold text-2xl text-stone-900">{name}</p>
          {title && <p className="text-sm text-[#f39200] font-bold mt-1 tracking-widest uppercase">{title}</p>}
        </div>
      </div>
    </motion.div>
  )
}

export default Review;