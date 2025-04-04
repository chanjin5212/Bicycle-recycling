import React from 'react';

const Footer = ({ isVisible, scrollToSection }) => {
  const getAnimationStyle = (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
  });

  return (
    <footer id="footer-section" style={{
      backgroundColor: '#1B5E20',
      padding: '40px 0',
      color: 'white',
      width: '100%',
      ...getAnimationStyle(isVisible)
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            transition: 'transform 0.3s ease',
            marginBottom: '20px'
          }}>
            <h3 style={{
              fontSize: '22px',
              marginBottom: '15px',
              fontWeight: '500'
            }}>미래환경</h3>
            <p style={{
              fontSize: '14px',
              marginBottom: '5px',
              color: '#A5D6A7'
            }}>친환경 폐자전거 수거 서비스</p>
            <p style={{
              fontSize: '14px',
              marginBottom: '5px',
              color: '#A5D6A7'
            }}>전화: 02-123-4567</p>
            <p style={{
              fontSize: '14px',
              color: '#A5D6A7'
            }}>이메일: info@ecobike.kr</p>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          borderTop: '1px solid #4CAF50',
          paddingTop: '20px'
        }}>
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {[
              {name: '소개', id: 'hero-section'},
              {name: '서비스', id: 'services-section'}, 
              {name: '활동사례', id: 'projects-section'}, 
              {name: '이용후기', id: 'testimonials-section'},
              {name: '수거신청', id: 'footer-section'}
            ].map((item, index) => (
              <a 
                key={index}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                style={{
                  textDecoration: 'none',
                  color: '#A5D6A7',
                  fontSize: '14px',
                  transition: 'transform 0.3s ease, color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.color = '#A5D6A7';
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div style={{
          marginTop: '20px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#A5D6A7'
        }}>
          © 2025 미래환경. All rights reserved.. | 폐자전거 수거
        </div>
      </div>
    </footer>
  );
};

export default Footer;