import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PhoneModel({ currentSection }) {
  const { scene } = useGLTF("/Models/phone.glb");
  const modelRef = useRef();
  const getPositionForSection = (section) => {
    return section % 2 === 0 ? [2.5, 0, 0] : [-2.5, 0, 0];
  };
  const getRotationForSection = (section) => {
    return section % 2 === 0 ? [0, -0.5, 0] : [0, 0.5, 0];
  };

  useEffect(() => {
    if (!modelRef.current) return;

    const targetPosition = getPositionForSection(currentSection);
    const targetRotation = getRotationForSection(currentSection);

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power3.inOut" },
    });

    tl.to(modelRef.current.position, {
      x: targetPosition[0],
      y: targetPosition[1],
      z: targetPosition[2],
    }).to(
      modelRef.current.rotation,
      {
        x: targetRotation[0],
        y: targetRotation[1],
        z: targetRotation[2],
      },
      "<"
    );
  }, [currentSection]);

  useEffect(() => {
    if (modelRef.current) {
      const initialPosition = getPositionForSection(0);
      const initialRotation = getRotationForSection(0);
      modelRef.current.position.set(...initialPosition);
      modelRef.current.rotation.set(...initialRotation);
    }
  }, []);

  return <primitive ref={modelRef} object={scene} scale={[15, 15, 15]} />;
}

const features = [
  {
    title: "Duygu Durum Takibi",
    description: "Duygu durumunuzu izleyin ve analiz edin.",
    modelPosition: [3, 0, 0],
    modelRotation: [0, -0.5, 0],
    textPosition: "left",
  },
  {
    title: "Psikolog Onaylı Öneriler",
    description: "Psikologlar tarafından onaylanmış öneriler alın.",
    modelPosition: [-3, 0, 0],
    modelRotation: [0, 0.5, 0],
    textPosition: "right",
  },
  {
    title: "Haftalık Raporlar",
    description: "Haftalık ilerleme raporları ile gelişiminizi takip edin.",
    modelPosition: [3, 0, 0],
    modelRotation: [0, -0.5, 0],
    textPosition: "left",
  },
  {
    title: "Sanal Grup Terapisi",
    description: "Sanal grup terapisi seanslarına katılın.",
    modelPosition: [-3, 0, 0],
    modelRotation: [0, 0.5, 0],
    textPosition: "right",
  },
  {
    title: "Meditasyon Seansları",
    description: "Meditasyon seansları ile rahatlayın.",
    modelPosition: [3, 0, 0],
    modelRotation: [0, -0.5, 0],
    textPosition: "left",
  },
  {
    title: "Sesli Mesajlaşma",
    description: "Sesli mesajlaşma ile anında destek alın.",
    modelPosition: [-3, 0, 0],
    modelRotation: [0, 0.5, 0],
    textPosition: "right",
  },
  {
    title: "Kaynak Kütüphanesi",
    description: "Psikologların eklediği kaynaklara erişin.",
    modelPosition: [3, 0, 0],
    modelRotation: [0, -0.5, 0],
    textPosition: "left",
  },
  {
    title: "Kişisel Gelişim Hedefleri",
    description: "Kişisel gelişim hedeflerinizi belirleyin ve yönetin.",
    modelPosition: [-3, 0, 0],
    modelRotation: [0, 0.5, 0],
    textPosition: "right",
  },
];

export default function AppPreview() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef();

  const nextSlide = () => {
    if (currentSection < features.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  useEffect(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
    });
  }, []);

  return (
    <div ref={containerRef} className="h-screen relative overflow-hidden">
      <div className={`transition-all duration-500 absolute inset-0 z-0`}>
        <Canvas camera={{ position: [0, 0, 12], fov: 25 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <PhoneModel currentSection={currentSection} />
        </Canvas>
      </div>
      <div className="absolute z-20 bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSection === index ? "bg-accentDark" : "bg-textLight"
            }`}
          />
        ))}
      </div>

      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center"
          >
            <div
              className={` ${
                features[currentSection].textPosition === "left"
                  ? "ml-80"
                  : "ml-auto mr-80"
              }`}
            >
              <h2 className="text-6xl font-bold text-textDark mb-4">
                {features[currentSection].title}
              </h2>
              <p className="text-textLight text-3xl">
                {features[currentSection].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={prevSlide}
        className={`absolute z-20 left-8 top-1/2 -translate-y-1/2 ${
          currentSection === 0 ? "opacity-30" : "opacity-100"
        }`}
      >
        <span className=" material-symbols-rounded text-4xl text-accentDark">
          arrow_back
        </span>
      </button>
      <button
        onClick={nextSlide}
        className={`absolute z-20 right-8 top-1/2 -translate-y-1/2 ${
          currentSection === features.length - 1 ? "opacity-30" : "opacity-100"
        }`}
      >
        <span className="material-symbols-rounded text-4xl text-accentDark">
          arrow_forward
        </span>
      </button>
    </div>
  );
}
