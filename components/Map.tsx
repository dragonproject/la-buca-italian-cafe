import Image from 'next/image';

const Map = () => {
  return (
    <div className="w-full h-full bg-[#f39200] flex items-center justify-center p-6 relative">
      <Image
        src="/images/map.jpg"
        alt="Hand-drawn map to La Buca"
        layout="fill"
        objectFit="contain"
        className="hover:scale-105 transition-transform duration-700 contrast-[1.1] brightness-[1.05]"
      />
    </div>
  )
}

export default Map;