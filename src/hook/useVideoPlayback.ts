import { useState, useRef, useCallback } from "react";

export function useVideoPlayback() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayClick = useCallback(async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
        setError(null);
      } catch (err) {
        console.error("Error playing video:", err);
        setError("Falha ao reproduzir o vídeo. Por favor, tente novamente.");
      }
    }
  }, []);

  const handlePlay = useCallback(() => setIsPlaying(true), []);
  const handlePause = useCallback(() => setIsPlaying(false), []);
  const handleError = useCallback(
    () => setError("Ocorreu um erro ao carregar o vídeo."),
    [],
  );

  return {
    isPlaying,
    error,
    videoRef,
    handlePlayClick,
    handlePlay,
    handlePause,
    handleError,
  };
}
