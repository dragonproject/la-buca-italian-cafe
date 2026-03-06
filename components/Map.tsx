import Image from 'next/image';

const Map = () => {
  return (
    <div className="relative w-full h-full bg-[#f39200]">
      <Image
        src="/images/map.jpg"
        alt="Hand-drawn map to La Buca"
        layout="fill"
        objectFit="cover"
        className="hover:scale-105 transition-transform duration-700 contrast-[1.1] brightness-[1.05]"
      />
    </div>
  )
}

export default Map;