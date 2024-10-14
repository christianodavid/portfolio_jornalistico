"use client";

import { VideomakerData } from "@/data/videomakerData";
import Link from "@/components/ui/Link";
import { useVideoPlayback } from "@/hook/useVideoPlayback";

interface CardProps {
  videomakerData: VideomakerData;
}

export default function Card({ videomakerData }: CardProps) {
  const {
    isPlaying,
    error,
    videoRef,
    handlePlayClick,
    handlePlay,
    handlePause,
    handleError,
  } = useVideoPlayback();

  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-orange">
      <div className="relative">
        <video
          ref={videoRef}
          width="750"
          height="500"
          controls
          preload="metadata"
          onPlay={handlePlay}
          onPause={handlePause}
          onError={handleError}
        >
          <source src={`${videomakerData.video}#t=0.1`} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        {!isPlaying && (
          <div
            className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black bg-opacity-50"
            onClick={handlePlayClick}
          >
            <svg
              className="h-16 w-16 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="p-5">
        <h2 className="mb-6 font-semibold uppercase text-cream md:text-base xl:text-lg">
          {videomakerData.title}
        </h2>
        {error && <p className="mb-2 text-sm text-red-500">{error}</p>}
        <Link href={videomakerData.href}>Assista aqui &rarr;</Link>
      </div>
    </div>
  );
}
