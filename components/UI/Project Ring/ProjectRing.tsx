'use client';

import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import RingCard from './RingCard';
import { ProjectsData } from '@/data/ProjectData';
import { RootState } from '@/redux/store';

export default function ProjectRing() {
  const language = useSelector((state: RootState) => state.language.language);

  const featuredProjects = ProjectsData.filter((project) => project.featured);

  const total = featuredProjects.length;
  const angleStep = total > 0 ? 360 / total : 0;

  const [rotationY, setRotationY] = useState(0);
  const [radius, setRadius] = useState(130);

  const ringRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setRadius(130);
      } else if (width < 1024) {
        setRadius(220);
      } else {
        setRadius(300);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);

    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('a')) return;
    if (total < 2) return;

    isDragging.current = true;
    startX.current = e.clientX;
    startRotation.current = rotationRef.current;

    e.currentTarget.setPointerCapture(e.pointerId);
    gsap.killTweensOf(ringRef.current);

    e.currentTarget.style.cursor = 'grabbing';
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const deltaX = e.clientX - startX.current;
    const newRotation = startRotation.current + deltaX * 0.4;

    rotationRef.current = newRotation;

    if (ringRef.current) {
      ringRef.current.style.transform = `rotateY(${newRotation}deg)`;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    isDragging.current = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    e.currentTarget.style.cursor = 'grab';

    if (angleStep === 0) return;

    const nearestIndex = Math.round(-rotationRef.current / angleStep);

    const targetRotation = nearestIndex * -angleStep;
    const animation = { rotation: rotationRef.current };

    gsap.to(animation, {
      rotation: targetRotation,
      duration: 0.65,
      ease: 'power3.out',
      onUpdate: () => {
        rotationRef.current = animation.rotation;

        if (ringRef.current) {
          ringRef.current.style.transform = `rotateY(${animation.rotation}deg)`;
        }
      },
      onComplete: () => {
        setRotationY(animation.rotation);
      },
    });
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;

    gsap.killTweensOf(ringRef.current);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    e.currentTarget.style.cursor = 'grab';

    if (ringRef.current) {
      ringRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
    }

    setRotationY(rotationRef.current);
  };

  if (total === 0) return null;

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className='
        relative my-8 flex h-[400px] w-full
        items-center justify-center overflow-visible
        [perspective:900px]
        cursor-grab select-none touch-pan-y
        active:cursor-grabbing
        sm:my-12 sm:h-[500px]
        sm:[perspective:1000px]
      '>
      <div
        ref={ringRef}
        style={{
          transform: `rotateY(${rotationY}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className='absolute left-1/2 top-1/2 h-0 w-0'>
        {featuredProjects.map((project, index) => {
          const cardAngle = index * angleStep;

          const currentAngle =
            ((((cardAngle + rotationY + 180) % 360) + 360) % 360) - 180;

          const distance = Math.abs(currentAngle);

          const scale = Math.max(0.82, 1 - distance / 650);
          const opacity = Math.max(0.7, 1 - distance / 400);
          const zIndex = Math.round(100 - distance);
          const isFront = distance < angleStep / 2;

          return (
            <RingCard
              key={project.id}
              url={project.website}
              imgLink={project.screenshot}
              title={project.name[language]}
              index={index}
              angleStep={angleStep}
              radius={radius}
              scale={scale}
              opacity={opacity}
              zIndex={zIndex}
              isFront={isFront}
            />
          );
        })}
      </div>
    </div>
  );
}
