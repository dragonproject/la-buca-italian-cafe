import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    subtitle: string;
    title: React.ReactNode;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    align?: 'left' | 'center' | 'right';
    dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    subtitle,
    title,
    className = "",
    titleClassName = "",
    subtitleClassName = "",
    align = 'left',
    dark = false
}) => {
    const alignmentClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
    const textColor = dark ? 'text-stone-900' : 'text-stone-100';

    // アニメーションの開始位置をよりダイナミックに
    const initialX = align === 'left' ? -50 : align === 'right' ? 50 : 0;
    const initialY = align === 'center' ? 50 : 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: initialX, y: initialY }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`${alignmentClass} ${className}`}
        >
            <span className={`handwritten text-primary text-2xl mb-4 block ${subtitleClassName}`}>
                {subtitle}
            </span>
            <h2 className={`text-[clamp(2.25rem,5.5vw,4rem)] font-bold tracking-tighter leading-[1.1] ${textColor} ${titleClassName}`}>
                {title}
            </h2>
        </motion.div>
    );
};

export default SectionHeader;
