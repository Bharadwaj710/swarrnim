import React from 'react';

function Startups() {
  const styles = {
    section: {
      padding: '100px 0',
      position: 'relative',
      background: '#fafafa'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      width: '100%'
    },
    textCenter: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    sectionTitle: {
      fontSize: '52px',
      fontWeight: '900',
      letterSpacing: '-1px',
      textTransform: 'uppercase',
      lineHeight: '1.2',
      marginBottom: '1rem',
      position: 'relative',
      display: 'inline-block',
      textShadow: '2px 2px 0px rgba(0, 0, 0, 0.1), 4px 4px 0px rgba(0, 0, 0, 0.08), 6px 6px 0px rgba(0, 0, 0, 0.06), 8px 8px 0px rgba(0, 0, 0, 0.04), 10px 10px 20px rgba(0, 0, 0, 0.15)'
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
      background: '#FF8C00',
      boxShadow: '0 2px 10px rgba(255, 140, 0, 0.3)'
    },
    sectionIntro: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.8',
      fontWeight: '300',
      maxWidth: '800px',
      margin: '0 auto 3rem'
    },
    bentoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridAutoRows: '300px',
      gap: '20px',
      marginTop: '60px'
    },
    scrollRow: {
      display: 'none',
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      padding: '0 1rem'
    },
    scrollWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, calc(50vw - 1.5rem - 7.5px))',
      gridTemplateRows: 'repeat(2, 180px)',
      gap: '12px',
      width: 'max-content'
    },
    bentoItem: {
      background: '#f5f5f5',
      border: '1px solid rgba(0, 0, 0, 0.08)',
      padding: '0',
      transition: 'all 0.4s ease',
      boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    },
    bentoItemBefore: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 0,
      transition: 'all 0.5s ease'
    },
    bentoItemAfter: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
      transition: 'all 0.4s ease'
    },
    bentoContent: {
      position: 'relative',
      zIndex: 2,
      padding: '30px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minHeight: '0'
    },
    bentoTitle: {
      fontSize: '22px',
      color: 'white',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '-0.3px',
      marginBottom: '12px',
      lineHeight: '1.3',
      minHeight: '58px',
      display: 'flex',
      alignItems: 'flex-start'
    },
    bentoDescription: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: '1.6',
      fontWeight: '300',
      marginBottom: '0',
      minHeight: '85px'
    }
  };

  const mediaQueryStyles = `
    .scroll-row::-webkit-scrollbar {
      display: none;
    }

    /* Force black color for section title with maximum specificity */
    #startups .section-title,
    #startups h2.section-title,
    section#startups .section-title,
    .section .section-title,
    h2[class*="section-title"] {
      color: #000000 !important;
      -webkit-text-fill-color: #000000 !important;
    }

    .bento-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(255, 140, 0, 0.2);
    }

    .bento-item:hover .bento-item-before {
      transform: scale(1.1);
    }

    .bento-item:hover .bento-item-after {
      background: rgba(0, 0, 0, 0.75);
    }

    /* Mobile bento grid layout - 6 columns x 2 rows */
    .mobile-item-1 {
      grid-column: span 2;
      grid-row: span 2;
    }

    .mobile-item-2 {
      grid-column: span 2;
      grid-row: span 1;
    }

    .mobile-item-3 {
      grid-column: span 2;
      grid-row: span 1;
    }

    .mobile-item-4 {
      grid-column: span 1;
      grid-row: span 1;
    }

    .mobile-item-5 {
      grid-column: span 1;
      grid-row: span 1;
    }

    .mobile-item-6 {
      grid-column: span 2;
      grid-row: span 1;
    }

    @media (max-width: 1200px) {
      #startups .section-title {
        font-size: 44px !important;
        color: #000000 !important;
        -webkit-text-fill-color: #000000 !important;
      }
      .bento-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        grid-auto-rows: 280px !important;
      }
      .bento-item-1 {
        grid-column: span 2 !important;
        grid-row: span 1 !important;
      }
      .bento-item-2, .bento-item-3, .bento-item-4, .bento-item-5, .bento-item-6 {
        grid-column: span 1 !important;
        grid-row: span 1 !important;
      }
    }

    @media (max-width: 768px) {
      .section {
        padding: 60px 0 !important;
      }
      #startups .section-title {
        font-size: 32px !important;
        color: #000000 !important;
        -webkit-text-fill-color: #000000 !important;
      }
      .container {
        padding: 0 0 !important;
      }
      .bento-grid {
        display: none !important;
      }
      .scroll-row {
        display: block !important;
      }
      .bento-content {
        padding: 15px !important;
        justify-content: flex-start !important;
      }
      .bento-title {
        font-size: 13px !important;
        margin-bottom: 8px !important;
        min-height: auto !important;
        line-height: 1.2 !important;
        align-items: flex-start !important;
      }
      .bento-description {
        font-size: 11px !important;
        line-height: 1.4 !important;
        margin-bottom: 0 !important;
        min-height: auto !important;
      }

      /* Large item (2x2 span) - Incubation Center */
      .mobile-item-1 .bento-content {
        padding: 20px !important;
      }
      .mobile-item-1 .bento-title {
        font-size: 16px !important;
        margin-bottom: 12px !important;
      }
      .mobile-item-1 .bento-description {
        font-size: 13px !important;
        line-height: 1.5 !important;
      }

      /* Wide items (2x1 span) - Patent, Prototype, Innovation Labs */
      .mobile-item-2 .bento-title,
      .mobile-item-3 .bento-title,
      .mobile-item-6 .bento-title {
        font-size: 14px !important;
      }
      .mobile-item-2 .bento-description,
      .mobile-item-3 .bento-description,
      .mobile-item-6 .bento-description {
        font-size: 12px !important;
      }

      /* Small items (1x1 span) - Mentorship, Funding */
      .mobile-item-4 .bento-content,
      .mobile-item-5 .bento-content {
        padding: 12px !important;
      }
      .mobile-item-4 .bento-title,
      .mobile-item-5 .bento-title {
        font-size: 12px !important;
        margin-bottom: 6px !important;
      }
      .mobile-item-4 .bento-description,
      .mobile-item-5 .bento-description {
        font-size: 10px !important;
        line-height: 1.3 !important;
      }
    }

    @media (max-width: 576px) {
      #startups .section-title {
        font-size: 24px !important;
        color: #000000 !important;
        -webkit-text-fill-color: #000000 !important;
      }
    }
  `;

  const bentoItems = [
    {
      title: 'Incubation Center',
      description: 'State-of-the-art incubation facilities supporting 75+ startups with mentorship, funding, and resources.',
      bgImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
      gridClass: 'bento-item-1',
      mobileClass: 'mobile-item-1',
      gridStyle: { gridColumn: 'span 2', gridRow: 'span 2' }
    },
    {
      title: 'Patent Support',
      description: '₹55 Lac funding for 27+ patents filed and published with complete IP support.',
      bgImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
      gridClass: 'bento-item-2',
      mobileClass: 'mobile-item-2',
      gridStyle: { gridColumn: 'span 2' }
    },
    {
      title: 'Prototype Development',
      description: '₹1.4 Cr allocated for prototype development and product validation.',
      bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      gridClass: 'bento-item-3',
      mobileClass: 'mobile-item-3',
      gridStyle: { gridColumn: 'span 2' }
    },
    {
      title: 'Mentorship Program',
      description: 'Industry experts and successful entrepreneurs guiding startup journeys.',
      bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      gridClass: 'bento-item-4',
      mobileClass: 'mobile-item-4',
      gridStyle: { gridColumn: 'span 1' }
    },
    {
      title: 'Funding Access',
      description: 'Connect with investors, VCs, and funding opportunities for growth.',
      bgImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
      gridClass: 'bento-item-5',
      mobileClass: 'mobile-item-5',
      gridStyle: { gridColumn: 'span 1' }
    },
    {
      title: 'Innovation Labs',
      description: 'Cutting-edge labs with latest technology for research and development.',
      bgImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
      gridClass: 'bento-item-6',
      mobileClass: 'mobile-item-6',
      gridStyle: { gridColumn: 'span 2' }
    }
  ];

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section id="startups" style={styles.section} className="section">
        <div style={styles.container} className="container">
          <div style={styles.textCenter}>
            <div style={styles.titleUnderline}>
              <h2 style={styles.sectionTitle} className="section-title">
                STARTUPS & INNOVATION
              </h2>
              <div style={styles.titleUnderlineAfter}></div>
            </div>
            <p style={styles.sectionIntro}>
              Empowering the next generation of entrepreneurs with comprehensive startup support
            </p>
          </div>

          {/* Desktop Bento Grid */}
          <div style={styles.bentoGrid} className="bento-grid">
            {bentoItems.map((item, index) => (
              <div
                key={index}
                style={{...styles.bentoItem, ...item.gridStyle}}
                className={`bento-item ${item.gridClass}`}
              >
                <div
                  style={{
                    ...styles.bentoItemBefore,
                    backgroundImage: `url(${item.bgImage})`
                  }}
                  className="bento-item-before"
                ></div>
                <div style={styles.bentoItemAfter} className="bento-item-after"></div>
                
                <div style={styles.bentoContent} className="bento-content">
                  <h3 style={styles.bentoTitle} className="bento-title">{item.title}</h3>
                  <p style={styles.bentoDescription} className="bento-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll - Bento Grid Layout (6 columns x 2 rows) */}
          <div style={styles.scrollRow} className="scroll-row">
            <div style={styles.scrollWrapper} className="scroll-wrapper">
              {bentoItems.map((item, index) => (
                <div
                  key={`mobile-${index}`}
                  style={styles.bentoItem}
                  className={`bento-item ${item.mobileClass}`}
                >
                  <div
                    style={{
                      ...styles.bentoItemBefore,
                      backgroundImage: `url(${item.bgImage})`
                    }}
                    className="bento-item-before"
                  ></div>
                  <div style={styles.bentoItemAfter} className="bento-item-after"></div>
                  
                  <div style={styles.bentoContent} className="bento-content">
                    <h3 style={styles.bentoTitle} className="bento-title">{item.title}</h3>
                    <p style={styles.bentoDescription} className="bento-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Startups;
