// import React from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls , Stars} from '@react-three/drei'
// import Earth from './Earth'

// const EarthSceneWrapper = () => {
//   return (
//     <div className='w-72 h-72'>
//         <Canvas
//         shadows
//          camera={{ position: [5, 5, 5], fov: 75 }}
//         >
//              {/* Lights */}
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

//         {/* Earth */}
//         <Earth />

//         {/* Ground (optional) */}
//         <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
//           <planeGeometry args={[200, 200]} />
//           <shadowMaterial opacity={0.3} />
//         </mesh>

//         </Canvas>
      
//     </div>
//   )
// }

// export default EarthSceneWrapper
