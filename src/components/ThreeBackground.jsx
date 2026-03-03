import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../provider/ThemeProvider";

export default function ThreeBackground() {
  const mountRef = useRef(null);
  const { theme } = useTheme();
  // Usamos refs para acceder a los objetos de Three desde fuera del loop principal
  const rendererRef = useRef(null);
  const starMaterialRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer; // Guardamos referencia

    // Crear estrellas
    const starGeometry = new THREE.BufferGeometry();
    const starCount = window.innerWidth < 768 ? 600 : 1500;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 100;
    }
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );

    // Material de estrellas con referencia para cambiar el color
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    starMaterialRef.current = starMaterial;

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      starField.rotation.x += mouseY * 0.005;
      starField.rotation.y += mouseX * 0.005;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.x += 0.0005;
      starField.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  // SEGUNDO EFECTO: Reacciona al cambio de tema
  useEffect(() => {
    if (rendererRef.current && starMaterialRef.current) {
      if (theme === "light") {
        // Blanco Hueso (Bone White: #F9F6EE)
        rendererRef.current.setClearColor(0xf9f6ee, 1);
        // Estrellas oscuras para que se vean en el fondo blanco
        starMaterialRef.current.color.set(0x8a2be2); // Usamos tu color primary para las estrellas en modo light
      } else {
        // Negro para Default y Dark
        rendererRef.current.setClearColor(0x000000, 1);
        // Estrellas blancas
        starMaterialRef.current.color.set(0xffffff);
      }
    }
  }, [theme]); // Se dispara cada vez que cambia el tema

  return <div ref={mountRef} className="fixed inset-0 z-0 w-full h-full" />;
}