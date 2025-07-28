import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useEffect } from 'react'

type EarthProps = {
  position?: [number, number, number]
  onLoad?: () => void 
}

export default function Earth({ position = [0, 0, 0], onLoad }: EarthProps) {
  const earthRef = useRef<THREE.Mesh>(null!)
  
  const texture = useLoader(THREE.TextureLoader, '/earth_atmos_4096.jpg')
  const calledRef = useRef(false) 

  useEffect(() => {
    if (texture && onLoad && !calledRef.current) {
      calledRef.current = true
      onLoad()
    }
  }, [texture, onLoad])

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001
    }
  })

  return (
    <mesh
      ref={earthRef}
      position={position}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  )
}