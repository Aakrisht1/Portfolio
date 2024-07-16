import { Environment, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'


export const Experience = () => {


  const ref = useRef();
    useFrame(({ clock }) => {
      if (ref.current) {
        ref.current.rotation.y += 0.003;
      }
    });

  return (
    <>
      <Environment preset="sunset" />
      <group position-y={-0.7} position-x={1.5}>
        <mesh ref={ref} position-x={0.2} position-y={0.15}>
          <Avatar />
          <mesh position-z={-0.25} position-y={0.25} scale={[0.8, 0.5, 0.8]}>
            <boxGeometry />
            <meshStandardMaterial color={"#ffd300"} />
          </mesh>
        </mesh>
        
      </group>
    </>
  );
};