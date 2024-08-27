
import React, {useRef} from 'react'
import {useTexture} from '@react-three/drei'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber';
const Scene = () => {
    let tex = useTexture("./Untitled.png");
    let Scene = useRef(null);
    useFrame((state, delta) => {
      Scene.current.rotation.y += delta;
    })
  return (
    <group rotation={[0,1.4,0.5]} >
    <mesh ref={Scene}>
    <cylinderGeometry args={[1,1,1,60,60,true]} />
    <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
 
  </mesh>
  </group>
  )
}

export default Scene