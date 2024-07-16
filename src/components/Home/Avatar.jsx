

import React, { useEffect, useRef } from 'react'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('Models/6650bdaf5cf5f4e6c6e6839a.glb');  
  
  nodes.Hips.name = 'mixamorigHips';
  nodes.Spine.name = 'mixamorigSpine';
  nodes.Spine1.name = 'mixamorigSpine1';
  nodes.Spine2.name = 'mixamorigSpine2';
  nodes.Neck.name = 'mixamorigNeck';
  nodes.Head.name = 'mixamorigHead';
  nodes.LeftShoulder.name = 'mixamorigLeftShoulder';
  nodes.LeftArm.name = 'mixamorigLeftArm';
  nodes.LeftForeArm.name = 'mixamorigLeftForeArm';
  nodes.LeftHand.name = 'mixamorigLeftHand';
  nodes.LeftHandThumb1.name = 'mixamorigLeftHandThumb1';
  nodes.LeftHandThumb2.name = 'mixamorigLeftHandThumb2';
  nodes.LeftHandThumb3.name = 'mixamorigLeftHandThumb3';
  nodes.LeftHandIndex1.name = 'mixamorigLeftHandIndex1';
  nodes.LeftHandIndex2.name = 'mixamorigLeftHandIndex2';
  nodes.LeftHandIndex3.name = 'mixamorigLeftHandIndex3';
  nodes.LeftHandMiddle1.name = 'mixamorigLeftHandMiddle1';
  nodes.LeftHandMiddle2.name = 'mixamorigLeftHandMiddle2';
  nodes.LeftHandMiddle3.name = 'mixamorigLeftHandMiddle3';
  nodes.LeftHandRing1.name = 'mixamorigLeftHandRing1';
  nodes.LeftHandRing2.name = 'mixamorigLeftHandRing2';
  nodes.LeftHandRing3.name = 'mixamorigLeftHandRing3';
  nodes.LeftHandPinky1.name = 'mixamorigLeftHandPinky1';
  nodes.LeftHandPinky2.name = 'mixamorigLeftHandPinky2';
  nodes.LeftHandPinky3.name = 'mixamorigLeftHandPinky3';
  nodes.RightShoulder.name = 'mixamorigRightShoulder';
  nodes.RightArm.name = 'mixamorigRightArm';
  nodes.RightForeArm.name = 'mixamorigRightForeArm';
  nodes.RightHand.name = 'mixamorigRightHand';
  nodes.RightHandThumb1.name = 'mixamorigRightHandThumb1';
  nodes.RightHandThumb2.name = 'mixamorigRightHandThumb2';
  nodes.RightHandThumb3.name = 'mixamorigRightHandThumb3';
  nodes.RightHandIndex1.name = 'mixamorigRightHandIndex1';
  nodes.RightHandIndex2.name = 'mixamorigRightHandIndex2';
  nodes.RightHandIndex3.name = 'mixamorigRightHandIndex3';
  nodes.RightHandMiddle1.name = 'mixamorigRightHandMiddle1';
  nodes.RightHandMiddle2.name = 'mixamorigRightHandMiddle2';
  nodes.RightHandMiddle3.name = 'mixamorigRightHandMiddle3';
  nodes.RightHandRing1.name = 'mixamorigRightHandRing1';
  nodes.RightHandRing2.name = 'mixamorigRightHandRing2';
  nodes.RightHandRing3.name = 'mixamorigRightHandRing3';
  nodes.RightHandPinky1.name = 'mixamorigRightHandPinky1';
  nodes.RightHandPinky2.name = 'mixamorigRightHandPinky2';
  nodes.RightHandPinky3.name = 'mixamorigRightHandPinky3';
  nodes.LeftUpLeg.name = 'mixamorigLeftUpLeg';
  nodes.LeftLeg.name = 'mixamorigLeftLeg';
  nodes.LeftFoot.name = 'mixamorigLeftFoot';
  nodes.LeftToeBase.name = 'mixamorigLeftToeBase';
  nodes.RightUpLeg.name = 'mixamorigRightUpLeg';
  nodes.RightLeg.name = 'mixamorigRightLeg';
  nodes.RightFoot.name = 'mixamorigRightFoot';
  nodes.RightToeBase.name = 'mixamorigRightToeBase';
  
  const {animations: typingAnimation} = useFBX("animation/Typing.fbx");
  
  typingAnimation[0].name="Typing";
  
  const {actions} = useAnimations(typingAnimation, group);
  
  useEffect(() => {
    actions["Typing"].reset().play();
    group.current.rotation.x = -0.1;
    group.current.rotation.y = -0.2;
    group.current.rotation.z = 0;
    }, []);
    
    return (
      <group {...props} ref = {group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
    )
}

useGLTF.preload('Models/6650bdaf5cf5f4e6c6e6839a.glb')
