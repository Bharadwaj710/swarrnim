import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
      flexDirection: 'column',
      gap: '0.15rem',
      cursor: 'pointer'
    },
    logoTitle: {
      fontSize: '1.5rem',
      fontWeight: '900',
      color: '#1a1a1a',
      margin: 0,
      letterSpacing: '-1px',
      lineHeight: 1,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    logoSubtitle: {
      fontSize: '0.65rem',
      color: '#ff6b35',
      margin: 0,
      fontWeight: '700',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      lineHeight: 1
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
      color: '#1a1a1a'
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
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '1rem',
      borderBottom: '2px solid #e0e0e0'
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
    closeButton: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      color: '#1a1a1a'
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
      .logo-title {
        font-size: 1.3rem !important;
      }
      .logo-subtitle {
        font-size: 0.6rem !important;
      }
    }

    @media (max-width: 480px) {
      .header-container {
        padding: 0 1rem !important;
      }
      .logo-title {
        font-size: 1.1rem !important;
      }
      .logo-subtitle {
        font-size: 0.55rem !important;
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
            <h1 style={styles.logoTitle} className="logo-title">SWARRNIM</h1>
            <p style={styles.logoSubtitle} className="logo-subtitle">Startup & Innovation University</p>
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

          {/* Mobile Menu Button */}
          <button 
            style={styles.mobileMenuButton} 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
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
          <div style={styles.logo}>
            <h1 style={{...styles.logoTitle, fontSize: '1.3rem'}}>SWARRNIM</h1>
            <p style={styles.logoSubtitle}>Startup & Innovation University</p>
          </div>
          <button 
            style={styles.closeButton}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
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
