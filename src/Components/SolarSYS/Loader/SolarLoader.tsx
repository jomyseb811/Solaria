import { Html, useProgress } from '@react-three/drei'
import Image from 'next/image'


const SolarLoader = () => {

  
    const {progress} = useProgress()
  return (

      
    <Html center className='z-[1000]'>
    <div className='flex flex-col items-center font-orbitron text-[#ffaa00] drop-shadow-[0_0_10px_rgba(255,170,0,0.7)]'>
<Image
alt='solaria_log'
src={'/solaria_logo.png'}
className='w-32 mb-2 animate-spin-slow drop-shadow-[0_0_15px_rgba(255,170,0,0.7)]'
/>
<div className='text-4xl font-bold'>{progress.toFixed(0)}%</div>
</div>
    </Html>
  )
}

export default SolarLoader
