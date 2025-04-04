import React from 'react';

const Projects = ({ isVisible }) => {
  const getAnimationStyle = (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
  });

  const projects = [
    { title: '서울시 아파트 단지 수거 프로젝트', desc: '100개 이상의 폐자전거 수거' },
    { title: '학교 연계 환경교육 프로그램', desc: '30개 학교, 2천명 학생 참여' },
    { title: '자전거 부품 업사이클링 전시회', desc: '예술작품 50점 전시 및 경매' },
    { title: '지역 커뮤니티 자전거 수리 봉사', desc: '지역 주민 200대 자전거 수리' },
    { title: '기업 연계 ESG 활동', desc: '대기업 5곳과 협력 프로젝트' },
    { title: '공공기관 폐자전거 처리 솔루션', desc: '연간 500대 처리 시스템 구축' }
  ];

  return (
    <div id="projects-section" style={{
      ...getAnimationStyle(isVisible)
    }}>
      <h2 style={{
        fontSize: '24px',
        margin: '40px 0 30px',
        fontWeight: '500',
        textAlign: 'center',
        color: '#1B5E20'
      }}>활동 사례</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{ 
            marginBottom: '15px',
            transition: 'transform 0.3s ease',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#FFF',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
          }} onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.03)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
          }} onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
          }}>
            <div style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#C8E6C9',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden'
            }}>
              <img src="/placeholder.png" alt={`활동 사례 이미지 ${index + 1}`} width="100" height="100" style={{
                transition: 'transform 0.5s ease',
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }} />
            </div>
            <div style={{ padding: '15px' }}>
              <h3 style={{ 
                marginBottom: '5px', 
                fontSize: '16px',
                color: '#1B5E20'
              }}>{project.title}</h3>
              <p style={{ 
                margin: 0, 
                fontSize: '14px',
                color: '#689F38'
              }}>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="#" style={{
          display: 'inline-block',
          backgroundColor: '#388E3C',
          color: 'white',
          padding: '8px 24px',
          borderRadius: '24px',
          textDecoration: 'none',
          fontSize: '16px',
          margin: '10px 0 40px',
          transition: 'background-color 0.3s ease, transform 0.3s ease',
        }} onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#2E7D32';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }} onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#388E3C';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>더 많은 사례 보기</a>
      </div>
    </div>
  );
};

export default Projects;