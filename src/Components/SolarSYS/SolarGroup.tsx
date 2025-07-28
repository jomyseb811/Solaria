'use client'

import * as THREE from 'three'
import Moon from './Moon/Moon'
import Earth from './Earth/Earth'
import { useFrame } from '@react-three/fiber'
import OrbitCircle from './Orbit Calculation/OrbitCircle'
import Mercury from './Mercury/Mercury'
import Mars from './Mars/Mars'
import Jupiter from './Jupiter/Jupiter'
import SpaceShip from './SpaceShip'
import Saturn from './Saturn/Saturn'
import SaturnRings from './Saturn/SaturnRings'
import Uranus from './Uranus/Uranus'
import Neptune from './Neptune/Neptune'
import Venus from './Venus/Venus'
import { Suspense, useRef, useState } from 'react'
import SunModel from './Sun/SunModel'

function SolarGroup({ showOrbits, onLoad }: { showOrbits: boolean; onLoad?: () => void }) {
  const solarGroupRef = useRef<THREE.Group>(null)
  const earthGroupRef = useRef<THREE.Group>(null)
  const moonGroupRef = useRef<THREE.Group>(null)
  const mercGroupRef = useRef<THREE.Group>(null)
  const venusGroupRef = useRef<THREE.Group>(null)
  const marsGroupref = useRef<THREE.Group>(null)
  const jupiterGroupRef = useRef<THREE.Group>(null)
  const saturnGroupRef = useRef<THREE.Group>(null)
  const uranusGroupRef = useRef<THREE.Group>(null)
  const neptuneGroupref = useRef<THREE.Group>(null)
  const issOrbitRef = useRef<THREE.Group>(null)

  const [loadingCount, setLoadingCount] = useState(0)
  const totalAssets = 11

  const handleAssetLoad = () => {
    setLoadingCount(prev => {
      const newCount = prev + 1
      console.log(`Asset loaded: ${newCount}/${totalAssets}`)
      if (newCount === totalAssets && onLoad) {
        onLoad()
      }
      return newCount
    })
  }

  useFrame(() => {
    if (solarGroupRef.current) solarGroupRef.current.rotation.y += 0.001
    if (earthGroupRef.current) earthGroupRef.current.rotation.y += 0.004
    if (moonGroupRef.current) moonGroupRef.current.rotation.y += 0.003
    if (mercGroupRef.current) mercGroupRef.current.rotation.y += 0.009
    if (venusGroupRef.current) venusGroupRef.current.rotation.y += 0.005
    if (marsGroupref.current) marsGroupref.current.rotation.y += 0.003
    if (jupiterGroupRef.current) jupiterGroupRef.current.rotation.y += 0.006
    if (issOrbitRef.current) issOrbitRef.current.rotation.y += 0.01
    if (saturnGroupRef.current) saturnGroupRef.current.rotation.y += 0.004
    if (uranusGroupRef.current) uranusGroupRef.current.rotation.y += 0.001
    if (neptuneGroupref.current) neptuneGroupref.current.rotation.y += 0.0001
  })

  const orbitData = [
    { radius: 10, color: 'white' },
    { radius: 16, color: 'white' },
    { radius: 22, color: 'white' },
    { radius: 26, color: 'white' },
    { radius: 3, color: 'white' },
    { radius: 2, color: 'white' },
    { radius: 35, color: 'white' },
    { radius: 50, color: 'white' },
    { radius: 57, color: 'white' },
    { radius: 64, color: 'white' }
  ]

  return (
    <>
      <Suspense>
        <SunModel position={[0, 0, 0]} onLoad={handleAssetLoad} />

        {showOrbits && orbitData.map(({ radius, color }, index) => (
          <OrbitCircle key={index} radius={radius} color={color} />
        ))}

        <group ref={solarGroupRef}>
          <group ref={mercGroupRef}>
            <group position={[10, 0, 0]}>
              <Mercury onLoad={handleAssetLoad} />
            </group>
          </group>

          <group ref={venusGroupRef}>
            <group position={[16, 0, 0]}>
              <Venus onLoad={handleAssetLoad} />
            </group>
          </group>

          <group ref={marsGroupref}>
            <group position={[22, 0, 0]}>
              <Mars onLoad={handleAssetLoad} />
            </group>
          </group>

          <group ref={earthGroupRef}>
            <group position={[26, 0, 0]}>
              <Earth onLoad={handleAssetLoad} />
              <group ref={moonGroupRef}>
                {showOrbits && <OrbitCircle radius={3} color="gray" />}
                <Moon position={[3, 0, 0]} onLoad={handleAssetLoad} />
              </group>
              {showOrbits && <OrbitCircle radius={2} color="pink" />}
              <group ref={issOrbitRef}>
                <group position={[2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
                  <SpaceShip onLoad={handleAssetLoad} />
                </group>
              </group>
            </group>
          </group>

          <group ref={jupiterGroupRef}>
            <group position={[35, 0, 0]}>
              <Jupiter onLoad={handleAssetLoad} />
            </group>
          </group>

          <group ref={saturnGroupRef}>
            <group position={[50, 0, 0]}>
              <Saturn onLoad={handleAssetLoad} />
              <group rotation={[0.466, 0, 0]}>
                <SaturnRings  />
              </group>
            </group>
          </group>

          <group ref={uranusGroupRef}>
            <group position={[57, 0, 0]}>
              <Uranus onLoad={handleAssetLoad} />
            </group>
          </group>

          <group ref={neptuneGroupref}>
            <group position={[64, 0, 0]}>
              <Neptune onLoad={handleAssetLoad} />
            </group>
          </group>
        </group>
      </Suspense>
    </>
  )
}

export default SolarGroup