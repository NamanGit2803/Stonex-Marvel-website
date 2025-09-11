import React from 'react';
import styles from '@/styles/DimensionsPictures.module.css';
import Image from 'next/image';

const DimensionsPictures = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.colLg8} ${styles.colMd8}`}>
            <div className={styles.customWidth}>
              <h2>All we Need is your Space Dimensions and Pictures</h2>
              <p>Before starting the session, we require you to have your site pictures and dimensions ready. This allows us to understand your space and craft a suitable solution, ensuring we make the most out of our concept discovery session.</p>
              <div className={styles.btnFree}>Get Free Consultation</div>
            </div>
          </div>
          <div className={`${styles.colLg4} ${styles.colMd4}`}>
            <div className={styles.serviceImg}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimensionsPictures;