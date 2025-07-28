import { useGLTF } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

type SunModelProps = {
  position?: [number, number, number]
  onLoad?: () => void  
}

function SunModel({ position = [0, 0, 0], onLoad, ...props }: SunModelProps) {
  const sunModelRef = useRef<THREE.Group>(null)
  const [hasLoaded, setHasLoaded] = useState(false)
  
  const { scene } = useGLTF('/Models/sun.glb', undefined, undefined, (loader) => {
    loader.manager.onLoad = () => {
      if (!hasLoaded && onLoad) {
        setHasLoaded(true)
        onLoad()
      }
    }
    loader.manager.onError = (url) => {
      console.error('Failed to load sun model:', url)
    }
  })

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
    <group ref={sunModelRef} position={position} {...props}>
      <primitive object={scene} scale={[0.5, 0.5, 0.5]} />
      <pointLight
        distance={1000}
        intensity={1200}
        decay={2}
        color={'#ffffff'}
      />
    </group>
  )
}

useGLTF.preload('/Models/sun.glb')

export default SunModel