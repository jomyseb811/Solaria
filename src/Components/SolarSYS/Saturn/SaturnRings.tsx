import { useMemo, useRef } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { exp } from 'three/tsl'
import { useFrame } from '@react-three/fiber'

function SaturnRings({ radius = 5, width = 2, count = 2000, color = 'gray' }) {

  const positions = useMemo(() => {
    const points = []
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = radius + (Math.random() - 0.5) * width
      const x = Math.cos(angle) * distance
      const z = Math.sin(angle) * distance
      const y = (Math.random() - 0.5) * 0.05 
      points.push(x, y, z)
    }
    return new Float32Array(points)
  }, [radius, width, count])

  return (
    <Points positions={positions}>
      <PointMaterial color={color} size={0.02} sizeAttenuation depthWrite={false} />
    </Points>
    
  )
}

export default SaturnRings