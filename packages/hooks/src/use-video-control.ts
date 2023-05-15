import React, { RefObject, useRef, useState } from "react"

export interface VideoControlState {
  readonly mute: boolean
  readonly isPlaying: boolean
  readonly setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  readonly setMute: React.Dispatch<React.SetStateAction<boolean>>
  readonly videoRef: RefObject<HTMLVideoElement>
  readonly play: () => Promise<void>
  readonly pause: () => void
}

export function useVideoControl(muted = true): VideoControlState {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mute, setMute] = useState<boolean>(muted)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const play = async (): Promise<void> => {
    try {
      if (!videoRef || !videoRef.current) return

      await videoRef.current.play()
      setIsPlaying(true)
    } catch (err) {
      return Promise.reject(`Video Control Hook [error]: ${err}`)
    }
  }

  const pause = (): void => {
    if (!videoRef || !videoRef.current) return

    videoRef.current.pause()
    setIsPlaying(false)
  }

  return {
    videoRef,
    mute,
    isPlaying,
    setMute,
    setIsPlaying,
    pause,
    play,
  }
}
