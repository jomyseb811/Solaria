import { useFrame, useLoader } from '@react-three/fiber'
import React, {  useEffect, useRef } from 'react'
import * as THREE from 'three'

type MercuProps = {
    position ? : [number , number , number],
    onLoad?: ()=> void
}
const Mercury = ( {position = [0,0,0] , onLoad}: MercuProps) => {
    const mercRef = useRef<THREE.Mesh>(null)
    const texture = useLoader(THREE.TextureLoader,'/Mercury.jpg')
  const calledRef = useRef(false) 

  useEffect(() => {
    if (texture && onLoad && !calledRef.current) {
      calledRef.current = true
      onLoad()
    }
  }, [texture, onLoad])

    useFrame(() => {

        if(mercRef.current){
   mercRef.current.rotation.y +=0.001
        }
})
  return (
  <mesh
  ref={mercRef}
  castShadow
  receiveShadow
  position={position}
  >
<sphereGeometry args={[0.50 , 64 , 64]}/>
<meshPhysicalMaterial map={texture}/>
  </mesh>
  )
}

export default Mercury
