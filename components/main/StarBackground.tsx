"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const filterInvalidValues = (data: any) => {
  const filteredData = [];
  for (let i = 0; i < data.length; i += 3) {
    if (
      Number.isFinite(data[i]) &&
      Number.isFinite(data[i + 1]) &&
      Number.isFinite(data[i + 2])
    ) {
      filteredData.push(data[i], data[i + 1], data[i + 2]);
    }
  }
  return new Float32Array(filteredData);
};

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() => {
    const generatedSphere = random.inSphere(new Float32Array(5000 ), {
      radius: 1.2,
    });
    return filterInvalidValues(generatedSphere);
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/10;
    ref.current.rotation.y -= delta/15;
  })


  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="$fff"
                size={0.002}
                sizeAttenuation={true}
                dethWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;
