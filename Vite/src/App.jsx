import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

const RotatingSphere = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[15, 32, 16]} />
      <meshStandardMaterial 
        color={0xF0FFFF} 
        emissive={0xF0FFFF} 
        emissiveIntensity={0.2}
        metalness={0.2}
        roughness={0.1}
      />
      <Sparkles 
        count={150} 
        scale={100}
        size={50} 
        speed={0.2} 
        noise={0.5}
        color="yellow"
        position={[0, 0, 0]} 
        spherical
      />
      <Sparkles 
        count={100} 
        scale={20}
        size={25} 
        speed={0.3} 
        noise={0.3}
        color="white"
        position={[0, 0, 0]} 
        spherical
      />
    </mesh>
  );
};

const TorusRing = ({ radius, reverse }) => {
  const torusRef = useRef();

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += reverse ? -0.02 : 0.04;
      torusRef.current.rotation.y += reverse ? -0.3 : 0.3;
    }
  });

  return (
    <mesh ref={torusRef} position={[0, 0, 0]}>
      <torusGeometry args={[radius, 0.5, 16, 100]} />
      <meshStandardMaterial color={0xffd700} metalness={0.6} roughness={0.3} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom enablePan enableRotate />
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[30, 30, 50]} 
        intensity={1.5} 
        color={0xffffff} 
        castShadow
      />
      <spotLight 
        position={[50, 50, 50]} 
        angle={0.4} 
        penumbra={1} 
        intensity={2.5} 
        distance={300}
        color={0xffd700} 
        castShadow
      />
      <color attach="background" args={['#1a1a1a']} />
      <RotatingSphere />
      <TorusRing radius={18} reverse={false} />
      <TorusRing radius={22} reverse={true} />
    </Canvas>
  );
};

export default App;
