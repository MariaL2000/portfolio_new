import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // transparente
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // fondo transparente
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // estrellas
    const starGeometry = new THREE.BufferGeometry();
    const starCount = window.innerWidth < 768 ? 600 : 1500; // menos en mobile
    const starPosition = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPosition[i] = (Math.random() - 0.5) * 100;
    }
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPosition, 3)
    );
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // parallax
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      starField.rotation.x += mouseY * 0.01;
      starField.rotation.y += mouseX * 0.01;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // render loop
    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.x += 0.001;
      starField.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-1 w-full h-full" />;
}
