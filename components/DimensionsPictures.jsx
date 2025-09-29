import React, { useState, useEffect } from 'react';
import { FaTimes, FaRulerCombined, FaCamera, FaArrowRight } from 'react-icons/fa';
import styles from '../styles/DimensionsPictures.module.css';

const DimensionsPictures = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    userType: ''
  });

  const [focusedFields, setFocusedFields] = useState({
    fullName: false,
    email: false,
    phone: false,
    city: false
  });

  // Prevent background scrolling when form is visible
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showForm]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFocus = (field) => {
    setFocusedFields({
      ...focusedFields,
      [field]: true
    });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocusedFields({
        ...focusedFields,
        [field]: false
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setShowForm(false);
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.contentColumn}>
              <div className={styles.content}>

                
                <h2>Share Your Space Details - We'll Handle the Rest!</h2>
                <p>To create your perfect pooja unit design, we just need some basic information about your space. Have your room measurements and a few photos ready, and we'll take care of the creative magic!</p>
                
                <div className={styles.featureList}>
                  <div className={styles.feature}>
                    <FaArrowRight className={styles.featureArrow} />
                    <span>Quick & easy space evaluation</span>
                  </div>
                  <div className={styles.feature}>
                    <FaArrowRight className={styles.featureArrow} />
                    <span>Personalized design just for you</span>
                  </div>
                  <div className={styles.feature}>
                    <FaArrowRight className={styles.featureArrow} />
                    <span>Complimentary design consultation</span>
                  </div>
                </div>
                
                <div className={styles.btnFree} onClick={handleButtonClick}>
                  <span>Start Your Design Journey</span>
                  <FaArrowRight className={styles.btnIcon} />
                </div>
              </div>
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <div className={styles.serviceImg}>
                  {/* Temple design appropriate image */}
                </div>
                <div className={styles.imageOverlay}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form overlay - unchanged */}
      {showForm && (
        <div className={styles.formOverlay}>
          <div className={styles.formContainer}>
            <button className={styles.closeButton} onClick={handleCloseForm}>
              <FaTimes />
            </button>
            
            <div className={styles.contactForm}>
              <h2>Talk to Our Expert</h2>
              
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('fullName')}
                      onBlur={() => handleBlur('fullName')}
                      required 
                    />
                    <label 
                      htmlFor="fullName" 
                      className={formData.fullName || focusedFields.fullName ? styles.focusedLabel : ''}
                    >
                      Full Name *
                    </label>
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      required 
                    />
                    <label 
                      htmlFor="email" 
                      className={formData.email || focusedFields.email ? styles.focusedLabel : ''}
                    >
                      Email Address *
                    </label>
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <div className={styles.phoneInputContainer}>
                      <div className={`${styles.phoneInput} ${focusedFields.phone ? styles.phoneInputFocused : ''}`}>
                        <span className={styles.countryCode}>+91</span>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('phone')}
                          onBlur={() => handleBlur('phone')}
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <input 
                      type="text" 
                      id="city" 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('city')}
                      onBlur={() => handleBlur('city')}
                      required 
                    />
                    <label 
                      htmlFor="city" 
                      className={formData.city || focusedFields.city ? styles.focusedLabel : ''}
                    >
                      City *
                    </label>
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.radioLabel}>Tell us about yourself *</label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioOption}>
                      <input 
                        type="radio" 
                        name="userType" 
                        value="homeowner"
                        checked={formData.userType === 'homeowner'}
                        onChange={handleInputChange}
                      />
                      I am a homeowner looking for a pooja unit or pooja room
                    </label>
                    
                    <label className={styles.radioOption}>
                      <input 
                        type="radio" 
                        name="userType" 
                        value="designer"
                        checked={formData.userType === 'designer'}
                        onChange={handleInputChange}
                      />
                      I am an interior designer/consultant seeking solutions for my client
                    </label>
                  </div>
                </div>
                
                <button type="submit" className={styles.nextButton}>Next</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DimensionsPictures;