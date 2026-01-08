import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Facilities() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const setupAnimations = () => {
      const cards = cardsRef.current.filter(card => card !== null);
      
      if (cards.length === 0) {
        console.log('No cards found');
        return;
      }

      console.log(`✅ Found ${cards.length} cards`);

      // Clean up existing triggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.startsWith('facility-')) {
          trigger.kill();
        }
      });

      // Store viewport height
      const vh = window.innerHeight;
      
      // Pin duration: (cards.length - 1) * vh + 0.5vh buffer
      // The buffer allows the last card to "settle" before unpinning.
      const totalScrollDistance = (cards.length - 1 + 0.5) * vh;
      
      console.log(`📏 Pin duration: ${totalScrollDistance}px`);

      // Master Timeline that handles BOTH Pinning and Animation
      // This ensures they are perfectly synced.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top top',
          end: `+=${totalScrollDistance}`,
          pin: true,
          scrub: 1, // Reduced slightly to 1s for responsiveness with smoothness
          id: 'facilities-master-timeline',
          onLeave: () => console.log('🎉 ALL CARDS SHOWN'),
          onEnterBack: () => console.log('⬆️ Re-entering')
        }
      });

      // Step 2: Set initial card positions
      cards.forEach((card, index) => {
        const zIndex = 100 + index;
        
        if (index === 0) {
          // First card visible
          gsap.set(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            zIndex: zIndex,
            visibility: 'visible'
          });
        } else {
          // Other cards below viewport
          gsap.set(card, {
            y: '100vh', // Use VH units for safety
            opacity: 1,
            scale: 1,
            zIndex: zIndex,
            visibility: 'visible'
          });
        }
      });

      // Step 3: Add animations to the single timeline
      // We map the scroll distance nicely: 0 to 1, 1 to 2, etc.
      cards.forEach((card, index) => {
        if (index === 0) return; // Skip first card

        const prevCard = cards[index - 1];
        
        // The "slot" for this animation is [index-1, index]
        // e.g. Card 1 animates from 0 to 1
        // Card 2 animates from 1 to 2
        
        // 1. Animate Current Card UP
        tl.to(card, {
          y: '0vh',
          opacity: 1,
          scale: 1,
          ease: 'none' // Important for scrub
        }, index - 1); // Start at (index-1)

        // 2. Animate Previous Card DOWN/BACK
        tl.to(prevCard, {
          scale: 0.95,
          opacity: 0.7,
          ease: 'none'
        }, index - 1); // Exact same start time
      });

      // Add a small buffer at the end of the timeline to match the scroll distance
      // This ensures the last card sits for a moment (0.5s / 0.5vh) before unpinning
      tl.to({}, { duration: 0.5 });

      // Force refresh for safety
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    // Wait for images to load
    const timer = setTimeout(setupAnimations, 300);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id === 'facilities-master-timeline') {
          trigger.kill();
        }
      });
    };
  }, []);

  const styles = {
    section: {
      position: 'relative',
      background: '#ffffff',
      width: '100%',
      overflow: 'hidden',
      isolation: 'isolate',
      paddingTop: '80px'
    },
    headerWrapper: {
      position: 'relative',
      width: '100%',
      padding: '40px 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      background: '#ffffff',
      zIndex: 1
    },
    titleUnderline: {
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '0.8rem',
      marginBottom: '1rem'
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: '900',
      letterSpacing: '-1px',
      textTransform: 'uppercase',
      lineHeight: '1.2',
      marginBottom: '0.8rem',
      position: 'relative',
      display: 'inline-block',
      color: '#000000',
      textShadow: '2px 2px 0px rgba(0, 0, 0, 0.1), 4px 4px 0px rgba(0, 0, 0, 0.08), 6px 6px 0px rgba(0, 0, 0, 0.06), 8px 8px 0px rgba(0, 0, 0, 0.04), 10px 10px 20px rgba(0, 0, 0, 0.15)'
    },
    titleUnderlineAfter: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '3px',
      background: '#ff6b35'
    },
    sectionIntro: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.6',
      fontWeight: '300',
      maxWidth: '700px',
      margin: '0 auto'
    },
    cardsContainer: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    cardWrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: '1200px',
      height: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    card: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: '#fafafa',
      border: '2px solid rgba(0, 0, 0, 0.08)',
      borderRadius: '0',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
      visibility: 'hidden'
    },
    imageContainer: {
      flex: '1 1 auto',
      width: '100%',
      height: '55%',
      overflow: 'hidden',
      position: 'relative',
      background: '#ffffff'
    },
    cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },
    iconPlaceholder: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '120px',
      color: '#ff6b35',
      background: '#ffffff',
      filter: 'grayscale(0.3)',
      transition: 'all 0.3s ease'
    },
    contentContainer: {
      flex: '0 0 auto',
      height: '45%',
      padding: '50px 60px',
      background: '#fafafa',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    cardNumber: {
      fontSize: '14px',
      fontWeight: '900',
      color: '#ff6b35',
      letterSpacing: '2px',
      marginBottom: '15px',
      textTransform: 'uppercase'
    },
    cardTitle: {
      fontSize: '42px',
      fontWeight: '900',
      color: '#000000',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '-1px',
      lineHeight: '1.2',
      textShadow: '2px 2px 0px rgba(0, 0, 0, 0.1), 4px 4px 0px rgba(0, 0, 0, 0.08), 6px 6px 0px rgba(0, 0, 0, 0.06), 8px 8px 0px rgba(0, 0, 0, 0.04), 10px 10px 20px rgba(0, 0, 0, 0.15)'
    },
    cardDescription: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.7',
      fontWeight: '400',
      maxWidth: '900px'
    }
  };

  const mediaQueryStyles = `
    * {
      box-sizing: border-box;
    }

    body {
      overflow-x: hidden !important;
      width: 100% !important;
    }

    #facilities {
      overflow: hidden !important;
      width: 100% !important;
    }

    section:not(#facilities) {
      transform: none !important;
      will-change: auto !important;
    }

    section:not(#facilities) * {
      transform: inherit !important;
    }

    .card:hover .icon-placeholder {
      filter: grayscale(0) !important;
      transform: scale(1.05);
    }

    @media (max-width: 1024px) {
      #facilities {
        padding-top: 60px !important;
      }
      .header-wrapper {
        padding: 30px 1.5rem !important;
      }
      .section-title {
        font-size: 40px !important;
      }
      .section-intro {
        font-size: 15px !important;
      }
      .card-wrapper {
        width: 92% !important;
      }
      .card {
        height: 80vh !important;
      }
      .content-container {
        padding: 40px 50px !important;
      }
      .card-title {
        font-size: 36px !important;
      }
      .card-description {
        font-size: 15px !important;
      }
      .icon-placeholder {
        font-size: 100px !important;
      }
    }

    @media (max-width: 768px) {
      #facilities {
        padding-top: 40px !important;
      }
      .header-wrapper {
        padding: 25px 1rem !important;
      }
      .section-title {
        font-size: 32px !important;
      }
      .section-intro {
        font-size: 14px !important;
      }
      .card-wrapper {
        width: 94% !important;
      }
      .card {
        height: 75vh !important;
      }
      .content-container {
        padding: 35px 35px !important;
        height: 48% !important;
      }
      .image-container {
        height: 52% !important;
      }
      .card-number {
        font-size: 13px !important;
        margin-bottom: 12px !important;
      }
      .card-title {
        font-size: 28px !important;
        margin-bottom: 15px !important;
      }
      .card-description {
        font-size: 14px !important;
      }
      .icon-placeholder {
        font-size: 80px !important;
      }
    }

    @media (max-width: 576px) {
      #facilities {
        padding-top: 30px !important;
      }
      .header-wrapper {
        padding: 20px 1rem !important;
      }
      .section-title {
        font-size: 26px !important;
      }
      .section-intro {
        font-size: 13px !important;
      }
      .card-wrapper {
        width: 95% !important;
      }
      .card {
        height: 70vh !important;
      }
      .content-container {
        padding: 25px 25px !important;
        height: 50% !important;
      }
      .image-container {
        height: 50% !important;
      }
      .card-number {
        font-size: 12px !important;
        margin-bottom: 10px !important;
      }
      .card-title {
        font-size: 22px !important;
        margin-bottom: 12px !important;
      }
      .card-description {
        font-size: 13px !important;
        line-height: 1.6 !important;
      }
      .icon-placeholder {
        font-size: 60px !important;
      }
    }
  `;
  
  const facilities = [
  {
    icon: '🚀',
    title: 'Innovation Labs',
    description:
      'State-of-the-art laboratories equipped with cutting-edge technology for prototyping, research, and experimental development.',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop'
  },
  {
    icon: '💻',
    title: 'Tech Infrastructure',
    description:
      'Advanced computing facilities featuring high-performance servers, quantum computing access, and cloud infrastructure.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop'
  },
  {
    icon: '📚',
    title: 'Digital Library',
    description:
      'Extensive digital and physical libraries providing access to global research papers, journals, and learning resources.',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop'
  },
  {
    icon: '🤝',
    title: 'Collaboration Spaces',
    description:
      'Modern collaborative workspaces designed for teamwork, brainstorming, and interdisciplinary innovation.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop'
  },
  {
    icon: '🏆',
    title: 'Startup Incubation',
    description:
      'Dedicated incubation centers providing mentorship, funding access, and industry connections for startups.',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop'
  }
];
  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section 
        ref={sectionRef}
        id="facilities" 
        style={styles.section}
        className="section"
      >
        <div 
          style={styles.headerWrapper}
          className="header-wrapper"
        >
          <div style={styles.titleUnderline} className="title-underline">
            <h2 style={styles.sectionTitle} className="section-title">
              World-Class Facilities
            </h2>
            <div style={styles.titleUnderlineAfter}></div>
          </div>
          <p style={styles.sectionIntro} className="section-intro">
            Discover our state-of-the-art infrastructure designed to foster innovation, creativity, and excellence
          </p>
        </div>

        <div 
          ref={cardsContainerRef}
          style={styles.cardsContainer} 
          className="cards-container"
        >
          {facilities.map((facility, index) => (
            <div 
              key={`facility-${index}`}
              style={styles.cardWrapper}
              className="card-wrapper"
            >
              <div
                ref={(el) => {
                  if (el) {
                    cardsRef.current[index] = el;
                  }
                }}
                style={styles.card}
                className="card"
                data-card-index={index}
              >
                <div 
                  style={styles.imageContainer} 
                  className="image-container"
                >
                  {facility.image ? (
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      style={styles.cardImage}
                      className="card-image"
                      loading="lazy"
                    />
                  ) : (
                    <div 
                      style={styles.iconPlaceholder}
                      className="icon-placeholder"
                    >
                      {facility.icon}
                    </div>
                  )}
                </div>

                <div 
                  style={styles.contentContainer} 
                  className="content-container"
                >
                  <div style={styles.cardNumber} className="card-number">
                    Facility {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 style={styles.cardTitle} className="card-title">
                    {facility.title}
                  </h3>
                  <p style={styles.cardDescription} className="card-description">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Facilities;
