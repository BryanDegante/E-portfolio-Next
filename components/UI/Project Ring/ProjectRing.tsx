'use client';

import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import RingCard from './RingCard';
import { ProjectsData } from '@/data/ProjectData';
import { RootState } from '@/redux/store';


export default function ProjectRing() {
  const language = useSelector(
    (state: RootState) => state.language.language,
  );

  const featuredProjects = ProjectsData.filter(
    (project) => project.featured,
  );

  const total = featuredProjects.length;
  const angleStep = total > 0 ? 360 / total : 0;

  const [rotationY, setRotationY] = useState(0);
  const [radius, setRadius] = useState(130);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isDraggingState, setIsDraggingState] = useState(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const autoRotation = useRef<gsap.core.Tween | null>(null);

  const isPointerDown = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);

  const interactionPaused =
    hoveredIndex !== null ||
    selectedIndex !== null ||
    isDraggingState;

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setRadius(160);
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

  useEffect(() => {
    if (total < 2 || interactionPaused) return;

    const animation = {
      rotation: rotationRef.current,
    };

    const tween = gsap.to(animation, {
      rotation: rotationRef.current - 360,
      duration: 35,
      ease: 'none',
      repeat: -1,

      onUpdate: () => {
        rotationRef.current = animation.rotation;
        setRotationY(animation.rotation);

        if (ringRef.current) {
          ringRef.current.style.transform =
            `rotateY(${animation.rotation}deg)`;
        }
      },
    });

    autoRotation.current = tween;

    return () => {
      tween.kill();

      if (autoRotation.current === tween) {
        autoRotation.current = null;
      }
    };
  }, [interactionPaused, total]);

  const handlePointerDown = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    if ((e.target as HTMLElement).closest('a')) return;
    if (total < 2) return;

    isPointerDown.current = true;
    startX.current = e.clientX;
    startRotation.current = rotationRef.current;

    autoRotation.current?.pause();

    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const handlePointerMove = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isPointerDown.current) return;

    const deltaX = e.clientX - startX.current;

    if (!isDragging.current && Math.abs(deltaX) > 5) {
      isDragging.current = true;
      setIsDraggingState(true);
      setSelectedIndex(null);
      setHoveredIndex(null);
    }

    if (!isDragging.current) return;

    const newRotation = startRotation.current + deltaX * 0.4;

    rotationRef.current = newRotation;
    setRotationY(newRotation);

    if (ringRef.current) {
      ringRef.current.style.transform =
        `rotateY(${newRotation}deg)`;
    }
  };

  const handlePointerUp = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    isPointerDown.current = false;

    if (!isDragging.current) {
      if (!(e.target as HTMLElement).closest('article')) {
        setSelectedIndex(null);
      }

      if (hoveredIndex === null && selectedIndex === null) {
        autoRotation.current?.resume();
      }

      return;
    }

    isDragging.current = false;

    const nearestIndex = Math.round(
      -rotationRef.current / angleStep,
    );

    const targetRotation = nearestIndex * -angleStep;
    const animation = {
      rotation: rotationRef.current,
    };

    gsap.to(animation, {
      rotation: targetRotation,
      duration: 0.65,
      ease: 'power3.out',

      onUpdate: () => {
        rotationRef.current = animation.rotation;
        setRotationY(animation.rotation);

        if (ringRef.current) {
          ringRef.current.style.transform =
            `rotateY(${animation.rotation}deg)`;
        }
      },

      onComplete: () => {
        rotationRef.current = targetRotation;
        setRotationY(targetRotation);
        setIsDraggingState(false);
      },
    });
  };

  const handlePointerCancel = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    isPointerDown.current = false;
    isDragging.current = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    setIsDraggingState(false);

    if (ringRef.current) {
      ringRef.current.style.transform =
        `rotateY(${rotationRef.current}deg)`;
    }
  };

  if (total === 0) return null;

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onPointerLeave={() => {
        setHoveredIndex(null);
        setSelectedIndex(null);
      }}
      className="
        relative my-8 flex h-100 w-full
        items-center justify-center overflow-visible
        perspective-[900px]
        cursor-grab select-none touch-pan-y
        active:cursor-grabbing
        sm:my-12 sm:h-125
        sm:perspective-[1000px]
      "
    >
      <div
        ref={ringRef}
        style={{
          transform: `rotateY(${rotationY}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className="absolute left-1/2 top-1/2 h-0 w-0"
      >
        {featuredProjects.map((project, index) => {
          const cardAngle = index * angleStep;

          const currentAngle =
            ((((cardAngle + rotationY + 180) % 360) + 360) %
              360) - 180;

          const distance = Math.abs(currentAngle);
          const scale = Math.max(0.82, 1 - distance / 650);
          const opacity = Math.max(0.7, 1 - distance / 400);
          const zIndex = Math.round(100 - distance);
          const isFront = distance < angleStep / 2;

          return (
            <RingCard
              key={project.id}
              url={project.website.live}
              imgLink={project.screenshot}
              title={project.name[language]}
              index={index}
              angleStep={angleStep}
              radius={radius}
              scale={scale}
              opacity={opacity}
              zIndex={zIndex}
              isFront={isFront}
              isHovered={hoveredIndex === index}
              isSelected={selectedIndex === index}
              onCardHover={(hovered) => {
                setHoveredIndex(hovered ? index : null);
              }}
              onCardClick={() => {
                setSelectedIndex((current) =>
                  current === index ? null : index,
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
