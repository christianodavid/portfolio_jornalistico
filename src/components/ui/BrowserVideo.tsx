"use client";

import { VideoData } from "@/data/videoData";
import Link from "@/components/ui/Link";
import { useVideoPlayback } from "@/hook/useVideoPlayback";

interface BrowserVideoProps {
  videoData: VideoData;
}

export default function BrowserVideo({ videoData }: BrowserVideoProps) {
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
    <div className="mockup-browser border bg-light-blue [&:not(:last-child)]:mb-10">
      <div className="mockup-browser-toolbar">
        <div className="input">
          <a href={videoData.link} target="_blank" rel="noopener noreferrer">
            {videoData.link}
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center bg-base-200 px-4 py-16">
        <div className="mb-10 flex flex-col items-center">
          <h2 className="mb-6 max-w-[80ch] text-center text-2xl font-bold md:text-3xl xl:text-4xl">
            {videoData.heading}
          </h2>
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
              <source src={`${videoData.href}#t=0.1`} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            {!isPlaying && (
              <div
                className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black bg-opacity-50"
                onClick={handlePlayClick}
              >
                <svg
                  className="h-20 w-20 text-white"
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
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>
        <Link className="text-blue" href={videoData.link}>
          Assista aqui &rarr;
        </Link>
      </div>
    </div>
  );
}
