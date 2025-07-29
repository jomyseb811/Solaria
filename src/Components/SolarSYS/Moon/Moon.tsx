import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'
type MoonProps = {
  position?: [number, number, number],
  onLoad?: ()=> void
}

export default function Moon({ position = [0, 0, 0], onLoad }: MoonProps) {
  const moonRef = useRef<THREE.Mesh>(null!)
  const texture = useLoader(THREE.TextureLoader,'/textures/moon.jpg')
  const calledRef = useRef(false) 

  useEffect(() => {
    if (texture && onLoad && !calledRef.current) {
      calledRef.current = true
      onLoad()
    }
  }, [texture, onLoad])

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.005
    }
  })

  return (
    <mesh
      ref={moonRef}
      position={position}
      castShadow
      receiveShadow
    >

      <sphereGeometry args={[0.27, 64, 64]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  )
}
