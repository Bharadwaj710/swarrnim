import React from 'react';


function Recognitions() {
  const styles = {
    section: {
      padding: '80px 0',
      position: 'relative',
      background: '#fafafa',
      zIndex: 10,
      isolation: 'isolate'
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '0 1.5rem',
      width: '100%'
    },
    textCenter: {
      textAlign: 'center',
      marginBottom: '2.5rem'
    },
    titleUnderline: {
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '0.8rem'
    },
    sectionTitle: {
      fontSize: '42px',
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
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.6',
      fontWeight: '300',
      maxWidth: '650px',
      margin: '0 auto 1.5rem'
    },
    recognitionGridWrapper: {
      padding: '0',
      marginTop: '30px'
    },
    recognitionGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '18px',
      maxWidth: '950px',
      margin: '0 auto'
    },
    recognitionCard: {
      background: '#ffffff',
      padding: '18px 14px',
      border: '2px solid rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left',
      minHeight: '140px',
      position: 'relative',
      aspectRatio: '3 / 4'
    },
    badge: {
      position: 'absolute',
      top: '0',
      left: '0',
      padding: '4px 10px',
      background: '#ff6b35',
      color: '#ffffff',
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      borderRadius: '0',
      whiteSpace: 'nowrap'
    },
    cardContent: {
      marginTop: '32px',
      width: '100%'
    },
    cardTitle: {
      fontWeight: '800',
      color: '#000',
      marginBottom: '6px',
      lineHeight: '1.35',
      textTransform: 'uppercase',
      letterSpacing: '-0.3px'
    },
    cardDescription: {
      color: '#666',
      lineHeight: '1.5',
      fontWeight: '400'
    }
  };


  const mediaQueryStyles = `
    /* Force black color for section title and remove gradient */
    #recognitions .section-title,
    section#recognitions .section-title {
      color: #000000 !important;
      background: none !important;
      -webkit-background-clip: unset !important;
      -webkit-text-fill-color: #000000 !important;
      background-clip: unset !important;
    }


    /* Prevent GSAP interference */
    #recognitions,
    #recognitions *,
    #recognitions .recognition-card {
      transform: none !important;
      will-change: auto !important;
    }


    .recognition-card:hover {
      transform: translateY(-6px) !important;
      border-color: #ff6b35;
    }


    @media (max-width: 1024px) {
      .recognition-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 16px !important;
        max-width: 600px !important;
      }
      #recognitions .section-title {
        font-size: 36px !important;
      }
      .recognition-card {
        padding: 16px 12px !important;
        min-height: 130px !important;
      }
      .card-content {
        margin-top: 30px !important;
      }
    }


    @media (max-width: 768px) {
      #recognitions.section {
        padding: 50px 0 !important;
      }
      #recognitions .container {
        padding: 0 1rem !important;
      }
      #recognitions .section-title {
        font-size: 28px !important;
      }
      .section-intro {
        font-size: 12px !important;
      }
      .recognition-grid-wrapper {
        margin-top: 25px !important;
      }
      .recognition-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 12px !important;
        max-width: 100% !important;
      }
      .recognition-card {
        padding: 14px 10px !important;
        min-height: 120px !important;
      }
      .badge {
        padding: 3px 8px !important;
      }
      .card-content {
        margin-top: 28px !important;
      }
      .card-title {
        margin-bottom: 5px !important;
      }
    }


    @media (max-width: 576px) {
      #recognitions .container {
        padding: 0 0.75rem !important;
      }
      #recognitions .section-title {
        font-size: 24px !important;
      }
      .section-intro {
        font-size: 11px !important;
        margin-bottom: 1rem !important;
      }
      .recognition-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 10px !important;
      }
      .recognition-card {
        padding: 12px 8px !important;
        min-height: 110px !important;
        border-width: 1.5px !important;
      }
      .badge {
        padding: 3px 7px !important;
      }
      .card-content {
        margin-top: 26px !important;
      }
      .card-title {
        margin-bottom: 4px !important;
      }
    }

    @media (max-width: 400px) {
      #recognitions .container {
        padding: 0 0.5rem !important;
      }
      .recognition-grid {
        gap: 8px !important;
      }
      .recognition-card {
        padding: 10px 7px !important;
        min-height: 100px !important;
      }
      .badge {
        padding: 2px 6px !important;
      }
      .card-content {
        margin-top: 24px !important;
      }
    }
  `;


  const recognitions = [
    {
      badge: 'TOP 4',
      title: 'Private Universities in Gujarat',
      description: 'Ranked among top 4 private universities in Gujarat'
    },
    {
      badge: 'TOP 50',
      title: 'ARIIA Ranking 2020',
      description: 'Institutions on Innovation Achievement by Ministry of Education'
    },
    {
      badge: 'PROMISING',
      title: 'ARIIA 2021',
      description: 'Band-Promising Category by Ministry of Education'
    },
    {
      badge: '3.5/4 ★',
      title: 'Innovation Council 3.0',
      description: 'Annual Performance Rating 2020-21'
    },
    {
      badge: '5/5 ★',
      title: 'GSIRF 2024',
      description: 'Arihant School of Pharmacy & Bio-Research Institute'
    }
  ];


  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section id="recognitions" style={styles.section} className="section">
        <div style={styles.container} className="container">
          <div style={styles.textCenter}>
            <div style={styles.titleUnderline}>
              <h2 style={styles.sectionTitle} className="section-title">
                Recognitions & Rankings
              </h2>
              <div style={styles.titleUnderlineAfter}></div>
            </div>
            <p style={styles.sectionIntro}>
              Celebrating excellence and achievement in innovation, education, and research
            </p>
          </div>


          {/* Recognition Cards Grid */}
          <div style={styles.recognitionGridWrapper} className="recognition-grid-wrapper">
            <div style={styles.recognitionGrid} className="recognition-grid">
              {recognitions.map((recognition, index) => (
                <div 
                  key={index} 
                  style={styles.recognitionCard} 
                  className="recognition-card"
                >
                  {/* Badge positioned at top-left corner */}
                  <div style={styles.badge} className="badge">
                    {recognition.badge}
                  </div>
                  
                  {/* Content below badge */}
                  <div style={styles.cardContent} className="card-content">
                    <h4 style={styles.cardTitle} className="card-title">
                      {recognition.title}
                    </h4>
                    <p style={styles.cardDescription} className="card-description">
                      {recognition.description}
                    </p>
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


export default Recognitions;
