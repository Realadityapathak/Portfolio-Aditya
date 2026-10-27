"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function CrystalShape({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock, mouse }) => {
    if (!ref.current || reduced) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.3 + mouse.x * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.5) * 0.15 + mouse.y * 0.1;
    ref.current.position.y = 0.1 + Math.sin(t * 0.8) * 0.15;
  });
  return (
    <Float speed={reduced ? 0 : 2} rotationIntensity={reduced ? 0 : 0.2} floatIntensity={reduced ? 0 : 0.8}>
      <mesh ref={ref} position={[0.7, 0.1, 0]} scale={1.3}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshPhysicalMaterial
          color="#b0d0ff"
          metalness={0.2}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.05}
          transmission={0.8}
          thickness={0.6}
          ior={1.4}
        />
      </mesh>
    </Float>
  );
}

function Particles({ reduced }: { reduced: boolean }) {
  const count = 300;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    let s = 12345;
    const rand = () => { s = (s * 16807) % 2147483647; return (s / 2147483647); };
    for (let i = 0; i < count * 3; i++) arr[i] = (rand() - 0.5) * 6;
    return arr;
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (ref.current && !reduced) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#d0ff00" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  const reduced = usePrefersReducedMotion();
  return (
    <>
      {/* Mobile & tablet ambient glow fallback (keeps text 100% readable) */}
      <div className="lg:hidden absolute inset-0 z-10 pointer-events-none flex items-center justify-center" aria-hidden="true">
        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400/10 to-lime-400/10 blur-3xl opacity-50" />
      </div>
      <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-[#0f172a] to-[#0a0e17]" aria-hidden="true">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 3, 3]} intensity={2.2} color="#e6fff0" />
          <pointLight position={[-2, -1, -2]} intensity={2} color="#d0ff00" />
          <CrystalShape reduced={reduced} />
          <Particles reduced={reduced} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </Canvas>
      </div>
    </>
  );
}
