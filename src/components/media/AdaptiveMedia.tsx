import React, { useState } from 'react';
import { GalleryItem } from '../../types/content';

interface AdaptiveMediaProps {
  type: GalleryItem['type'];
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  loading?: 'eager' | 'lazy';
}

export const AdaptiveMedia = ({
  type,
  src,
  alt,
  className,
  wrapperClassName,
  autoPlay,
  muted,
  loop,
  playsInline,
  loading = 'lazy',
}: AdaptiveMediaProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative w-full h-full ${wrapperClassName || ''}`}>
      {!failed && type === 'video' ? (
        <video
          src={src}
          className={className}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          onLoadedData={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : null}

      {!failed && type === 'image' ? (
        <img
          src={src}
          alt={alt}
          className={className}
          loading={loading}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : null}

      {!loaded && !failed && (
        <div className="absolute inset-0 bg-zinc-200/60 animate-pulse" aria-hidden />
      )}

      {failed && (
        <div className="absolute inset-0 bg-zinc-100 grid place-items-center text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
          Media unavailable
        </div>
      )}
    </div>
  );
};
