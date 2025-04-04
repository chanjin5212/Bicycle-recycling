import React from 'react';

const Testimonials = ({ isVisible }) => {
  const getAnimationStyle = (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
  });

  const testimonials = [
    {
      quote: "아파트 지하주차장에 오랫동안 방치되어 있던 폐자전거들을 무료로 수거해주셔서 정말 감사합니다. 덕분에 공간도 깨끗해지고 환경 보호에도 기여할 수 있어 일석이조였습니다.",
      author: "김미영",
      position: "아파트 관리사무소 소장"
    },
    {
      quote: "우리 학교에서 진행된 자전거 재활용 교육 프로그램이 학생들에게 큰 영향을 주었습니다. 환경 보호의 중요성을 실제 경험을 통해 배울 수 있었던 소중한 기회였습니다.",
      author: "박지훈",
      position: "중학교 교사"
    },
    {
      quote: "폐자전거 부품으로 만든 업사이클링 제품들이 너무 독특하고 멋졌습니다. 환경을 생각하는 소비가 이렇게 아름다울 수 있다는 것을 깨달았습니다.",
      author: "이수진",
      position: "전시회 방문객"
    },
    {
      quote: "기업의 사회적 책임 활동으로 에코바이크와 함께 진행한 프로젝트는 직원들의 환경 의식을 높이고 실질적인 변화를 만드는 데 큰 도움이 되었습니다.",
      author: "최준호",
      position: "기업 CSR 담당자"
    }
  ];

  return (
    <div id="testimonials-section" style={{
      ...getAnimationStyle(isVisible)
    }}>
      <h2 style={{
        fontSize: '24px',
        margin: '40px 0 30px',
        fontWeight: '500',
        textAlign: 'center',
        color: '#1B5E20'
      }}>이용 후기</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{
            backgroundColor: '#F1F8E9',
            padding: '25px',
            borderRadius: '8px',
            position: 'relative',
            paddingBottom: '70px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '1px solid #C8E6C9'
          }} onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
          }} onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <p style={{
              fontSize: '16px',
              color: '#33691E',
              marginBottom: '15px',
              lineHeight: '1.6',
              fontStyle: 'italic'
            }}>"{ testimonial.quote }"</p>
            <p style={{
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#1B5E20'
            }}>- { testimonial.author }</p>
            <p style={{
              fontSize: '14px',
              color: '#558B2F'
            }}>{ testimonial.position }</p>
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: '#81C784',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontSize: '16px'
            }}>
              ♻️
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;