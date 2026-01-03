import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);



function Facilities() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);



  useEffect(() => {
    const cards = cardsRef.current.filter(card => card !== null);



    // Kill any existing ScrollTriggers on this section first
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id && trigger.vars.id.startsWith('facility-card-')) {
        trigger.kill();
      }
    });



    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        gsap.to(card, {
          scale: 0.85 - (index * 0.025),
          opacity: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 15%',
            end: 'bottom 15%',
            scrub: true,
            pin: true,
            pinSpacing: false,
            markers: false,
            id: `facility-card-${index}`,
            invalidateOnRefresh: true
          }
        });
      }
    });



    return () => {
      // Clean up only facility card triggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.startsWith('facility-card-')) {
          trigger.kill();
        }
      });
    };
  }, []);



  const styles = {
    section: {
      position: 'relative',
      background: '#ffffff',
      overflow: 'hidden',
      width: '100%',
      padding: '0',
      isolation: 'isolate'
    },
    headerWrapper: {
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '0 2rem'
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
    cardWrapper: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      overflow: 'hidden'
    },
    card: {
      position: 'relative',
      width: '90%',
      maxWidth: '1200px',
      height: '85vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: '#fafafa',
      border: '2px solid rgba(0, 0, 0, 0.08)',
      borderRadius: '0',
      margin: '0 auto'
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
    /* Prevent horizontal overflow */
    * {
      box-sizing: border-box;
    }



    body {
      overflow-x: hidden !important;
    }



    #facilities {
      overflow-x: hidden !important;
    }



    /* Isolate other sections from GSAP */
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
      .header-wrapper {
        height: 55vh !important;
        padding: 0 1.5rem !important;
      }
      .section-title {
        font-size: 40px !important;
      }
      .section-intro {
        font-size: 15px !important;
      }
      .card {
        width: 92% !important;
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
      .header-wrapper {
        height: 50vh !important;
        padding: 0 1rem !important;
      }
      .section-title {
        font-size: 32px !important;
      }
      .section-intro {
        font-size: 14px !important;
      }
      .title-underline {
        margin-bottom: 0.8rem !important;
      }
      .card {
        width: 94% !important;
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
      .header-wrapper {
        height: 45vh !important;
        padding: 0 1rem !important;
      }
      .section-title {
        font-size: 26px !important;
      }
      .section-intro {
        font-size: 13px !important;
      }
      .title-underline {
        margin-bottom: 0.6rem !important;
      }
      .card {
        width: 95% !important;
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
      description: 'State-of-the-art laboratories equipped with cutting-edge technology for prototyping, research, and experimental development. Our facilities enable students and researchers to transform ideas into reality.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop'
    },
    {
      icon: '💻',
      title: 'Tech Infrastructure',
      description: 'Advanced computing facilities featuring high-performance servers, quantum computing access, and cloud infrastructure. Access to industry-standard tools and platforms for software development and data analysis.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop'
    },
    {
      icon: '📚',
      title: 'Digital Library',
      description: 'Extensive collection of research materials, academic journals, e-books, and digital resources. Access to global databases and publications supporting comprehensive research and learning.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop'
    },
    {
      icon: '🏢',
      title: 'Incubation Center',
      description: 'Dedicated spaces designed for startup development with mentorship programs, funding opportunities, and networking events. Transform your entrepreneurial vision into successful ventures.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop'
    },
    {
      icon: '🎯',
      title: 'Skill Development',
      description: 'Comprehensive workshops and training programs led by industry experts. Hands-on sessions covering latest technologies, soft skills, and professional development to enhance career readiness.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop'
    },
    {
      icon: '🌐',
      title: 'Global Collaborations',
      description: 'Strategic partnerships with leading international institutions, research organizations, and industry leaders. Access to exchange programs, joint research projects, and global networking opportunities.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop'
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
        {/* Centered Header Section */}
        <div 
          ref={headerRef}
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
            Discover our state-of-the-art infrastructure designed to foster innovation, creativity, and excellence in education and research
          </p>
        </div>


        {/* Facility Cards */}
        {facilities.map((facility, index) => (
          <div 
            key={index}
            style={styles.cardWrapper}
            className="card-wrapper"
          >
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              style={styles.card}
              className="card"
            >
              {/* Image Section - Top 55% */}
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



              {/* Content Section - Bottom 45% */}
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
      </section>
    </>
  );
}



export default Facilities;
