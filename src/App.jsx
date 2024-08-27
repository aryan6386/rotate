
import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import Scene from "./Scene"
import {BrightnessContrast, EffectComposer, Bloom } from '@react-three/postprocessing';

const App = () => {
 
  return (<Canvas camera={{fov:35}}>
    <OrbitControls/>
    <ambientLight/>
    <Scene/>
    <EffectComposer>
    <BrightnessContrast brightness={0.0} contrast={0.2} /> 
    <Bloom 
    mipmapBlur
          intensity={12.0}        // Strength of the bloom effect
          luminanceThreshold={0} // Minimum brightness level to start bloom
          luminanceSmoothing={0} // Controls the transition between non-bloom and bloom areas
          height={30}            // Quality of bloom effect (higher = better but more performance cost)
        />
    </EffectComposer>
  </Canvas>
  )
}

export default App