import React from 'react';

const Services = ({ isVisible }) => {
  const getAnimationStyle = (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
  });

  return (
    <div id="services-section" style={{
      ...getAnimationStyle(isVisible)
    }}>
      <h2 style={{
        fontSize: '24px',
        margin: '40px 0 30px',
        fontWeight: '500',
        textAlign: 'center',
        color: '#1B5E20'
      }}>서비스 안내</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '15px',
        marginBottom: '50px'
      }}>
        {[
          { 
            title: '무료 폐자전거 수거', 
            description: '가정이나 단지에 방치된 폐자전거를 무료로 수거해 드립니다. 간단한 신청 절차만으로 편리하게 이용하세요.',
            icon: '🚲'
          },
          { 
            title: '재활용 및 부품 분리', 
            description: '수거한 자전거는 전문가가 분해하여 재사용 가능한 부품을 선별하고, 나머지는 친환경적으로 처리합니다.',
            icon: '♻️'
          },
          { 
            title: '업사이클링 워크샵', 
            description: '폐자전거 부품을 활용한 업사이클링 워크샵을 운영합니다. 환경보호와 창의적인 활동에 참여해보세요.',
            icon: '🔧'
          },
          { 
            title: '환경 교육 프로그램', 
            description: '학교와 지역사회를 대상으로 자원 재활용과 환경보호에 관한 교육 프로그램을 제공합니다.',
            icon: '📚'
          }
        ].map((service, index) => (
          <div key={index} style={{
            backgroundColor: '#E8F5E9',
            padding: '30px 20px',
            borderRadius: '8px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }} onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
          }} onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              fontSize: '36px',
              marginBottom: '15px'
            }}>{service.icon}</div>
            <h3 style={{
              fontSize: '18px',
              marginBottom: '10px',
              fontWeight: '500',
              color: '#1B5E20',
              textAlign: 'center'
            }}>{service.title}</h3>
            <p style={{
              fontSize: '14px',
              color: '#33691E',
              textAlign: 'center'
            }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;