import React, { useState, useEffect } from 'react';


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled 
        ? 'rgba(255, 255, 255, 0.98)' 
        : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      boxShadow: isScrolled 
        ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
        : '0 2px 10px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: isScrolled ? '70px' : '80px',
      transition: 'height 0.3s ease'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    logoImage: {
      height: isScrolled ? '50px' : '60px',
      width: 'auto',
      transition: 'height 0.3s ease',
      objectFit: 'contain'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '2.5rem'
    },
    navLink: {
      color: '#333333',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '600',
      position: 'relative',
      transition: 'color 0.3s ease',
      letterSpacing: '0.3px',
      cursor: 'pointer'
    },
    navLinkHover: {
      color: '#ff6b35'
    },
    mobileMenuButton: {
      display: 'none',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      position: 'relative',
      width: '32px',
      height: '24px',
      zIndex: 1002
    },
    hamburgerLine: {
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '3px',
      background: '#1a1a1a',
      borderRadius: '2px',
      transition: 'all 0.3s ease-in-out'
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: isMobileMenuOpen ? 0 : '-100%',
      width: '280px',
      height: '100vh',
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)',
      transition: 'right 0.3s ease',
      zIndex: 1001,
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    mobileMenuHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '1rem',
      borderBottom: '2px solid #e0e0e0'
    },
    mobileLogoImage: {
      height: '50px',
      width: 'auto',
      objectFit: 'contain'
    },
    mobileNavLink: {
      color: '#333333',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      padding: '0.75rem 0',
      borderBottom: '1px solid #f0f0f0',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
      opacity: isMobileMenuOpen ? 1 : 0,
      visibility: isMobileMenuOpen ? 'visible' : 'hidden',
      transition: 'opacity 0.3s ease, visibility 0.3s ease'
    }
  };


  const mediaQueryStyles = `
    @media (max-width: 1024px) {
      .header-nav {
        display: none !important;
      }
      .mobile-menu-button {
        display: block !important;
      }
    }


    @media (max-width: 768px) {
      .header-container {
        padding: 0 1.5rem !important;
      }
      .logo-image {
        height: 45px !important;
      }
      .logo-image-scrolled {
        height: 40px !important;
      }
    }


    @media (max-width: 480px) {
      .header-container {
        padding: 0 1rem !important;
      }
      .logo-image {
        height: 40px !important;
      }
      .logo-image-scrolled {
        height: 35px !important;
      }
    }


    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: #ff6b35;
      transition: width 0.3s ease;
    }


    .nav-link:hover::after {
      width: 100%;
    }


    /* Hamburger to X animation */
    .hamburger-line-1 {
      top: 0;
    }


    .hamburger-line-2 {
      top: 50%;
      transform: translateY(-50%);
    }


    .hamburger-line-3 {
      bottom: 0;
    }


    .hamburger-open .hamburger-line-1 {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }


    .hamburger-open .hamburger-line-2 {
      opacity: 0;
      width: 0;
    }


    .hamburger-open .hamburger-line-3 {
      bottom: 50%;
      transform: translateY(50%) rotate(-45deg);
    }
  `;


  const navLinks = [
    { href: '#startups', label: 'Startups' },
    { href: '#quantum', label: 'Quantum Computing' },
    { href: '#placements', label: 'Placements' },
    { href: '#recognitions', label: 'Recognitions' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#campus', label: 'Campus Life' }
  ];


  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <>
      <style>{mediaQueryStyles}</style>
      <header style={styles.header}>
        <div style={styles.container} className="header-container">
          <div style={styles.logo}>
            <img 
              src="/logo.png" 
              alt="Swarrnim University Logo" 
              style={styles.logoImage}
              className={isScrolled ? 'logo-image logo-image-scrolled' : 'logo-image'}
            />
          </div>


          {/* Desktop Navigation */}
          <nav style={styles.nav} className="header-nav">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                style={styles.navLink}
                className="nav-link"
                onMouseEnter={(e) => {
                  e.target.style.color = '#ff6b35';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#333333';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>


          {/* Mobile Menu Button - Animated Hamburger */}
          <button 
            style={styles.mobileMenuButton} 
            className={`mobile-menu-button ${isMobileMenuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span style={styles.hamburgerLine} className="hamburger-line-1"></span>
            <span style={styles.hamburgerLine} className="hamburger-line-2"></span>
            <span style={styles.hamburgerLine} className="hamburger-line-3"></span>
          </button>
        </div>
      </header>


      {/* Mobile Menu Overlay */}
      <div 
        style={styles.overlay} 
        onClick={() => setIsMobileMenuOpen(false)}
      />


      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        <div style={styles.mobileMenuHeader}>
          <img 
            src="/logo.png" 
            alt="Swarrnim University Logo" 
            style={styles.mobileLogoImage}
            className="mobile-logo-image"
          />
        </div>


        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            style={styles.mobileNavLink}
            onClick={handleLinkClick}
            onMouseEnter={(e) => {
              e.target.style.color = '#ff6b35';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#333333';
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}


export default Header;
