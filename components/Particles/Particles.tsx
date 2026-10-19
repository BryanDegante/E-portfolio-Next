'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticlesProps {
  particleCount: number;
  color: THREE.ColorRepresentation;
}

export default function Particles({
  particleCount,
  color,
}: ParticlesProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) return;

    let animationFrameId = 0;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      speeds[i] = 0.001 + Math.random() * 0.003;
    }

    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3),
    );

    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      return;
    }

    const gradient = ctx.createRadialGradient(
      16, 16, 0,
      16, 16, 16,
    );

    gradient.addColorStop(0, 'rgba(96, 165, 250, 1)');
    gradient.addColorStop(1, 'rgba(96, 165, 250, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.08,
      map: texture,
      transparent: true,
      alphaTest: 0.01,
      depthWrite: false,
      color,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const positionsArray = geometry.attributes.position
        .array as Float32Array;

      const seconds = time * 0.001;

      for (let i = 0; i < particleCount; i++) {
        positionsArray[i * 3 + 1] +=
          Math.sin(seconds + i) * speeds[i];

        positionsArray[i * 3] +=
          Math.cos(seconds * 0.5 + i) * speeds[i] * 0.5;

        if (positionsArray[i * 3 + 1] > 6) {
          positionsArray[i * 3 + 1] = -6;
        }

        if (positionsArray[i * 3 + 1] < -6) {
          positionsArray[i * 3 + 1] = 6;
        }
      }

      geometry.attributes.position.needsUpdate = true;

      points.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);

      scene.remove(points);

      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [particleCount, color]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}