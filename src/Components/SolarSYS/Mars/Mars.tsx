import { useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

type MarProps = {
    position ? : [number , number , number],
    onLoad?: ()=> void
}
const Mars = ({position = [ 0, 0, 0],onLoad} : MarProps) => {

    const MarsRef = useRef<THREE.Mesh>(null)
 const texture = useLoader(THREE.TextureLoader,'/Mars.jpg')

    const calledRef = useRef(false) 

  useEffect(() => {
    if (texture && onLoad && !calledRef.current) {
      calledRef.current = true
      onLoad()
    }
  }, [texture, onLoad])

 useFrame(() => {

  if(MarsRef.current){
    MarsRef.current.rotation.y += 0.01
  }
 })
  return (
    <mesh 
    ref={MarsRef}
    position={position}
    castShadow
    receiveShadow
    >

<sphereGeometry args={[0.80 , 64, 64 ]}/>
<meshPhysicalMaterial map={texture}/>

    </mesh>
  )
}

export default Mars
