'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ExperienceSection.module.css';

// Defining personal experiences using camelCase convention
const personalExperiences = [
  {
    id: 1,
    year: '2023 - 2026',
    role: 'Full Stack Developer',
    company: 'Batam State Polytechnic · Student',
    description:
      'Pursuing a diploma in Informatics Engineering, with a strong focus on modern web systems and other programming technologies. Collaborating closely with faculty and teammates to build scalable academic projects and laying a solid foundation for enterprise-level software engineering.',
  },
  {
    id: 2,
    year: '2025',
    role: 'Backend Developer',
    company: 'KMIPN VII 2025 · Competition Participant',
    description:
      "Competed in the national KMIPN VII competition, contributing to the game project 'Stock Rising' which secured 1st place in the Art and Visualization subcategory. Responsible for structuring backend solutions and ensuring seamless data integration to support a highly interactive user experience.",
  },
  {
    id: 3,
    year: '2025 - 2026',
    role: 'Full Stack Developer',
    company: 'PT. Philips Industries Batam · Intern',
    description:
      'Designed, developed, and deployed internal web applications to support industrial operations, including the Waste Management System. Managed the full software development lifecycle, from database design and implementation using Microsoft SQL Server to application deployment and maintenance.',
  },
];

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotPosition, setDotPosition] = useState(0);
  const itemRefs = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      // Use requestAnimationFrame to optimize scroll performance
      animationFrameId = requestAnimationFrame(() => {
        if (!timelineRef.current || !itemRefs.current.length) return;

        // Parallax effect: the dot follows a targeted point on the screen (40% down from viewport top)
        const triggerPoint = window.innerHeight * 0.4;
        const rect = timelineRef.current.getBoundingClientRect();

        // Calculate where the trigger point intersects the timeline container
        let currentDotPos = triggerPoint - rect.top;

        // Clamp the dot position between the first item's visual center and the last item's visual center
        const firstItemPos = itemRefs.current[0]
          ? itemRefs.current[0].offsetTop + 16
          : 0;
        const lastItemPos = itemRefs.current[personalExperiences.length - 1]
          ? itemRefs.current[personalExperiences.length - 1].offsetTop + 16
          : 0;

        currentDotPos = Math.max(
          firstItemPos,
          Math.min(currentDotPos, lastItemPos),
        );

        setDotPosition(currentDotPos);

        // Find which item is closest to the dot's current position to set as active
        let newActiveIndex = 0;
        let minDistance = Infinity;

        itemRefs.current.forEach((el, index) => {
          if (!el) return;
          // Target the visual center of each item
          const itemCenter = el.offsetTop + 16;
          const distance = Math.abs(currentDotPos - itemCenter);
          if (distance < minDistance) {
            minDistance = distance;
            newActiveIndex = index;
          }
        });

        setActiveIndex(newActiveIndex);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Trigger immediately to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id='experience' className={styles.section}>
      <div className={styles.header}>
        <p className={styles.subtitle}>Where It All Started</p>
        <h2 className={styles.title}>
          ENGINEERED <span className={styles.titleHighlight}>GROWTH</span>
        </h2>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.timelineContainer} ref={timelineRef}>
          <div
            className={styles.timelineLine}
            style={{ height: `${dotPosition}px` }}
          />
          <div
            className={styles.timelineDot}
            style={{ transform: `translateY(${dotPosition - 5}px)` }}
          />
          <div
            className={styles.timelineGlow}
            style={{ transform: `translateY(${dotPosition - 50}px)` }}
          />
        </div>

        <div className={styles.itemsContainer}>
          {personalExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`${styles.item} ${activeIndex === index ? styles.itemActive : ''}`}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className={styles.itemLeft}>
                <h3 className={styles.year}>{exp.year}</h3>
                <h4 className={styles.role}>{exp.role}</h4>
                <p className={styles.company}>{exp.company}</p>
              </div>
              <div className={styles.itemRight}>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
