import { useRef, useState, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { TextureLoader, MathUtils, Mesh, Group } from "three";
import { motion, useInView } from "framer-motion";
import SectionHeading from "../SectionHeading";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

// Staggered 2-row grid positions (some higher, some lower)
const cardPositions = [
  { x: -5.2, y: 0.6, phase: 0 },
  { x: -3.6, y: -0.4, phase: 0.8 },
  { x: -1.8, y: 0.3, phase: 1.6 },
  { x: -0.2, y: -0.5, phase: 2.4 },
  { x: 1.6, y: 0.5, phase: 3.2 },
  { x: 3.2, y: -0.3, phase: 4.0 },
  { x: 4.8, y: 0.4, phase: 4.8 },
  { x: 6.4, y: -0.2, phase: 5.6 },
];

interface FloatingCardProps {
  image: string;
  position: { x: number; y: number; phase: number };
  index: number;
  mousePos: { x: number; y: number };
  isVisible: boolean;
  onSelect: (index: number) => void;
}

const FloatingCard = ({ image, position, index, mousePos, isVisible, onSelect }: FloatingCardProps) => {
  const meshRef = useRef<Group>(null);
  const innerRef = useRef<Mesh>(null);
  const texture = useLoader(TextureLoader, image);
  const { viewport } = useThree();

  const targetRotX = useRef(0);
  const targetRotY = useRef(0);
  const targetPosX = useRef(0);
  const targetPosY = useRef(0);
  const currentZ = useRef(-8);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    // Floating bob animation
    const bobY = Math.sin(t * 0.8 + position.phase) * 0.08;
    const bobX = Math.cos(t * 0.5 + position.phase) * 0.03;

    // Mouse parallax tilt (up to 15 degrees)
    const maxTilt = MathUtils.degToRad(15);
    targetRotX.current = MathUtils.lerp(targetRotX.current, -mousePos.y * maxTilt, 0.05);
    targetRotY.current = MathUtils.lerp(targetRotY.current, mousePos.x * maxTilt, 0.05);

    // Magnetic attraction toward cursor (max ~0.15 units in 3D)
    const cardScreenX = position.x / (viewport.width / 2);
    const cardScreenY = position.y / (viewport.height / 2);
    const dx = mousePos.x - cardScreenX;
    const dy = mousePos.y - cardScreenY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const magnetStrength = Math.max(0, 1 - dist / 1.5) * 0.15;
    targetPosX.current = MathUtils.lerp(targetPosX.current, dx * magnetStrength, 0.05);
    targetPosY.current = MathUtils.lerp(targetPosY.current, dy * magnetStrength, 0.05);

    // Entrance from z-depth
    const targetZ = isVisible ? 0 : -8;
    currentZ.current = MathUtils.lerp(currentZ.current, targetZ, 0.03 + index * 0.003);

    meshRef.current.position.set(
      position.x + bobX + targetPosX.current,
      position.y + bobY + targetPosY.current,
      currentZ.current
    );
    meshRef.current.rotation.x = targetRotX.current;
    meshRef.current.rotation.y = targetRotY.current;

    // Hover scale
    if (innerRef.current) {
      const s = hovered ? 1.08 : 1;
      innerRef.current.scale.x = MathUtils.lerp(innerRef.current.scale.x, s, 0.1);
      innerRef.current.scale.y = MathUtils.lerp(innerRef.current.scale.y, s, 0.1);
    }
  });

  // Depth of field simulation via opacity
  const distFromCenter = Math.abs(position.x) / 6;

  return (
    <group ref={meshRef} position={[position.x, position.y, -8]}>
      {/* Holographic gradient border - rotates */}
      <mesh rotation={[0, 0, 0]}>
        <planeGeometry args={[2.0, 1.6]} />
        <meshBasicMaterial color="#1E66F5" transparent opacity={0.15 + (hovered ? 0.15 : 0)} />
      </mesh>

      {/* Main image plane */}
      <mesh
        ref={innerRef}
        position={[0, 0, 0.01]}
        onPointerEnter={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}
        onClick={() => onSelect(index)}
      >
        <planeGeometry args={[1.88, 1.48]} />
        <meshBasicMaterial map={texture} transparent opacity={1 - distFromCenter * 0.15} />
      </mesh>

      {/* Glass morphism overlay on edges */}
      <mesh position={[0, 0, 0.02]}>
        <planeGeometry args={[1.88, 1.48]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={hovered ? 0.08 : 0.03} />
      </mesh>

      {/* Reflection layer below */}
      <mesh position={[0, -1.1, -0.01]} rotation={[Math.PI, 0, 0]}>
        <planeGeometry args={[1.88, 0.6]} />
        <meshBasicMaterial map={texture} transparent opacity={0.08} />
      </mesh>
    </group>
  );
};

const Scene = ({ mousePos, isVisible, onSelect }: {
  mousePos: { x: number; y: number };
  isVisible: boolean;
  onSelect: (index: number) => void;
}) => {
  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#1E66F5" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#60a5fa" />

      {galleryImages.map((img, i) => (
        <FloatingCard
          key={`gallery-${i}`}
          image={img}
          position={cardPositions[i]}
          index={i}
          mousePos={mousePos}
          isVisible={isVisible}
          onSelect={onSelect}
        />
      ))}
    </>
  );
};

const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePos({ x, y });
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="section-container section-padding">
        <SectionHeading
          badge="Gallery"
          title="A Glimpse Into Our World"
          subtitle="From the farm to your family - the people, the process, and the passion behind every drop."
        />
      </div>

      <div
        ref={containerRef}
        className="relative mt-10 h-[500px] md:h-[600px] lg:h-[650px] cursor-crosshair"
        onMouseMove={handleMouseMove}
      >
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <Scene mousePos={mousePos} isVisible={isInView} onSelect={setSelectedImage} />
          </Suspense>
        </Canvas>
      </div>

      {/* Fullscreen modal on click */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-md cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.7, rotateY: -90 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0.7, rotateY: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative max-w-4xl w-[90vw] perspective-[1000px]"
            style={{ transformStyle: "preserve-3d" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={galleryImages[selectedImage]} alt="Gomukhi gallery image" className="w-full rounded-2xl shadow-2xl" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/40 transition-colors"
            >
              X
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
