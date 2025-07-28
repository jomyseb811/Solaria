import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

type NeptuneProps = {
    position ? : [number , number ,number],
    onLoad?: ()=> void
}

const Neptune = ({position=[0, 0, 0], onLoad}: NeptuneProps) => {

    const nepRef = useRef<THREE.Mesh>(null)
    const texture = useLoader(THREE.TextureLoader,'/Neptune.jpg')

   const calledRef = useRef(false) 

  useEffect(() => {
    if (texture && onLoad && !calledRef.current) {
      calledRef.current = true
      onLoad()
    }
  }, [texture, onLoad])

    useFrame(()=> {
        if(nepRef.current){
            nepRef.current.rotation.y += 0.001
        }
    })

  return (
    <mesh
    ref={nepRef}
    castShadow
    receiveShadow
    position={position}
    >
      
      <sphereGeometry args={[1.8 , 64, 64]}/>
      <meshPhysicalMaterial map={texture}/>
    </mesh>
  )
 
}

export default Neptune
