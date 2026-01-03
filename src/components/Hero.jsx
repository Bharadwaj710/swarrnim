import React, { useState } from 'react';
import { Phone, Mail, User, GraduationCap, TrendingUp, Award, Building2 } from 'lucide-react';

function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    course: ''
  });

  const [focusedField, setFocusedField] = useState({
    name: false,
    email: false,
    number: false,
    course: false
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setFocusedField({
      ...focusedField,
      [field]: true
    });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocusedField({
        ...focusedField,
        [field]: false
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', number: '', course: '' });
    setFocusedField({ name: false, email: false, number: false, course: false });
  };

  const styles = {
    hero: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      padding: '0'
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: 0
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      zIndex: 1
    },
    container: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '100px 2rem 2rem',
      width: '100%'
    },
    contentWrapper: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: '3rem',
      alignItems: 'center',
      width: '100%'
    },
    leftSection: {
      animation: 'fadeInLeft 0.8s ease-out'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: '#ff6b35',
      color: 'white',
      padding: '0.5rem 1.2rem',
      fontSize: '0.8rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      letterSpacing: '0.5px'
    },
    title: {
      fontSize: '4rem',
      fontWeight: '900',
      lineHeight: '1',
      marginBottom: '1rem',
      color: '#ffffff',
      letterSpacing: '-3px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#ff6b35',
      marginBottom: '1rem',
      fontWeight: '700',
      letterSpacing: '0.5px'
    },
    description: {
      fontSize: '1rem',
      color: '#e0e0e0',
      lineHeight: '1.7',
      marginBottom: '2rem',
      maxWidth: '650px',
      fontWeight: '400'
    },
    statsContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      padding: '2rem',
      gap: '0',
      maxWidth: '650px',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      overflow: 'hidden'
    },
    statsGlassShine: {
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '50%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
      animation: 'glassShine 3s infinite',
      pointerEvents: 'none'
    },
    statItem: {
      flex: 1,
      textAlign: 'center',
      padding: '0 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      position: 'relative',
      zIndex: 1
    },
    statIcon: {
      color: '#ffffff',
      transition: 'transform 0.3s ease'
    },
    statDivider: {
      width: '2px',
      height: '60px',
      background: 'rgba(255, 255, 255, 0.2)',
      flexShrink: 0
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: '900',
      color: '#ffffff',
      lineHeight: '1',
      letterSpacing: '-1px'
    },
    statLabel: {
      fontSize: '0.75rem',
      fontWeight: '600',
      letterSpacing: '0.5px',
      whiteSpace: 'nowrap',
      color: '#ff6b35'
    },
    rightSection: {
      animation: 'fadeInRight 0.8s ease-out'
    },
    contactBox: {
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.12)',
      backdropFilter: 'blur(30px) saturate(180%)',
      WebkitBackdropFilter: 'blur(30px) saturate(180%)',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
      overflow: 'hidden'
    },
    contactBoxGlassShine: {
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '50%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      animation: 'glassShine 4s infinite',
      pointerEvents: 'none',
      zIndex: 0
    },
    contactBoxHeader: {
      textAlign: 'center',
      marginBottom: '1rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
      position: 'relative',
      zIndex: 1
    },
    contactBoxTitle: {
      fontSize: '1.3rem',
      fontWeight: '800',
      color: '#ffffff',
      marginBottom: '0.3rem',
      letterSpacing: '-0.5px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
    },
    contactBoxSubtitle: {
      color: 'rgba(255, 255, 255, 0.85)',
      fontSize: '0.8rem',
      fontWeight: '600'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.9rem',
      position: 'relative',
      zIndex: 1
    },
    formGroup: {
      width: '100%'
    },
    inputWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    inputIcon: {
      position: 'absolute',
      left: '0.9rem',
      color: 'rgba(255, 255, 255, 0.7)',
      pointerEvents: 'none',
      zIndex: 2,
      transition: 'all 0.3s ease'
    },
    input: {
      width: '100%',
      padding: '0.8rem 0.9rem 0.8rem 2.6rem',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      fontSize: '0.9rem',
      color: '#ffffff',
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      fontWeight: '500',
      fontFamily: 'inherit'
    },
    floatingLabel: {
      position: 'absolute',
      left: '2.6rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '0.9rem',
      fontWeight: '500',
      pointerEvents: 'none',
      transition: 'all 0.3s ease',
      background: 'transparent',
      padding: '0 0.3rem'
    },
    floatingLabelActive: {
      top: '0',
      left: '0.9rem',
      transform: 'translateY(-50%)',
      fontSize: '0.7rem',
      color: '#ff6b35',
      background: 'transparent',
      padding: '0 0.4rem',
      fontWeight: '600'
    },
    select: {
      width: '100%',
      padding: '0.8rem 2.6rem 0.8rem 2.6rem',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      fontSize: '0.9rem',
      color: '#ffffff',
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      fontWeight: '500',
      cursor: 'pointer',
      appearance: 'none',
      fontFamily: 'inherit'
    },
    submitBtn: {
      width: '100%',
      padding: '0.85rem',
      background: '#ff6b35',
      color: 'white',
      border: 'none',
      fontSize: '0.85rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '0.3rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)'
    },
    contactBoxFooter: {
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
      position: 'relative',
      zIndex: 1
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: 'rgba(255, 255, 255, 0.85)',
      fontSize: '0.8rem',
      fontWeight: '600'
    },
    contactItemIcon: {
      color: '#ff6b35',
      flexShrink: 0
    }
  };

  const mediaQueryStyles = `
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes glassShine {
      0% {
        left: -100%;
      }
      50%, 100% {
        left: 100%;
      }
    }

    input:focus,
    select:focus {
      outline: none;
      border-color: #ff6b35 !important;
      background: transparent !important;
    }

    select option {
      background: #1a1a1a;
      color: #ffffff;
    }

    @media (max-width: 1200px) {
      .hero-title {
        font-size: 3.2rem !important;
      }
    }

    @media (max-width: 1024px) {
      .hero-content-wrapper {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
      .hero-container {
        padding: 2rem 1.5rem !important;
      }
    }

    @media (max-width: 768px) {
      .hero {
        min-height: auto !important;
        display: block !important;
        padding-top: 70px !important;
        background: #fafafa !important;
      }
      
      .hero-background-wrapper {
        position: relative !important;
        height: 75% !important;
      }

      .hero-mobile-content {
        position: relative !important;
        background: #fafafa !important;
        padding: 2rem 1rem 3rem !important;
        margin-top: -8rem !important;
        z-index: 10 !important;
      }

      .hero-container {
        padding: 2rem 1rem !important;
        margin-top: 0 !important;
      }

      .hero-content-wrapper {
        display: block !important;
      }

      .hero-left-section {
        padding: 0 !important;
      }

      .hero-title {
        font-size: 2rem !important;
        letter-spacing: -1.5px !important;
        margin-bottom: 0.8rem !important;
      }

      .hero-badge {
        font-size: 0.7rem !important;
        padding: 0.4rem 0.9rem !important;
        margin-bottom: 1rem !important;
      }

      .hero-subtitle {
        font-size: 1rem !important;
        margin-bottom: 0.8rem !important;
      }

      .hero-description {
        font-size: 0.9rem !important;
        margin-bottom: 1.5rem !important;
      }

      .hero-stats-container {
        display: none !important;
      }

      .hero-right-section {
        width: 100% !important;
        max-width: 500px !important;
        margin: 0 auto !important;
        padding: 0 !important;
      }

      .hero-contact-box {
        padding: 1.3rem !important;
      }

      .contact-box-title {
        font-size: 1.2rem !important;
      }

      .contact-box-subtitle {
        font-size: 0.75rem !important;
      }
    }

    @media (max-width: 480px) {
      .hero {
        padding-top: 60px !important;
      }

      .hero-mobile-content {
        margin-top: -6rem !important;
        padding: 1.5rem 0.75rem 2rem !important;
      }

      .hero-title {
        font-size: 1.7rem !important;
        letter-spacing: -1px !important;
      }

      .hero-subtitle {
        font-size: 0.9rem !important;
      }

      .hero-description {
        font-size: 0.85rem !important;
        line-height: 1.5 !important;
      }

      .hero-contact-box {
        padding: 1.2rem !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section style={styles.hero} className="hero">
        {/* Desktop View */}
        <div style={styles.backgroundImage} className="hero-desktop-bg"></div>
        <div style={styles.overlay} className="hero-desktop-overlay"></div>
        
        <div style={styles.container} className="hero-container">
          <div style={styles.contentWrapper} className="hero-content-wrapper">
            {/* Left Side - Content */}
            <div style={styles.leftSection} className="hero-left-section">
              <div style={styles.badge} className="hero-badge">
                <Building2 size={16} />
                <span>India's First University for Startup</span>
              </div>
              
              <h1 style={styles.title} className="hero-title">
                WHERE IDEAS<br />COME ALIVE
              </h1>
              
              <h2 style={styles.subtitle} className="hero-subtitle">Swarrnim Startup & Innovation University</h2>
              
              <p style={styles.description} className="hero-description">
                Pioneering innovation with cutting-edge technology and entrepreneurial excellence. 
                Gujarat's first Quantum Computing program preparing students for tomorrow's challenges.
              </p>

              {/* Statistics Container - Desktop Only */}
              <div style={styles.statsContainer} className="hero-stats-container">
                <div style={styles.statsGlassShine}></div>
                <div style={styles.statItem} className="hero-stat-item">
                  <TrendingUp size={28} style={styles.statIcon} />
                  <div style={styles.statNumber} className="stat-number">75+</div>
                  <div style={styles.statLabel} className="stat-label">Startups Incubated</div>
                </div>

                <div style={styles.statDivider} className="stat-divider"></div>

                <div style={styles.statItem} className="hero-stat-item">
                  <GraduationCap size={28} style={styles.statIcon} />
                  <div style={styles.statNumber} className="stat-number">84 LPA</div>
                  <div style={styles.statLabel} className="stat-label">Highest Package</div>
                </div>

                <div style={styles.statDivider} className="stat-divider"></div>

                <div style={styles.statItem} className="hero-stat-item">
                  <Award size={28} style={styles.statIcon} />
                  <div style={styles.statNumber} className="stat-number">TOP 4</div>
                  <div style={styles.statLabel} className="stat-label">in Gujarat</div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form (Desktop) */}
            <div style={styles.rightSection} className="hero-right-section">
              <div style={styles.contactBox} className="hero-contact-box">
                <div style={styles.contactBoxGlassShine}></div>
                <div style={styles.contactBoxHeader}>
                  <h3 style={styles.contactBoxTitle} className="contact-box-title">Admissions Open 2025</h3>
                  <p style={styles.contactBoxSubtitle} className="contact-box-subtitle">Start Your Journey with Us</p>
                </div>
                
                <form style={styles.form} onSubmit={handleSubmit}>
                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <User 
                        size={18} 
                        style={{
                          ...styles.inputIcon,
                          ...(focusedField.name || formData.name ? { top: '0' } : {})
                        }} 
                      />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        style={styles.input}
                        required
                      />
                      <label 
                        style={{
                          ...styles.floatingLabel,
                          ...(focusedField.name || formData.name ? styles.floatingLabelActive : {})
                        }}
                      >
                        Full Name
                      </label>
                    </div>
                  </div>
                  
                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <Mail 
                        size={18} 
                        style={{
                          ...styles.inputIcon,
                          ...(focusedField.email || formData.email ? { top: '0' } : {})
                        }} 
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        style={styles.input}
                        required
                      />
                      <label 
                        style={{
                          ...styles.floatingLabel,
                          ...(focusedField.email || formData.email ? styles.floatingLabelActive : {})
                        }}
                      >
                        Email Address
                      </label>
                    </div>
                  </div>
                  
                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <Phone 
                        size={18} 
                        style={{
                          ...styles.inputIcon,
                          ...(focusedField.number || formData.number ? { top: '0' } : {})
                        }} 
                      />
                      <input
                        type="tel"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('number')}
                        onBlur={() => handleBlur('number')}
                        style={styles.input}
                        required
                      />
                      <label 
                        style={{
                          ...styles.floatingLabel,
                          ...(focusedField.number || formData.number ? styles.floatingLabelActive : {})
                        }}
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>
                  
                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <GraduationCap 
                        size={18} 
                        style={{
                          ...styles.inputIcon,
                          ...(focusedField.course || formData.course ? { top: '0' } : {})
                        }} 
                      />
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('course')}
                        onBlur={() => handleBlur('course')}
                        style={styles.select}
                        required
                      >
                        <option value=""></option>
                        <option value="btech">B.Tech</option>
                        <option value="btech-quantum">B.Tech - Quantum Computing</option>
                        <option value="btech-ai">B.Tech - AI & Data Science</option>
                        <option value="bba">BBA</option>
                        <option value="bca">BCA</option>
                        <option value="mba">MBA</option>
                        <option value="mtech">M.Tech</option>
                        <option value="other">Other Courses</option>
                      </select>
                      <label 
                        style={{
                          ...styles.floatingLabel,
                          ...(focusedField.course || formData.course ? styles.floatingLabelActive : {})
                        }}
                      >
                        Select Course
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    style={styles.submitBtn}
                    onMouseEnter={(e) => e.target.style.background = '#e55a28'}
                    onMouseLeave={(e) => e.target.style.background = '#ff6b35'}
                  >
                    Submit Inquiry
                  </button>
                </form>

                <div style={styles.contactBoxFooter}>
                  <div style={styles.contactItem}>
                    <Phone size={16} style={styles.contactItemIcon} />
                    <span>+91-XXXX-XXXXXX</span>
                  </div>
                  <div style={styles.contactItem}>
                    <Mail size={16} style={styles.contactItemIcon} />
                    <span>admissions@swarrnim.edu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Background wrapper (75% height) */}
        <div className="hero-background-wrapper" style={{display: 'none'}}>
          <div style={styles.backgroundImage}></div>
          <div style={styles.overlay}></div>
        </div>

        {/* Mobile View - Content section */}
        <div className="hero-mobile-content" style={{display: 'none'}}>
          {/* Content will be rendered here on mobile via CSS */}
        </div>
      </section>
    </>
  );
}

export default Hero;
