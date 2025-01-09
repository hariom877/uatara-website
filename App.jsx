import React from 'react';
    import placeholderImage from './assets/placeholder.png';

    function App() {
      return (
        <div>
          <header>
            <h1>Utara Managements and Consultants</h1>
            <p>Transforming Properties into High-Performing Assets</p>
          </header>

          <div className="container">
            <section>
              <h2>About Me</h2>
              <p>
                With extensive experience in developing and managing over 20 properties across Delhi NCR, Jaipur, and Uttarakhand, I specialize in creating unique and profitable Airbnb experiences. My vision is to maximize rental yields for property owners while providing exceptional stays for guests.
              </p>
            </section>

            <section>
              <h2>Services Offered</h2>
              <div className="services-grid">
                <div className="service-card">
                  <h3>Airbnb Management</h3>
                  <p>Full-service management of your Airbnb property, from listing creation to guest communication and maintenance.</p>
                </div>
                <div className="service-card">
                  <h3>Property Consulting</h3>
                  <p>Expert advice on property selection, setup, and optimization for maximum rental income.</p>
                </div>
                <div className="service-card">
                  <h3>Themed Property Creation</h3>
                  <p>Design and implementation of unique themed properties that attract specific guest demographics and increase booking rates.</p>
                </div>
              </div>
            </section>

            <section>
              <h2>Achievements</h2>
              <ul className="achievements-list">
                <li>Increased owner earnings by 40-50% above market rates.</li>
                <li>Developed and managed 20+ properties across Delhi NCR, Jaipur, and Uttarakhand.</li>
                <li>Created India’s first 2D and kink-friendly homes.</li>
                <li>Consistently doubled rental yields for property owners.</li>
              </ul>
            </section>

            <section>
              <h2>Case Studies/Testimonials</h2>
              <div className="testimonial-card">
                <img src={placeholderImage} alt="Property Image" />
                <p>"Utara's management services have transformed my property into a high-performing asset. The increase in earnings is remarkable!" - Property Owner, Delhi</p>
              </div>
              <div className="testimonial-card">
                <img src={placeholderImage} alt="Property Image" />
                <p>"The themed home was a unique experience. I would definitely book again!" - Guest, Jaipur</p>
              </div>
            </section>

            <section className="cta-section">
              <h2>Ready to Transform Your Property?</h2>
              <p>Partner with me to unlock the full potential of your property.</p>
              <a href="mailto:your-email@example.com" className="cta-button">Contact Me</a>
            </section>
          </div>

          <footer>
            <p>&copy; 2024 Utara Managements and Consultants</p>
          </footer>
        </div>
      );
    }

    export default App;
