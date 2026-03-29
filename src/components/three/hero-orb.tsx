"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

export function HeroOrb() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.35, 32]} />
      <meshStandardMaterial
        color="#4f9bf7"
        metalness={0.45}
        roughness={0.18}
        emissive="#10406d"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}
