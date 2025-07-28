// 'use client'
// import React, { useEffect, useRef } from 'react'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/Addons.js'

// const First = () => {
//   const mountRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(
//     100,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     )
//     const renderer = new THREE.WebGLRenderer({ antialias: true })
//     renderer.setSize(window.innerWidth, window.innerHeight)

//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement)
//     }
// const Moontexture = new THREE.TextureLoader().load('moon.jpg')
//     const geometry = new THREE.SphereGeometry()
//     const material = new THREE.MeshPhysicalMaterial({
//          map: Moontexture
//     })
   
//     const moon = new THREE.Mesh(geometry, material) 
//     scene.add(moon)

//     const light = new THREE.DirectionalLight(0xffffff, 1)
//     light.position.set(2, 2, 5)
//     scene.add(light)

// //     const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
// // scene.add(ambientLight)

// // const gridhelper = new THREE.GridHelper( 200 , 50)
// // scene.add(gridhelper)

// // moon.rotation.y = Math.PI / 4
// // moon.rotation.x = Math.PI / 6

//     camera.position.set(5,5,5)

//     const controls = new OrbitControls(camera, renderer.domElement)

//     controls.enableDamping = true
//     controls.dampingFactor = 0.05
//     controls.enableZoom = true
//     controls.enablePan = false
//     renderer.shadowMap.enabled = true
// light.castShadow = true
// moon.castShadow = true
// moon.receiveShadow = true


//     const animate = () => {
//       requestAnimationFrame(animate)
//       controls.update()
//       renderer.render(scene, camera)
//       moon.rotation.y += 0.001
//     }

//     const AddStars = () => {
//         const geometry = new THREE.SphereGeometry(0.25 , 24 , 24)
//         const material = new THREE.MeshStandardMaterial({color : 0xffffff})
//         const star = new THREE.Mesh(geometry , material)

//         const [ x, y , z ] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(100))
//         star.position.set(x,y,z)
//         scene.add(star)
//     }
//     Array(1000).fill(0).forEach(AddStars)
// // const SpaceTexture = new THREE.TextureLoader().load('Space.png');
// // scene.background = SpaceTexture
    


//     animate()

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight
//       camera.updateProjectionMatrix()
//       renderer.setSize(window.innerWidth, window.innerHeight)
//     }

//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//       controls.dispose()
//       renderer.dispose()
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement)
//       }
//     }
//   }, [])

//   return <div ref={mountRef} className='w-3xl h-3.5'/>
// }

// export default First
