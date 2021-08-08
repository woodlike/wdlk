import { Video, theme } from "../.."
import { axe, toHaveNoViolations } from "jest-axe"
import { cleanup, render } from "@testing-library/react"

import React from "react"
import { ThemeProvider } from "@emotion/react"
import { matchers } from "@emotion/jest"

expect.extend(matchers)
expect.extend(toHaveNoViolations)

describe("<Video />", () => {
  const ref = {
    current: {
      play: jest.fn(),
      pause: jest.fn(),
    },
  }
  it("should not have accessibility violations", async done => {
    const { container, unmount } = render(
      <ThemeProvider theme={theme}>
        <Video.Media
          preload="auto"
          controls={true}
          autoPlay={true}
          muted={true}
          loop={true}
          ref={ref}
          sources={[
            {
              id: "first-demo-video",
              src: "/public/demo-video.mp4",
              type: "video/mp4",
            },
          ]}
        />
      </ThemeProvider>,
    )

    const a11yResults = await axe(container)
    expect(a11yResults).toHaveNoViolations()
    cleanup()
    unmount()
    done()
  })

  it("should contain all interface properties in DOM", () => {
    const { unmount } = render(
      <ThemeProvider theme={theme}>
        <Video.Media
          preload="auto"
          controls={true}
          autoPlay={true}
          muted={true}
          loop={true}
          ref={ref}
          sources={[
            {
              id: "first-demo-video",
              src: "/public/demo-video.mp4",
              type: "video/mp4",
            },
          ]}
        />
      </ThemeProvider>,
    )
    const video = document.querySelector("video")
    expect(video.hasAttribute("controls")).toBeTruthy()
    expect(video.hasAttribute("autoplay")).toBeTruthy()
    expect(video.hasAttribute("loop")).toBeTruthy()
    expect(video.getAttribute("preload")).toBe("auto")
    unmount()
  })

  it("should render a video according to the provided aspect ratio", () => {
    const { unmount } = render(
      <ThemeProvider theme={theme}>
        <Video.Media
          preload="auto"
          controls={true}
          autoPlay={true}
          muted={true}
          loop={true}
          ref={ref}
          data-testid="video-media-test-id"
          sources={[
            {
              id: "first-demo-video",
              src: "/public/demo-video.mp4",
              type: "video/mp4",
            },
          ]}
        />
      </ThemeProvider>,
    )
    const video = document.querySelector("video")
    expect(video).toHaveStyleRule("width", "100%")
    expect(video).toHaveStyleRule("object-fit", "cover")
    unmount()
  })

  it("should render a video with full widht and a substracted full height", () => {
    const { unmount } = render(
      <ThemeProvider theme={theme}>
        <Video.Media
          preload="auto"
          controls={true}
          autoPlay={true}
          muted={true}
          loop={true}
          ref={ref}
          sources={[
            {
              id: "first-demo-video",
              src: "/public/demo-video.mp4",
              type: "video/mp4",
            },
          ]}
        />
      </ThemeProvider>,
    )
    const video = document.querySelector("video")
    expect(video).toHaveStyleRule("width", "100%")
    unmount()
  })
})
