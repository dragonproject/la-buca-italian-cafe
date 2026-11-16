import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ==========================================
// 1. プロパティの型定義 (Props Interface)
// ==========================================
/**
 * Avatarコンポーネントで受け取るプロパティの型定義
 */
interface AvatarProps {
  src: string; // 表示する画像のパス/URL
  alt: string; // 代替テキスト（アクセシビリティ・SEO用）
  size?: 'sm' | 'md' | 'lg' | 'hero'; // 表示サイズ（事前定義されたプリセット）
  className?: string; // 外枠コンテナ（motion.div）に追加するカスタムクラス
  imageClassName?: string; // 画像を囲む内側コンテナ（div）に追加するカスタムクラス
  imageScale?: number; // 画像自体の拡大・縮小倍率（トリミング位置調整用）
  objectFit?: 'cover' | 'contain'; // 画像の収まり方（カバー or 収まるように配置）
  bgColor?: string; // 画像読み込み前や余白時の背景色
  shadow?: string; // ドロップシャドウのTailwindクラス
  borderWidth?: string; // 枠線の太さのTailwindクラス
  pulse?: boolean; // 呼吸するようなパルス（拡大縮小）アニメーションを有効にするか
}

// ==========================================
// 2. コンポーネント定義とデフォルト引数
// ==========================================
/**
 * 円形のアバター画像を表示する汎用コンポーネント
 * アニメーション（framer-motion）、サイズプリセット、スケール調整に対応
 */
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
  pulse = false,
}) => {
  // ------------------------------------------
  // 3. サイズ別スタイルマッピング (Size Styles)
  // ------------------------------------------
  // 指定されたサイズに応じた Tailwind CSS の幅・高さクラスをマッピング
  const sizeStyles = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28',
    lg: 'w-36 h-36',
    hero: 'w-36 h-36 sm:w-44 sm:h-44 md:w-64 md:h-64',
  };

  // ------------------------------------------
  // 4. アニメーション設定 (Animation Props)
  // ------------------------------------------
  // pulseがtrueの場合のみ、framer-motion用の設定を適用
  // 5秒周期で1倍〜1.03倍に緩やかに拡大縮小を繰り返す
  const animationProps = pulse
    ? {
        animate: { scale: [1, 1.03, 1] },
        transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
      }
    : {};

  // ------------------------------------------
  // 5. JSX レンダリング (UI 構造)
  // ------------------------------------------
  return (
    /* 5-1. 外枠コンテナ (motion.div):
           - アニメーションの適用 (animationProps)
           - 円形トリミング (rounded-full + overflow-hidden)
           - 白ボーダー、背景色、影、サイズ、追加クラスを適用
        */
    <motion.div
      {...animationProps}
      className={`relative shrink-0 overflow-hidden rounded-full border-white ${borderWidth} ${bgColor} ${shadow} ${sizeStyles[size]} ${className}`}
    >
      {/* 5-2. 内側ラッパー (div):
               - 画像の拡大率（imageScale）をtransformで制御
            */}
      <div
        className={`relative h-full w-full ${imageClassName}`}
        style={{ transform: `scale(${imageScale})` }}
      >
        {/* 5-3. Next.js 画像要素 (Image):
                   - fill={true}で親要素いっぱいに広げて表示
                   - objectFitで縦横比の維持・切り抜きを制御
                */}
        <Image src={src} alt={alt} fill={true} style={{ objectFit }} />
      </div>
    </motion.div>
  );
};

export default Avatar;
