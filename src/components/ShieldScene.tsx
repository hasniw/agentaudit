"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Shield() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _particlePositions = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.3;
      ringRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = -t * 0.05;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {/* Shield body */}
        <mesh>
          <octahedronGeometry args={[1.2, 2]} />
          <meshStandardMaterial
            color="#dc2626"
            metalness={0.8}
            roughness={0.2}
            wireframe={false}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Inner glow */}
        <mesh>
          <octahedronGeometry args={[1.0, 2]} />
          <meshStandardMaterial
            color="#ef4444"
            emissive="#ef4444"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Lock icon (simplified as torus + box) */}
        <mesh position={[0, 0.15, 0.8]}>
          <torusGeometry args={[0.25, 0.06, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#fca5a5" emissive="#fca5a5" emissiveIntensity={0.3} metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.1, 0.8]}>
          <boxGeometry args={[0.45, 0.35, 0.08]} />
          <meshStandardMaterial color="#fca5a5" emissive="#fca5a5" emissiveIntensity={0.3} metalness={0.7} roughness={0.3} />
        </mesh>
      </group>

      {/* Orbiting ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1} transparent opacity={0.6} />
      </mesh>

      {/* Second ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.8, 0.015, 16, 100]} />
        <meshStandardMaterial color="#b91c1c" emissive="#b91c1c" emissiveIntensity={0.5} transparent opacity={0.4} />
      </mesh>

      {/* Particles - CSS based fallback */}
    </>
  );
}

export default function ShieldScene() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#ef4444" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#7f1d1d" />
        <pointLight position={[0, 0, 3]} intensity={0.3} color="#fca5a5" />
        <Shield />
      </Canvas>
    </div>
  );
}
