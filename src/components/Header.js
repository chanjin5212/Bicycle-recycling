import React from 'react';

const Header = ({ scrollToSection }) => {
  return (
    <header style={{
      padding: '15px 0',
      backgroundColor: '#2E7D32', // 친환경 테마를 위한 녹색
      width: '100%',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/placeholder.png" alt="로고" width="30" height="30" />
          <span style={{ marginLeft: '10px', color: 'white', fontWeight: 'bold' }}>미래환경</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a 
              href="#hero-section" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero-section');
              }}
              style={{ 
                textDecoration: 'none', 
                color: 'white', 
                fontSize: '14px',
                cursor: 'pointer' 
              }}
            >
              소개
            </a>
            <a 
              href="#services-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services-section');
              }}
              style={{ 
                textDecoration: 'none', 
                color: 'white', 
                fontSize: '14px',
                cursor: 'pointer' 
              }}
            >
              서비스
            </a>
            <a 
              href="#projects-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects-section');
              }}
              style={{ 
                textDecoration: 'none', 
                color: 'white', 
                fontSize: '14px',
                cursor: 'pointer' 
              }}
            >
              활동사례
            </a>
          </div>
          <a 
            href="#footer-section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('footer-section');
            }}
            style={{
              backgroundColor: 'white',
              color: '#2E7D32',
              padding: '8px 16px',
              borderRadius: '20px',
              textDecoration: 'none',
              fontSize: '14px',
              marginLeft: '20px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            수거 신청
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;