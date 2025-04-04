import React from 'react';

const Hero = ({ isVisible }) => {
  const getAnimationStyle = (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
  });

  return (
    <section id="hero-section" style={{
      padding: '40px 0',
      backgroundColor: '#E8F5E9', // 연한 녹색 배경
      marginBottom: '30px',
      marginTop: '20px',
      ...getAnimationStyle(isVisible)
    }}>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '28px',
          marginBottom: '15px',
          fontWeight: '500',
          color: '#1B5E20'
        }}>버려진 자전거, 지구를 위한 새로운 시작</h1>
        <p style={{
          color: '#33691E',
          marginBottom: '20px',
          fontSize: '16px',
          lineHeight: '1.6'
        }}>폐자전거 수거 서비스 '미래환경'은 버려진 자전거를 수거하여 재활용하고 업사이클링합니다. 지구 환경을 지키면서 자원을 소중히 활용하는 친환경 서비스로, 여러분의 참여가 더 나은 미래를 만듭니다.</p>
        <div style={{
          width: '100%',
          height: '350px',
          backgroundColor: '#C8E6C9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '20px 0',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <img src="/placeholder.png" alt="폐자전거 수거 이미지" width="300" height="250" style={{
            transition: 'transform 0.3s ease',
          }} />
        </div>
        <a href="#services-section" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
          display: 'inline-block',
          backgroundColor: '#388E3C',
          color: 'white',
          border: 'none',
          padding: '10px 24px',
          borderRadius: '24px',
          textDecoration: 'none',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          fontWeight: 'bold'
        }}>서비스 알아보기</a>
      </div>
    </section>
  );
};

export default Hero;