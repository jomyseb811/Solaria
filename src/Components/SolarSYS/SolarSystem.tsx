'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stars } from '@react-three/drei'
import SolarLoader from './Loader/SolarLoader'
import { Suspense, useEffect, useRef, useState, useCallback } from 'react'
import SolarGroup from './SolarGroup'
import { SimplePreLoader } from './Loader/SimplePreloader'
import Image from 'next/image'


function SolarSystemScene() {
  const [initialLoad, setInitialLoad] = useState(true)
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const [showOrbits, setShowOrbit] = useState(true)
  const [controlsEnabled, setControlsEnabled] = useState(true)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)


  const isLoading = initialLoad || !assetsLoaded

 useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateState = () => {
      setAudioEnabled(!audio.paused)
    }

    audio.addEventListener('play', updateState)
    audio.addEventListener('pause', updateState)
    
    updateState()

    return () => {
      audio.removeEventListener('play', updateState)
      audio.removeEventListener('pause', updateState)
    }
  }, [])

  const handlePlayAudio = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true

    if (audio.paused) {
      audio.play()
        .then(() => {
        })
        .catch(e => {
          console.error("Audio play failed:", e)
          setAudioEnabled(false)
        })
    } else {
      audio.pause()
    }
  }, [])


  useEffect(() => {
    const timer = setTimeout(() => setInitialLoad(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-screen h-screen relative'>
 
  <audio
    ref={audioRef}
    className='hidden'
    src="/space.mp3"
    loop
  />

  
  {!isLoading && (
    <div className="absolute top-4 left-4 z-50 animate-fadeIn">
      <Image 
        src="/solaria_logo.png" 
        alt="Solaria Logo"
        className="w-65 h-auto drop-shadow-[0_0_10px_rgba(255,170,0,0.7)] hover:scale-105 transition-transform"
      />
    </div>
  )}

 
  <div className='absolute bottom-4 right-4 z-10 flex flex-col items-end gap-2 text-white text-sm'>
    <div className="flex items-center gap-2">
      <span>Orbit:</span>
      <button 
        onClick={() => setShowOrbit(prev => !prev)}
        className='px-2 py-1 bg-transparent border border-white rounded-md hover:bg-white/10 transition-colors'
      >
        {showOrbits ? 'ON' : 'OFF'}
      </button>
    </div>

    <div className='flex items-center gap-2'>
      <span>Controls:</span>
      <button 
        className='px-2 py-1 bg-transparent border border-white rounded-md hover:bg-white/10 transition-colors'
        onClick={() => setControlsEnabled(prev => !prev)}
      >
        {controlsEnabled ? 'ON' : 'OFF'}
      </button>
    </div>

    <div className='flex items-center gap-2'>
      <span>Audio:</span>
      <button
        className="px-2 py-1 bg-transparent border border-white rounded-md hover:bg-white/10 transition-colors"
        onClick={handlePlayAudio}
      >
        {audioEnabled ? 'OFF' : 'ON'}
      </button>
    </div>
  </div>


  {isLoading && <SimplePreLoader />}


  <Canvas 
    shadows 
    camera={{ position: [15, 10, 15], fov: 60, near: 0.1, far: 10000 }}
    >
    <Preload all />
    
    <Suspense fallback={<SolarLoader />}>
      <SolarGroup 
        showOrbits={showOrbits} 
        onLoad={() => {
          console.log("All assets loaded!")
          setAssetsLoaded(true)
        }} 
      />
    </Suspense>

    {controlsEnabled && (
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        enableZoom
        enablePan
        />
    )}

    <Stars radius={200} depth={100} count={70000} factor={4} fade />
    
    <mesh>
      <planeGeometry args={[200, 200]} />
      <shadowMaterial opacity={0.2} />
    </mesh>
  </Canvas>
        </div>
  )
}

export default SolarSystemScene