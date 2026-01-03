import React from 'react';
import { Phone, Download } from 'lucide-react';

function BottomBar() {
  const styles = {
    bottomBar: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#ffffff',
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      borderTop: '1px solid rgba(0, 0, 0, 0.08)',
      display: 'none'
    },
    bottomBarContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem'
    },
    contactInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: '#1a1a1a',
      fontSize: '0.95rem',
      fontWeight: '600'
    },
    icon: {
      color: '#ff6b35',
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    },
    phoneText: {
      letterSpacing: '0.3px'
    },
    downloadBrochure: {
      display: 'flex',
      alignItems: 'center'
    },
    downloadBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      padding: '0.75rem 1.5rem',
      background: '#ff6b35',
      color: 'white',
      border: 'none',
      fontSize: '0.9rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      boxShadow: '0 2px 8px rgba(255, 107, 53, 0.3)'
    },
    divider: {
      display: 'none',
      width: '2px',
      height: '30px',
      background: 'rgba(0, 0, 0, 0.1)',
      flexShrink: 0
    }
  };

  const mediaQueryStyles = `
    .download-btn:hover {
      background: #e55a28;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
    }

    .download-btn:active {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      .bottom-bar {
        display: block !important;
      }

      .bottom-bar-content {
        padding: 0.6rem 1rem !important;
        gap: 0 !important;
        justify-content: center !important;
      }

      .contact-info {
        flex: 1 !important;
        justify-content: center !important;
        font-size: 0.8rem !important;
        gap: 0.5rem !important;
      }

      .divider {
        display: block !important;
      }

      .download-brochure {
        flex: 1 !important;
        justify-content: center !important;
      }

      .download-btn {
        padding: 0.6rem 1rem !important;
        font-size: 0.75rem !important;
        gap: 0.4rem !important;
        letter-spacing: 0.3px !important;
      }

      .phone-text {
        display: none !important;
      }
    }

    @media (max-width: 480px) {
      .bottom-bar-content {
        padding: 0.5rem 0.5rem !important;
      }

      .contact-info {
        font-size: 0.75rem !important;
        gap: 0.4rem !important;
      }

      .download-btn {
        padding: 0.5rem 0.8rem !important;
        font-size: 0.7rem !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div style={styles.bottomBar} className="bottom-bar">
        <div style={styles.bottomBarContent} className="bottom-bar-content">
          <div style={styles.contactInfo} className="contact-info">
            <Phone size={18} style={styles.icon} className="icon" />
            <span style={styles.phoneText} className="phone-text">+91 XXXX-XXXXXX</span>
            <span className="phone-text-mobile">Call Now</span>
          </div>

          <div style={styles.divider} className="divider"></div>

          <div style={styles.downloadBrochure} className="download-brochure">
            <button 
              style={styles.downloadBtn} 
              className="download-btn"
              onMouseEnter={(e) => {
                e.target.style.background = '#e55a28';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ff6b35';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <Download size={16} style={styles.icon} />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomBar;
