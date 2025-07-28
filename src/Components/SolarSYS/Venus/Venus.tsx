import { useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

type VenusProps = {
    position ? : [number , number , number],
    onLoad ?: ()=> void
}
const Venus = ({position = [0, 0, 0],onLoad}: VenusProps) => {
    const venRef = useRef<THREE.Mesh>(null)
    const texture = useLoader(THREE.TextureLoader,'/venus.jpg')
  const calledRef = useRef(false) 

  useEffect(() => {
    if (texture && onLoad && !calledRef.current) {
      calledRef.current = true
      onLoad()
    }
  }, [texture, onLoad])


    useFrame(() => {
        if(venRef.current){
            venRef.current.rotation.y += 0.001
        }
    })
  return (
   <mesh
   ref={venRef}
       position = {position}
  castShadow
  receiveShadow>

<sphereGeometry args={[0.52, 64, 64]}/>
<meshPhysicalMaterial  map={texture}/>
   </mesh>
  )
}

export default Venus
