import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Reminder from './components/Reminder';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    services: false,
    projects: false,
    testimonials: false,
    reminder: false,
    footer: false
  });

  // 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // 페이지 로드 시 첫 번째 섹션만 보이게 설정
    setVisibleSections(prev => ({...prev, hero: true}));

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 스크롤 위치에 따라 섹션 가시성 업데이트
  useEffect(() => {
    const triggerHeight = window.innerHeight * 0.8; // 화면 높이의 80% 지점에서 트리거

    // 각 섹션의 위치 확인 및 가시성 설정
    const checkVisibility = (id, sectionKey) => {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top < triggerHeight) {
        setVisibleSections(prev => ({...prev, [sectionKey]: true}));
      }
    };

    checkVisibility('services-section', 'services');
    checkVisibility('projects-section', 'projects');
    checkVisibility('testimonials-section', 'testimonials');
    checkVisibility('reminder-section', 'reminder');
    checkVisibility('footer-section', 'footer');
  }, [scrollY]);

  // 스크롤 함수
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <Hero isVisible={visibleSections.hero} />
        <Services isVisible={visibleSections.services} />
        <Projects isVisible={visibleSections.projects} />
        <Testimonials isVisible={visibleSections.testimonials} />
        <Reminder isVisible={visibleSections.reminder} />
      </div>
      <Footer isVisible={visibleSections.footer} scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;