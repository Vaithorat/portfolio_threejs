import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Shiba = () => {
  const shiba = useGLTF("./shiba/scene.gltf");

  return <primitive object={shiba.scene} scale={2.5} rotation-y={0} />;
};

const ShibaCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Shiba />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ShibaCanvas;
