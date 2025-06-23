"use client"

import React, { useRef, useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"

interface MinimalistVimeoPlayerProps {
  videoId: string
  title: string
  className?: string
}

export function MinimalistVimeoPlayer({ videoId, title, className }: MinimalistVimeoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load Vimeo Player API
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://player.vimeo.com/api/player.js"
    script.onload = () => setIsLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if (!isLoaded || !iframeRef.current) return

    // @ts-ignore - Vimeo Player types
    const player = new window.Vimeo.Player(iframeRef.current)

    player.on("play", () => setIsPlaying(true))
    player.on("pause", () => setIsPlaying(false))
    player.on("ended", () => setIsPlaying(false))

    // Set initial muted state
    player.getVolume().then((volume: number) => {
      setIsMuted(volume === 0)
    })

    return () => {
      player.destroy()
    }
  }, [isLoaded])

  const handlePlayPause = () => {
    if (!iframeRef.current || !isLoaded) return

    // @ts-ignore - Vimeo Player types
    const player = new window.Vimeo.Player(iframeRef.current)
    
    if (isPlaying) {
      player.pause()
    } else {
      player.play()
    }
  }

  const handleMuteUnmute = () => {
    if (!iframeRef.current || !isLoaded) return

    // @ts-ignore - Vimeo Player types
    const player = new window.Vimeo.Player(iframeRef.current)
    
    if (isMuted) {
      player.setVolume(1)
      setIsMuted(false)
    } else {
      player.setVolume(0)
      setIsMuted(true)
    }
  }

  return (
    <div className={cn("relative group", className)}>
      <AspectRatio ratio={16 / 9} className="rounded-sm overflow-hidden shadow-lg bg-black">
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&sidedock=0&controls=0&playbar=0&speed=0&transparent=1&playsinline=1`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          title={title}
        />
        
        {/* Custom Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayPause}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>
            
            <button
              onClick={handleMuteUnmute}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </AspectRatio>
    </div>
  )
} 