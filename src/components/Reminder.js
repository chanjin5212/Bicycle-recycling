import React from 'react';

const Reminder = ({ isVisible }) => {
  const getAnimationStyle = (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
  });

  return (
    <div id="reminder-section" style={{
      backgroundColor: '#2E7D32',
      padding: '40px 30px',
      borderRadius: '8px',
      marginBottom: '40px',
      position: 'relative',
      color: 'white',
      ...getAnimationStyle(isVisible)
    }}>
      <div style={{ maxWidth: '70%' }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '20px',
          fontWeight: '500'
        }}>지구를 위한 한 걸음, 버려진 자전거에 새 생명을</h2>
        <p style={{
          fontSize: '16px',
          marginBottom: '15px',
          lineHeight: '1.6'
        }}>폐자전거는 단순한 쓰레기가 아닌, 재활용과 업사이클링을 통해 새로운 가치를 창출할 수 있는 소중한 자원입니다. 에코바이크는 이러한 자원을 효과적으로 활용하여 환경 보호와 지속 가능한 미래를 만들어 갑니다.</p>
        <p style={{
          fontSize: '16px',
          marginBottom: '25px',
          lineHeight: '1.6'
        }}>지금 바로 폐자전거 수거 신청을 통해 환경 보호에 동참해 보세요. 여러분의 작은 실천이 지구 환경을 위한 큰 변화를 만듭니다.</p>
        <a href="#footer-section" 
           onClick={(e) => {
             e.preventDefault();
             document.getElementById('footer-section').scrollIntoView({ behavior: 'smooth' });
           }}
           style={{
          display: 'inline-block',
          fontSize: '16px',
          marginTop: '10px',
          padding: '10px 24px',
          backgroundColor: 'white',
          color: '#2E7D32',
          borderRadius: '24px',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          fontWeight: 'bold'
        }} onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }} onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>지금 신청하기</a>
      </div>
      <div style={{
        position: 'absolute',
        right: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '180px',
        height: '180px',
        backgroundColor: 'rgba(255,255,255,0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        overflow: 'hidden'
      }}>
        <div style={{
          fontSize: '100px'
        }}>🚲</div>
      </div>
    </div>
  );
};

export default Reminder;