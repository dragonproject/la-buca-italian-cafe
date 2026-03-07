import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AvatarProps {
    src: string;
    alt: string;
    size?: 'sm' | 'md' | 'lg' | 'hero';
    className?: string;
    imageClassName?: string;
    imageScale?: number;
    objectFit?: 'cover' | 'contain';
    bgColor?: string;
    shadow?: string;
    borderWidth?: string;
    pulse?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    size = 'md',
    className = '',
    imageClassName = '',
    imageScale = 1,
    objectFit = 'cover',
    bgColor = 'bg-stone-200',
    shadow = 'shadow-lg',
    borderWidth = 'border-4',
    pulse = false
}) => {
    // サイズごとのスタイル定義
    const sizeStyles = {
        sm: 'w-20 h-20',
        md: 'w-28 h-28',
        lg: 'w-36 h-36',
        hero: 'w-36 h-36 md:w-44 md:h-44 sm:w-[256px] sm:h-[256px]'
    };

    const animationProps = pulse ? {
        animate: { scale: [1, 1.03, 1] },
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    } : {};

    return (
        <motion.div
            {...animationProps}
            className={`relative shrink-0 rounded-full overflow-hidden border-white ${borderWidth} ${bgColor} ${shadow} ${sizeStyles[size]} ${className}`}
        >
            <div
                className={`w-full h-full relative ${imageClassName}`}
                style={{ transform: `scale(${imageScale})` }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill={true}
                    style={{ objectFit }}
                />
            </div>
        </motion.div>
    );
};

export default Avatar;
