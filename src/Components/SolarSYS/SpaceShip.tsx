import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

type SpaceShipProps = {
  position?: [number, number, number]
  scale?: [number, number, number]
  onLoad?: () => void
}

const SpaceShip = ({ onLoad, ...props }: SpaceShipProps) => {
  const issRef = useRef<THREE.Group>(null)
  const [hasLoaded, setHasLoaded] = useState(false)
  
  const { scene } = useGLTF(
    '/Models/International_Space_Station.glb',
    undefined,
    undefined,
    (loader) => {
      loader.manager.onLoad = () => {
        if (!hasLoaded && onLoad) {
          setHasLoaded(true)
          onLoad()
        }
      }
      loader.manager.onError = (url) => {
        console.error('Failed to load SpaceShip model:', url)
      }
    }
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasLoaded && scene && onLoad) {
        setHasLoaded(true)
        onLoad()
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [scene, onLoad, hasLoaded])

  return (
    <group ref={issRef}>
      <primitive 
        object={scene} 
        {...props}
      />
    </group>
  )
}

useGLTF.preload('/Models/International_Space_Station.glb')

export default SpaceShip