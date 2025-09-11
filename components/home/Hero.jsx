import React from 'react';
import styles from '@/styles/Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.leftContent}>
          <h1>Let's Get Started With<br />Your Dream Temple</h1>
        </div>
        
        <div className={styles.rightContent}>
          <div className={styles.contactForm}>
            <h2>Talk to Our Expert</h2>
            
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name *</label>
                <input type="text" id="fullName" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone number</label>
                <div className={styles.phoneInput}>
                  <span className={styles.countryCode}>+91</span>
                  <input type="tel" id="phone" />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="city">City *</label>
                <input type="text" id="city" required />
              </div>
              
              <div className={styles.formGroup}>
                <label>Tell us about yourself *</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioOption}>
                    <input type="radio" name="userType" value="homeowner" />
                    <span className={styles.radioCheckmark}></span>
                    I am a homeowner looking for a pooja unit or pooja room
                  </label>
                  
                  <label className={styles.radioOption}>
                    <input type="radio" name="userType" value="designer" />
                    <span className={styles.radioCheckmark}></span>
                    I am an interior designer/consultant seeking solutions for my client
                  </label>
                </div>
              </div>
              
              <button type="submit" className={styles.nextButton}>Next</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;