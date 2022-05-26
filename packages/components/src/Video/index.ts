import * as Controls from "./Controls"
import * as Media from "./Video"
import * as Stage from "./Stage"
import React from "react"

interface Props {
  Stage: {(props: React.PropsWithChildren<Stage.VideoStageProps>): JSX.Element}
  Media: React.ForwardRefExoticComponent<Media.VideoProps & React.RefAttributes<Media.ImperativeRefProps>>
  Controls: {(props: React.PropsWithChildren<Controls.ControlProps>): JSX.Element}
}

export const Video: Props = { ...Controls, ...Media, ...Stage }
