import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Quantum Particle System Component
function QuantumParticles() {
  const particlesRef = useRef();
  const count = 3000;

  // Generate particle positions, colors, and sizes
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Spread particles in a sphere
      const i3 = i * 3;
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Quantum-inspired colors (blue, cyan, purple)
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i3] = 0.2; colors[i3 + 1] = 0.4; colors[i3 + 2] = 1.0; // Blue
      } else if (colorChoice < 0.7) {
        colors[i3] = 0.3; colors[i3 + 1] = 0.8; colors[i3 + 2] = 1.0; // Cyan
      } else {
        colors[i3] = 0.6; colors[i3 + 1] = 0.2; colors[i3 + 2] = 1.0; // Purple
      }

      sizes[i] = Math.random() * 3 + 1;
    }

    return [positions, colors, sizes];
  }, [count]);

  // Animate particles
  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;

      // Pulse effect
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        const distance = Math.sqrt(x * x + y * y + z * z);
        const pulse = Math.sin(distance * 0.3 - time * 2) * 0.3;
        
        positions[i3] = x + pulse * Math.sin(time + i) * 0.01;
        positions[i3 + 1] = y + pulse * Math.cos(time + i) * 0.01;
        positions[i3 + 2] = z + pulse * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function QuantumComputing() {
  const styles = {
    section: {
      padding: '100px 0',
      position: 'relative',
      background: '#000000',
      overflow: 'hidden'
    },
    canvasContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0
    },
    particlesContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none'
    },
    particle: {
      position: 'absolute',
      background: '#4169E1',
      opacity: 0.6,
      animation: 'float 8s ease-in-out infinite'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.78) 45%, rgba(0, 0, 0, 0.35) 70%, rgba(0, 0, 0, 0.15) 100%)',
      zIndex: 1
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      width: '100%',
      position: 'relative',
      zIndex: 2
    },
    textCenter: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    sectionTitle: {
      fontSize: '52px',
      fontWeight: '900',
      color: '#ffffff',
      letterSpacing: '-1px',
      textTransform: 'uppercase',
      lineHeight: '1.2',
      marginBottom: '1rem',
      position: 'relative',
      display: 'inline-block',
      textShadow: '2px 2px 0px rgba(0, 0, 0, 0.3), 4px 4px 0px rgba(0, 0, 0, 0.25), 6px 6px 0px rgba(0, 0, 0, 0.2), 8px 8px 0px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.4)'
    },
    titleUnderline: {
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '1rem'
    },
    titleUnderlineAfter: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '4px',
      background: '#ff6b35'
    },
    sectionIntro: {
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: '1.8',
      fontWeight: '300',
      maxWidth: '800px',
      margin: '0 auto 3rem',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    },
    quantumContent: {
      display: 'grid',
      gridTemplateColumns: '60% 40%',
      gap: '60px',
      alignItems: 'center',
      marginTop: '60px'
    },
    quantumText: {
      padding: '40px',
      background: 'transparent'
    },
    badge: {
      display: 'inline-block',
      padding: '14px 32px',
      background: '#ff6b35',
      color: '#ffffff',
      fontSize: '15px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2.5px',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '30px',
      borderRadius: '0'
    },
    badgeAccent: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '4px',
      height: '100%',
      background: '#ffffff',
      opacity: 0.3
    },
    heading: {
      fontSize: '42px',
      fontWeight: '900',
      color: '#ffffff',
      marginBottom: '30px',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      letterSpacing: '-0.5px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.8',
      color: 'rgba(255, 255, 255, 0.95)',
      marginBottom: '20px',
      fontWeight: '300',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    },
    highlightBox: {
      padding: '24px',
      background: 'rgba(255, 107, 53, 0.08)',
      border: '2px solid #ff6b35',
      borderLeft: '6px solid #ff6b35',
      marginTop: '30px',
      position: 'relative',
      borderRadius: '0'
    },
    highlightLabel: {
      fontSize: '12px',
      color: '#ff6b35',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '8px',
      display: 'block'
    },
    highlightText: {
      fontSize: '17px',
      color: '#ffffff',
      fontWeight: '500',
      lineHeight: '1.7',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
      margin: 0
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      margin: '24px 0 0 0'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '12px',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: '15px',
      lineHeight: '1.6'
    },
    featureIcon: {
      width: '6px',
      height: '6px',
      background: '#ff6b35',
      marginTop: '8px',
      flexShrink: 0
    }
  };

  const mediaQueryStyles = `
    /* Force white color for section title */
    #quantum .section-title,
    section#quantum .section-title {
      color: #ffffff !important;
      -webkit-text-fill-color: #ffffff !important;
    }

    @keyframes float {
      0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
      }
      25% {
        transform: translate(30px, -40px) scale(1.2);
        opacity: 0.7;
      }
      50% {
        transform: translate(-20px, -80px) scale(0.8);
        opacity: 0.5;
      }
      75% {
        transform: translate(40px, -120px) scale(1.1);
        opacity: 0.8;
      }
    }

    @media (max-width: 1024px) {
      .quantum-content {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
      .overlay {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.68) 60%, rgba(0, 0, 0, 0.25) 100%) !important;
      }
      .heading {
        font-size: 36px !important;
      }
    }

    @media (max-width: 768px) {
      .section {
        padding: 60px 0 !important;
      }
      .overlay {
        background: rgba(0, 0, 0, 0.82) !important;
      }
      #quantum .section-title {
        font-size: 32px !important;
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }
      .quantum-text {
        padding: 30px !important;
      }
      .heading {
        font-size: 28px !important;
        margin-bottom: 20px !important;
      }
      .paragraph {
        font-size: 14px !important;
      }
      .highlight-text {
        font-size: 15px !important;
      }
      .feature-item {
        font-size: 14px !important;
      }
    }

    @media (max-width: 576px) {
      #quantum .section-title {
        font-size: 24px !important;
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }
      .quantum-text {
        padding: 20px !important;
      }
      .heading {
        font-size: 24px !important;
      }
      .badge {
        font-size: 13px !important;
        padding: 12px 24px !important;
      }
      .highlight-text {
        font-size: 14px !important;
      }
      .highlight-box {
        padding: 18px !important;
      }
    }
  `;

  // Generate 2D particles for additional effect
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    width: `${Math.random() * 6 + 3}px`,
    height: `${Math.random() * 6 + 3}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 8}s`,
    animationDuration: `${6 + Math.random() * 6}s`
  }));

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section id="quantum" style={styles.section} className="section">
        {/* 3D Quantum Particle System */}
        <div style={styles.canvasContainer}>
          <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
            <QuantumParticles />
          </Canvas>
        </div>

        {/* Additional 2D animated particles */}
        <div style={styles.particlesContainer}>
          {particles.map(particle => (
            <div
              key={particle.id}
              style={{
                ...styles.particle,
                width: particle.width,
                height: particle.height,
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            />
          ))}
        </div>

        {/* Overlay with black gradient - NO BOX SHADOW */}
        <div style={styles.overlay} className="overlay"></div>

        <div style={styles.container} className="container">
          <div style={styles.textCenter}>
            <div style={styles.titleUnderline}>
              <h2 style={styles.sectionTitle} className="section-title">
                Quantum Computing
              </h2>
              <div style={styles.titleUnderlineAfter}></div>
            </div>
            <p style={styles.sectionIntro}>
              Breaking barriers in technology education - A historic first for Gujarat
            </p>
          </div>

          <div style={styles.quantumContent} className="quantum-content">
            <div style={styles.quantumText} className="quantum-text">
              <span style={styles.badge} className="badge">
                <span style={styles.badgeAccent}></span>
                FIRST IN GUJARAT
              </span>
              
              <h3 style={styles.heading} className="heading">
                Making History with Quantum Computing
              </h3>
              
              <p style={styles.paragraph} className="paragraph">
                Swarrnim University proudly stands as the first and only university in Gujarat to launch a specialized CSE program in Quantum Computing, establishing a new milestone in the state's technological education landscape.
              </p>
              
              <p style={styles.paragraph} className="paragraph">
                Our groundbreaking curriculum merges advanced theoretical foundations with hands-on quantum applications, positioning students at the cutting edge of quantum mechanics, cryptography, and next-generation AI technologies.
              </p>

              <ul style={styles.featureList} className="feature-list">
                <li style={styles.featureItem} className="feature-item">
                  <span style={styles.featureIcon}></span>
                  <span>Advanced quantum algorithm development and implementation</span>
                </li>
                <li style={styles.featureItem} className="feature-item">
                  <span style={styles.featureIcon}></span>
                  <span>Industry-grade quantum computing laboratories and infrastructure</span>
                </li>
                <li style={styles.featureItem} className="feature-item">
                  <span style={styles.featureIcon}></span>
                  <span>Collaboration with leading quantum research institutions globally</span>
                </li>
              </ul>

              <div style={styles.highlightBox} className="highlight-box">
                <span style={styles.highlightLabel}>PIONEERING OPPORTUNITY</span>
                <p style={styles.highlightText} className="highlight-text">
                  Be part of Gujarat's quantum revolution. Join the state's inaugural batch of quantum computing specialists and pioneer the future of computational technology.
                </p>
              </div>
            </div>

            {/* Empty div to maintain grid structure - right side shows 3D particles */}
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuantumComputing;
