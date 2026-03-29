"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { HeroOrb } from "@/components/three/hero-orb";

export function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} />
      <pointLight position={[-2, -1, 2]} intensity={0.8} color="#7dd3fc" />
      <Float speed={1.2} floatIntensity={0.55}>
        <HeroOrb />
      </Float>
    </Canvas>
  );
}
