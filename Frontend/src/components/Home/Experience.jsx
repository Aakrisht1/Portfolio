import { Environment, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { AmbientLight } from "three";

export const Experience = () => {
  return (
    <>
    <Sky />
    <Environment preset="sunset" />
      <group position-y={-0.7} position-x={1.5}>
        <Avatar />
      <mesh position-z={-0.25} position-y={0.25} scale={[0.8, 0.5, 0.8]}>
        <boxGeometry />
        <meshStandardMaterial color={"#ffd300"} />
      </mesh>
      <mesh scale={15} position-y={-5} position-z={-0.5}>
        <planeGeometry />
        <meshStandardMaterial color={"#000039"}/>
      </mesh>
      </group>
    </>
  );
};
