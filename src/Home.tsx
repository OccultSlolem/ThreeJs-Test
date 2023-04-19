import "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, Mesh, Vector3 } from "three";
import { Canvas } from "@react-three/fiber";

const Rocket = ({ scale = 1 }: {scale?: number}) => {
  const mesh = useRef<Mesh | null>(null);

  useEffect(() => {
    if (!mesh || !mesh.current) return;
    mesh.current.scale.set(scale, scale, scale);
  }, [mesh])
  return (
    <>
      {/* Body */}
      <mesh ref={mesh} position={[0,0,0]} scale={[1,1,1]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
      </mesh>
      {/* Nose */}
      <mesh position={[0,1.5,0]} scale={[1,1,1]}>
        <coneBufferGeometry args={[0.5,0.5,32]} />
      </mesh>
      {/* Engine */}
      <mesh position={[0,-1.5,0]} scale={[1,1,1]}>
        <coneBufferGeometry args={[0.5, 0.5, 32]} />
      </mesh>
    </>
  )
}

export default function Home() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} position={[1,1,0]} />
      <Rocket scale={1}/>
    </Canvas>
  )
}
