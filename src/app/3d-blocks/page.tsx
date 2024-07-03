"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ThreeDBlocks() {
  return (
    <div className="h-[1000px] w-full">
      <Canvas camera={{ position: [0, 6, 12], fov: 45 }}>
        <ambientLight intensity={Math.PI / 2} />
        {/* <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          decay={0}
          intensity={1}
        /> */}
        {/* <directionalLight
          castShadow
          position={[0, 10, 10]}
          color={"white"}
          intensity={1}
        /> */}
        <rectAreaLight args={[, 10, 10, 10]} position={[20, 15, 20]} />
        <mesh name="cube" position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#9E9E9E" />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10, 20, 20]} />
          <meshStandardMaterial color="#2E2E2E" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
