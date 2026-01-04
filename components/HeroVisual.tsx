"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"
import { OrbitControls, Float } from "@react-three/drei"

function RotatingShape() {
  const meshRef = useRef<Mesh>(null!)
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.3
    meshRef.current.rotation.x += delta * 0.2
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.5, 0.4, 100, 16]} />
      <meshStandardMaterial 
        color="black" 
        wireframe 
        transparent 
        opacity={0.8}
      />
    </mesh>
  )
}

export default function HeroVisual() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[10, 10, 10]} intensity={Math.PI} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <RotatingShape />
        </Float>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}