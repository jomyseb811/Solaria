import { Line } from '@react-three/drei'
import * as THREE from 'three'
function OrbitCircle({ radius = 3, segments = 64, color = 'white' }) {
  const points: [number, number, number][] = []

  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    points.push([x, 0, z]) 
  } 

  return <Line points={points} color={color} lineWidth={1} 
 opacity={0.2}
 depthTest={false}

      blending={THREE.AdditiveBlending}
/>
}

export default OrbitCircle
