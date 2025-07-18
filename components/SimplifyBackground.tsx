"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { SimplifyModifier } from "three/examples/jsm/modifiers/SimplifyModifier.js";
import { useEffect, useMemo } from "react";

function Scene() {
  const { scene, camera } = useThree();
  // scene.background = new THREE.Color(0x000000); // For debugging visibility

  useEffect(() => {
    camera.position.z = 30; // Adjusted camera position
  }, [camera]);

  const { nodes } = useGLTF("/models/LeePerrySmith.glb");

  const originalMesh = useMemo(() => {
    const mesh = nodes.LeePerrySmith as THREE.Mesh;
    if (mesh) {
      const clonedMesh = mesh.clone();
      clonedMesh.scale.set(2, 2, 2); // Adjusted scale
      clonedMesh.position.set(-9, 0, 0);
      clonedMesh.rotation.y = Math.PI / 2;
      return clonedMesh;
    }
    return null;
  }, [nodes]);

  const simplifiedMesh = useMemo(() => {
    if (!originalMesh) return null;

    const modifier = new SimplifyModifier();
    const simplified = originalMesh.clone();
    simplified.material = (simplified.material as THREE.Material).clone();
    (simplified.material as THREE.MeshStandardMaterial).flatShading = true;

    const count = Math.floor(
      simplified.geometry.attributes.position.count * 0.875
    );
    simplified.geometry = modifier.modify(simplified.geometry, count);

    simplified.position.x = 9;
    simplified.rotation.y = -Math.PI / 2;
    simplified.scale.set(2, 2, 2); // Adjusted scale

    return simplified;
  }, [originalMesh]);

  useEffect(() => {
    if (originalMesh) scene.add(originalMesh);
    if (simplifiedMesh) scene.add(simplifiedMesh);

    return () => {
      if (originalMesh) scene.remove(originalMesh);
      if (simplifiedMesh) scene.remove(simplifiedMesh);
    };
  }, [scene, originalMesh, simplifiedMesh]);

  useFrame(({ clock }) => {
    if (originalMesh && simplifiedMesh) {
      const t = clock.getElapsedTime() * 0.3;
      originalMesh.rotation.y = Math.PI / 2 + t;
      simplifiedMesh.rotation.y = -Math.PI / 2 - t;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[0, 10, 10]} intensity={400} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export default function SimplifyBackground() {
  return (
    <Canvas
      camera={{ fov: 40 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Scene />
    </Canvas>
  );
}
