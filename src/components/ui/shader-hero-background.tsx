import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshGradient } from "@paper-design/shaders-react";
import { ShaderPlane, EnergyRing } from "./background-paper-shaders";

const DARK_GRADIENT_COLORS = ["#000000", "#0a0a0a", "#141414", "#1f1f1f"];

export default function ShaderHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base MeshGradient layer */}
      <MeshGradient
        colors={DARK_GRADIENT_COLORS}
        distortion={0.6}
        speed={0.15}
        swirl={0.6}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Three.js shader overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ background: "transparent", pointerEvents: "none" }}
          gl={{ alpha: true, antialias: true }}
        >
          <Suspense fallback={null}>
            <ShaderPlane position={[0, 0, 0]} color1="#0d0d0d" color2="#1a1a1a" />
            <EnergyRing radius={2.2} position={[0, 0, -0.5]} />
            <EnergyRing radius={3} position={[0, 0, -1]} />
          </Suspense>
        </Canvas>
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 z-[2] bg-black/20" />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}
