import React from 'react';

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

    return (
        <div className={`${alignmentClass} ${className} transition-all duration-700`}>
            <span className={`handwritten text-primary text-2xl mb-4 block ${subtitleClassName}`}>
                {subtitle}
            </span>
            <h2 className={`text-[clamp(2.25rem,5.5vw,4rem)] font-bold tracking-tighter leading-[1.1] ${textColor} ${titleClassName}`}>
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader;
