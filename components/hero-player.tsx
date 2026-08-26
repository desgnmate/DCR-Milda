"use client";

import Image from "next/image";
import { MusicNote, Pause, Play, SkipBack, SkipForward, SpeakerHigh, SpeakerSlash, Waveform } from "@phosphor-icons/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const previewUrl = "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/41/3b/c9/413bc954-c38d-67c3-9df3-72c81645d49b/mzaf_2525286916385513263.plus.aac.p.m4a";
const artworkUrl = "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e5/24/60/e52460fd-b67c-9f3e-f4a2-93a817b6caa3/5063544832426_cover.jpg/200x200bb.jpg";
const waveformBars = [7, 12, 18, 10, 22, 15, 8, 19, 25, 13, 9, 17, 23, 11, 16, 21, 8, 14, 24, 17, 10, 20, 13, 7];

function formatTime(value: number) {
  const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0;
  const minutes = Math.floor(safeValue / 60);
  const seconds = Math.floor(safeValue % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function HeroPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(30);
  const [isMuted, setIsMuted] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.querySelector("#top");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting && entry.intersectionRatio > 0.12),
      { threshold: [0, 0.12, 0.5] },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(audio.currentTime + seconds, 0), audio.duration || duration);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <div
      className={`hero-player${isPlaying ? " is-playing" : ""}${isHeroVisible ? " is-visible" : " is-collapsed"}`}
      aria-label="Places by DCR MILDA audio preview"
      style={{ "--audio-progress": progress } as CSSProperties}
    >
      <Image className="hero-player-art" src={artworkUrl} alt="Places cover art" width={80} height={80} />
      <div className="hero-player-copy">
        <strong>Places</strong>
        <small>DCR MILDA</small>
      </div>
      <div className="hero-player-controls">
        <button type="button" onClick={() => skip(-10)} aria-label="Rewind Places by ten seconds" title="Back 10 seconds"><SkipBack size={16} weight="fill" aria-hidden="true" /></button>
        <button className="hero-player-toggle" type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause Places" : "Play Places"} title={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? <Pause size={17} weight="fill" aria-hidden="true" /> : <Play size={17} weight="fill" aria-hidden="true" />}
        </button>
        <button type="button" onClick={() => skip(10)} aria-label="Advance Places by ten seconds" title="Forward 10 seconds"><SkipForward size={16} weight="fill" aria-hidden="true" /></button>
      </div>
      <div className="hero-player-waveform" aria-hidden="true">
        {waveformBars.map((height, index) => <i className={index / waveformBars.length <= progress ? "is-active" : ""} style={{ height }} key={`${height}-${index}`} />)}
      </div>
      <time className="hero-player-time">{formatTime(progress * duration)} / {formatTime(duration)}</time>
      <button className="hero-player-volume" type="button" onClick={toggleMute} aria-label={isMuted ? "Unmute Places" : "Mute Places"} title={isMuted ? "Unmute" : "Mute"}>
        {isMuted ? <SpeakerSlash size={16} weight="fill" aria-hidden="true" /> : <SpeakerHigh size={16} weight="fill" aria-hidden="true" />}
      </button>
      <button className="hero-player-mini" type="button" onClick={togglePlayback} aria-label={isPlaying ? "Stop Places" : "Play Places"} title={isPlaying ? "Stop Places" : "Play Places"}>
        {isPlaying ? <Waveform size={17} weight="bold" aria-hidden="true" /> : <MusicNote size={17} weight="bold" aria-hidden="true" />}
      </button>
      <div
        className="hero-player-progress"
        role="progressbar"
        aria-label="Places preview progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      />
      <audio
        ref={audioRef}
        src={previewUrl}
        preload="none"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 30)}
        onTimeUpdate={(event) => {
          const audio = event.currentTarget;
          setDuration(audio.duration || 30);
          setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
        }}
      />
    </div>
  );
}
