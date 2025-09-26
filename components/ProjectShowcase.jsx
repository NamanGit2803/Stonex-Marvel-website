import React, { useState, useRef } from 'react';
import styles from '../styles/ProjectShowcase.module.css';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState('Residential');
  const sliderRef = useRef(null);

  // Sample project data - you can replace this with your actual data
  const projects = [
    {
      id: 1,
      title: 'Mr. Goyal x Tilak Stone Arts',
      image: 'https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1733043480807.jpeg&w=1920&q=75',
      link: '/Residential/detail/manoj-goyal-marble-pooja-room-in-rohtak-haryana'
    },
    {
      id: 2,
      title: 'Mr. Mehta X Tilak Stone Arts',
      image: 'https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1732991607721.jpeg&w=1920&q=75',
      link: '/Residential/detail/parvesh-mehta-marble-temple-in-ashok-vihar-delhi'
    },
    {
      id: 3,
      title: 'Mrs. Nisha x Tilak Stone Arts',
      image: 'https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1732984135083.jpeg&w=1920&q=75',
      link: '/Residential/detail/nisha-jain-samosharana-marble-temple-in-worli-mumbai-maharashtra'
    },
    {
      id: 4,
      title: 'Miss. Palak X Tilak Stone Arts',
      image: 'https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1733044968981.jpeg&w=1920&q=75',
      link: '/Residential/detail/palak-gupta-marble-temple-in-gorakhpur-uttar-pradesh'
    },
    {
      id: 5,
      title: 'Mr. Poddar X Tilak Stone Arts India',
      image: 'https://www.tilakstonearts.com/_next/image?url=https%3A%2F%2Fapi.servertsa.com%2Fuploads%2F1733851641162.jpeg&w=1920&q=75',
      link: '/Residential/detail/harsh-poddar-marble-pooja-room-in-jaipur-rajasthan'
    }
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.querySelector(`.${styles.slide}`).offsetWidth;
      const gap = 24; // 1.5rem in pixels (assuming 1rem = 16px)
      sliderRef.current.scrollBy({ left: -(slideWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.querySelector(`.${styles.slide}`).offsetWidth;
      const gap = 24; // 1.5rem in pixels (assuming 1rem = 16px)
      sliderRef.current.scrollBy({ left: slideWidth + gap, behavior: 'smooth' });
    }
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
                  onClick={() => setActiveTab('Communal')}
                >
                  Communal
                </li>
                <li
                  className={activeTab === 'Residential' ? styles.active : ''}
                  onClick={() => setActiveTab('Residential')}
                >
                  Residential
                </li>
                <li
                  className={activeTab === 'International' ? styles.active : ''}
                  onClick={() => setActiveTab('International')}
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
                  {projects.map(project => (
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