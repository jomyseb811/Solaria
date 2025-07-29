import { useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

type JupProps = {
    position ? : [ number , number , number ],
    onLoad?:() => void
}

const Jupiter = ({position = [ 0, 0, 0 ],onLoad} : JupProps) => {

    const jupRef = useRef <THREE.Mesh> (null)
    const texture = useLoader(THREE.TextureLoader,'/textures/Jupiter.jpg')
  const calledRef = useRef(false) 

  useEffect(() => {
    if (texture && onLoad && !calledRef.current) {
      calledRef.current = true
      onLoad()
    }
  }, [texture, onLoad])
    
    useFrame(() => {
        if(jupRef.current){
            jupRef.current.rotation.y += 0.03
        }
    })

  return (
  <mesh 
  ref={jupRef}
  position={position}
  castShadow
  receiveShadow
  >
    <sphereGeometry args={[ 4, 64 ,64 ]}/>
    <meshPhysicalMaterial map={texture}/>

  </mesh>
  )
}

export default Jupiter
