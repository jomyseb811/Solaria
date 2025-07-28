// 'use client'

// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Stars } from '@react-three/drei'
// import Moon from './Moon' // the component above
// import * as THREE from 'three'
// import EarthSceneWrapper from '../Earth/EarthSceneWrapper'
// import Earth from '../Earth/Earth'

// export default function MoonSceneWrapper() {
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <Canvas
//         shadows
//         camera={{ position: [5, 5, 5], fov: 75 }}
//       >
//         {/* Lights */}
//         <ambientLight intensity={0.2} />
//         <directionalLight
//           castShadow
//           intensity={1}
//           position={[2, 2, 5]}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//         />

//         {/* Orbit Controls */}
//         <OrbitControls
//           enableDamping
//           dampingFactor={0.05}
//           enableZoom
//           enablePan={false}
//         />

//         {/* Stars */}
//         <Stars radius={100} depth={50} count={10000} factor={4} fade />

//         {/* Moon */}
//         <Moon />
//         <Earth/>
// {/* 
//         Ground (optional)
//         <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
//           <planeGeometry args={[200, 200]} />
//           <shadowMaterial opacity={0.3} />
//         </mesh> */}
//       </Canvas>
//     </div>
//   )
// }
