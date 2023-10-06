import React, { useRef } from 'react'
import { Image, useScroll } from '@react-three/drei'
import "./Images.css"
import { useFrame, useThree } from '@react-three/fiber'

const Images = () => {
  const { width, height } = useThree((state) => state.viewport);
  // const group = useRef();
  // const data = useScroll();

  // useFrame(() => {
  //   group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3);
  // });

  return (
    // <group ref={group}>
    <group>
      <Image url="../public/img1.jpg" scale={[4, height, 1]} position={[-1, 0, 1]}/>
      <Image url="../public/img2.jpg" scale={3} position={[2, 0, 1]}/>
      <Image url="../public/img3.jpg" scale={[1, 3.5, 1]} position={[-2.3, -height, 2]}/>
      <Image url="../public/img4.jpg" scale={[1.4, 2, 1]} position={[1.3, -height - 0.3, 3.2]}/>
    </group>
  )
}

export default Images