import React, {
  RefObject,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react"

import styled from "@emotion/styled"

export interface VideoProps {
  readonly controls: boolean
  readonly autoPlay: boolean
  readonly loop: boolean
  readonly muted: boolean
  readonly preload: "auto" | "metadata" | "none"
  readonly sources: Source[]
  readonly poster?: string
}

export interface ImperativeRefProps {
  play(): Promise<void>
}

export interface CustomizedChildRef {
  play(): Promise<void>
  pause(): void
}

export interface Source {
  readonly id: string
  readonly src: string
  readonly type: "video/mp4" | "video/webm"
}

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

StyledVideo.displayName = "StyledVideo"

export const Media = forwardRef<ImperativeRefProps, VideoProps>(
  (props, ref) => {
    const childRef = useRef<CustomizedChildRef>()
    const { sources } = props

    useImperativeHandle(ref, () => ({
      async play(): Promise<void> {
        try {
          ;(await childRef) && childRef.current && childRef.current.play()
        } catch (err) {
          Promise.resolve(console.error(`Video play control [error]:${err}`))
        }
      },
      pause(): void {
        childRef && childRef.current && childRef.current.pause()
      },
    }))

    return sources.length > 0 ? (
      <StyledVideo
        autoPlay={props.autoPlay}
        controls={props.controls}
        loop={props.loop}
        muted={props.muted}
        preload={props.preload}
        poster={props.poster}
        playsInline={true}
        ref={(childRef as unknown) as RefObject<HTMLVideoElement>}>
        {sources.map(source => (
          <source key={source.id} src={source.src} type={source.type} />
        ))}
      </StyledVideo>
    ) : null
  },
)

Media.displayName = "Video.Media"
