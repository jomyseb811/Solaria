import { useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

type SaturnProps = {
    position ? :  [number ,number , number],
    onLoad?: ()=> void
}

const Saturn = ({position = [0,0,0],onLoad}: SaturnProps) => {

  const satRef = useRef<THREE.Mesh>(null)
  const texture = useLoader(THREE.TextureLoader,'/textures/SaturnReal.jpg')

    const calledRef = useRef(false) 

  useEffect(() => {
    if (texture && onLoad && !calledRef.current) {
      calledRef.current = true
      onLoad()
    }
  }, [texture, onLoad])

  useFrame(() => {
    if(satRef.current){
satRef.current.rotation.y += 0.003
    }
 
  })
  return (
    <mesh
     ref={satRef}
     
     position={position}
     castShadow
     receiveShadow
     >
      <sphereGeometry args={[2.7, 64 , 64 ]}/>
<meshPhysicalMaterial map={texture}/>
   </mesh>
  )
}

export default Saturn
