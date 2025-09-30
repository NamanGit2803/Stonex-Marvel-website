import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/ProjectShowcase.module.css';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState('Residential');
  const sliderRef = useRef(null);

  // Updated project data with temple-related titles
  const projects = [
    {
      id: 1,
      title: 'Divine Marble Temple - Rohtak',
      image: 'https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1733043480807.jpeg&w=1920&q=75',
      link: '/Residential/detail/manoj-goyal-marble-pooja-room-in-rohtak-haryana',
      category: 'Communal'
    },
    {
      id: 2,
      title: 'Sacred Marble Temple - Ashok Vihar',
      image: 'https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1732991607721.jpeg&w=1920&q=75',
      link: '/Residential/detail/parvesh-mehta-marble-temple-in-ashok-vihar-delhi',
      category: 'Residential'
    },
    {
      id: 3,
      title: 'Elegant Marble Temple - Worli',
      image: 'https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1732984135083.jpeg&w=1920&q=75',
      link: '/Residential/detail/nisha-jain-samosharana-marble-temple-in-worli-mumbai-maharashtra',
      category: 'Residential'
    },
    {
      id: 4,
      title: 'Traditional Marble Temple - Gorakhpur',
      image: 'https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1733044968981.jpeg&w=1920&q=75',
      link: '/Residential/detail/palak-gupta-marble-temple-in-gorakhpur-uttar-pradesh',
      category: 'Residential'
    },
    {
      id: 5,
      title: 'Royal Marble Temple - Jaipur',
      image: 'https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1733851641162.jpeg&w=1920&q=75',
      link: '/Residential/detail/harsh-poddar-marble-pooja-room-in-jaipur-rajasthan',
      category: 'International'
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => project.category === activeTab);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.querySelector(`.${styles.slide}`).offsetWidth;
      const gap = 24;
      sliderRef.current.scrollBy({ left: -(slideWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.querySelector(`.${styles.slide}`).offsetWidth;
      const gap = 24;
      sliderRef.current.scrollBy({ left: slideWidth + gap, behavior: 'smooth' });
    }
  };

  // Scroll to appropriate card when tab changes
  useEffect(() => {
    if (sliderRef.current) {
      // Scroll to start when tab changes
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Explore Our Projects</h2>

        <div className={`${styles.row} ${styles.justifyContentCenter}`}>
          <div className={styles.colXl10}>
            <div className={styles.btnTab}>
              <ul>
                <li
                  className={activeTab === 'Communal' ? styles.active : ''}
                  onClick={() => handleTabClick('Communal')}
                >
                  Communal
                </li>
                <li
                  className={activeTab === 'Residential' ? styles.active : ''}
                  onClick={() => handleTabClick('Residential')}
                >
                  Residential
                </li>
                <li
                  className={activeTab === 'International' ? styles.active : ''}
                  onClick={() => handleTabClick('International')}
                >
                  International
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.mt4}>
          <div className={styles.row}>
            <div className={styles.colMd12}>
              <div className={styles.sliderContainer}>
                <div className={styles.slider} ref={sliderRef}>
                  {filteredProjects.map(project => (
                    <div key={project.id} className={styles.slide}>
                      <div className={styles.cardProject}>
                        <div className={styles.clientCard}>
                          <a href={project.link}>
                            <div className={styles.cardImg}>
                              <img
                                src={project.image}
                                alt="Project Image"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                          </a>
                          <div className={styles.caption}>
                            <div className={styles.projectTitle}>{project.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.sliderControls}>
                  <button className={styles.slickPrev} onClick={scrollLeft}>
                    <FaChevronLeft />
                  </button>
                  <button className={styles.slickNext} onClick={scrollRight}>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;