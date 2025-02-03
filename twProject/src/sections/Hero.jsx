import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import { HackerRoom } from '../components/HackerRoom'
import { Suspense } from 'react'
import { Leva, useControls } from 'leva'


const Hero = () => {
    const controls = useControls('Hacker Room', {
        rotationX:{
            value: 2.5,
            min: -10,
            max: 10
        },
        rotationY:{
            value: 2.5,
            min: -10,
            max: 10
        },
        rotationZ:{
            value: 2.5,
            min: -10,
            max: 10
        },
        positionX:{
            value: 0,
            min: -10,
            max: 10
        },
        positionY:{
            value: 0,
            min: -10,
            max: 10
        },
        positionZ:{
            value: 0,
            min: -10,
            max: 10
        },
        scale:{
            value: 0.05,
            min: 0,
            max: 1
        }
    })
  return (
    <section className="w-screen h-screen bg-black text-white">
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-6'>
        <h1 className='sm:text-5xl text-4xl font-bold text-white text-center'>
          Hello this is jeremy <span className='waving-hand'>👋</span>
        </h1>
        <p className='text-neutral-400 text-center text-lg'>
          Extra text filler to make page nicer
        </p>
      </div>
      
      <div className='w-full h-full absolute inset-0'>
      <Leva />
        <Canvas className='w-full h-full'>
            
            <Suspense fallback={<CanvasLoader />}>

            </Suspense>

            <PerspectiveCamera makeDefault position={[0, 5, 30]} />
            <HackerRoom 
                scale={controls.scale} 
                position={[controls.positionX, controls.positionY, controls.positionZ]} 
                rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
            />
            
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
