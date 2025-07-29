import { useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'


type UranProps = {
    position? : [number, number, number],
    onLoad ?: ()=> void
}
const Uranus = ({position=[0,0,0], onLoad}: UranProps) => {
const texture = useLoader(THREE.TextureLoader,'/Uranus.jpg')
const uranRef = useRef<THREE.Mesh>(null)

  const calledRef = useRef(false)

  useEffect(() => {
    if (texture && onLoad && !calledRef.current) {
      calledRef.current = true
      onLoad()
    }
  }, [texture, onLoad])

useFrame(() => {
    if(uranRef.current){
        uranRef.current.rotation.y +=0.002
    }
})
  return (
    <mesh
    ref={uranRef}
    castShadow
    receiveShadow
    position={position}
    >
      <sphereGeometry args={[1.8, 64, 64]}/>
      <meshPhysicalMaterial map={texture}/>
    </mesh>
  )
}

export default Uranus
