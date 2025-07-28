import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Peranuevaaa(props) {
  const { nodes, materials } = useGLTF('/peranuevaaa-transformed.glb');
  const group = useRef();

  useFrame((state, delta) => {
    if (props.isMobile && group.current) {
      group.current.rotation.x = -0.251; // Remove depth rotation
      group.current.rotation.z = 2.5; // Remove depth rotation
      group.current.rotation.y += delta * 0.5; // Slow rotation around Y-axis
    }
  });

  return (
    <group ref={group} {...props} position={[-0.251, 2.5, -0.229]} rotation={[-0.1, 3.5, 0.1]} dispose={null}>
      <group scale={[0.064, 0.635, 0.064]}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.PaletteMaterial002} />
        <mesh geometry={nodes.Cylinder_2.geometry} material={materials.PaletteMaterial005} />
        <mesh geometry={nodes.Cylinder_3.geometry} material={materials.PaletteMaterial006} />
        <mesh geometry={nodes.Cylinder_4.geometry} material={materials.PaletteMaterial007} />
        <mesh geometry={nodes.Cylinder_5.geometry} material={materials.PaletteMaterial003} />
        <mesh geometry={nodes.Cylinder_6.geometry} material={materials.PaletteMaterial004} />
      </group>
    </group>
  );
}

useGLTF.preload('/peranuevaaa-transformed.glb');
