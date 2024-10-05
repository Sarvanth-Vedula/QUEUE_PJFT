import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";

const Model = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.y += 0.006));
  const gltf = useLoader(GLTFLoader, "./dog.glb");
  return (
    <>
      <primitive
        ref={mesh}
        object={gltf.scene}
        scale={1}
        position={[0, -1, 0]}
      />
    </>
  );
};

export default function DogModel() {
  return (
    <div className="h-[550px] w-full md:h-full">
      <Canvas camera={{ position: [5, 5, 6], fov: 65 }}>
        <ambientLight intensity={1.8} />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls enableZoom={false} enableRotate={true} enablePan={true}/>
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
