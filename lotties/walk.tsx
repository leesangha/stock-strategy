'use client'
import Lottie, { useLottie, useLottieInteractivity } from 'lottie-react'
import groovyWalkAnimation from './json/groovyWalk.json'
import robotAnimation from './json/robotAnimate.json'
import { useEffect, useRef } from 'react'

const options = {
  animationData: robotAnimation,
}

export const Robot = () => {
  return (
    <Lottie
      animationData={robotAnimation}
      style={{ height: 1000 }}
      interactivity={{
        mode: 'scroll',
        actions: [
          {
            visibility: [0, 1],
            type: 'loop',
            frames: [0, 180],
          },
        ],
      }}
    />
  )
}

export const Walk = () => {
  return <Lottie animationData={groovyWalkAnimation} />
}

export const WalkScroll = () => {
  const lottieObj = useLottie(
    { animationData: groovyWalkAnimation },
    { height: 1000 }
  )
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 0.2],
        type: 'stop',
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: 'seek',
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: 'loop',
        frames: [45, 180],
      },
    ],
  })

  return Animation
}

export const WalkScroll2 = () => {
  return (
    <Lottie
      animationData={groovyWalkAnimation}
      style={{ height: 1000 }}
      interactivity={{
        mode: 'scroll',
        actions: [
          {
            visibility: [0, 0.2],
            type: 'seek',
            frames: [0],
          },
          {
            visibility: [0.2, 0.45],
            type: 'seek',
            frames: [0, 45],
          },
          {
            visibility: [0.45, 1.0],
            type: 'play',
            frames: [45, 180],
          },
        ],
      }}
    />
  )
}
