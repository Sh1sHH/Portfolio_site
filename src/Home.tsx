import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      {/* intro section */}
      <section id="intro" className="s-intro target-section">
        <div className="row s-intro__content width-sixteen-col">
          <div className="column lg-12 s-intro__content-inner grid-block grid-16">
            <div className="s-intro__content-text">
              <div className="s-intro__content-pretitle text-pretitle">Hello</div>
              <h1 className="s-intro__content-title">
                I'm Yusuf Ünal <br />
                a&nbsp;Frontend&nbsp;Dev <br />
                based in İstanbul.
              </h1>
              <div className="s-intro__content-btns">
                <a className="smoothscroll btn" href="#about">More About Me</a>
                <a className="smoothscroll btn btn--stroke" href="#footer">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <ul className="s-intro__social social-list">
          <li>
            <a href="https://www.linkedin.com/in/yyusufunal/">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="u-screen-reader-text">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://x.com/Sh1sHHH">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="u-screen-reader-text">X</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yyusufunal/">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624 C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003 c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z" />
                <circle cx="16.806" cy="7.207" r="1.078" />
                <path d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42 c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111 c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71 c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45 c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633 c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311 c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311 c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654 c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712 c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055 c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669 c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z" />
              </svg>
              <span className="u-screen-reader-text">Instagram</span>
            </a>
          </li>
        </ul>

        {/* Intro Media */}
        <div className="s-intro__content-media">
          <img src={`${process.env.PUBLIC_URL}/images/pp2.jpeg`} 
               srcSet={`${process.env.PUBLIC_URL}/images/pp2.jpeg 1x, ${process.env.PUBLIC_URL}/images/pp2.jpeg 2x`} 
               alt="Profile" 
               style={{
                 boxShadow: '0 4px 170px rgb(255, 0, 0)',
               }}
          />
        </div>

        {/* Download CV Button */}
        <div className="s-intro__btn-download">
          <a className="btn btn--stroke" href="#0">Get My CV</a>
        </div>

        {/* Scroll Down */}
        <div className="s-intro__scroll-down">
          <a href="#about" className="smoothscroll">
            <div className="scroll-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" />
              </svg>
            </div>
            <span className="scroll-text u-screen-reader-text">Scroll Down</span>
          </a>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="s-about target-section">
        <div className="row s-about__content">
          <div className="column xl-12">    
            <div className="section-header" data-num="01">
              <h2 className="text-display-title">About Me.</h2>
            </div>
            <p className="attention-getter">
            I started my journey in frontend development as a hobby, experimenting with HTML, CSS, and JavaScript in my free time. Over time, what began as curiosity turned into a real passion. Now, I am working to turn this passion into a professional career.            </p>
            <p className="attention-getter">
            I have built 3-4 websites so far, which helped me understand the fundamentals of responsive design, user experience, and modern frontend technologies. As I continue learning and improving, I aim to create clean, functional, and visually appealing websites.            </p>
            <div className="grid-list-items s-about__blocks">
              <div className="grid-list-items__item s-about__block">
                <h4 className="s-about__block-title">Education</h4>
                <ul className="s-about__list">
                  <li>
                  Işık University
                    <span>Management Information Systems (MIS)</span>
                  </li>
                  <li>
                  Kocaeli University
                    <span>Office Management</span>
                  </li>
                  <li>
                  High School
                    <span>Computer Programming</span>
                  </li>
                 
                </ul>
              </div>
              <div className="grid-list-items__item s-about__block">
                <h4 className="s-about__block-title">Skills</h4>
                <ul className="s-about__list">
                  <li>
                    <a href="#0">
                    Frontend Development
                      <span>HTML, CSS, JavaScript, React.js</span>
                    </a>                                        
                  </li>
                  <li>
                    <a href="#0">
                    UI/UX Design
                      <span>Responsive Design, Figma, Tailwind CSS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                    Other Technologies
                      <span>Git, Firebase, APIs, SQL</span>
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Works section */}
      <section id="works" className="s-works target-section">
        <div className="row">
          <div className="column xl-12">
            <div className="section-header" data-num="02">
              <h2 className="text-display-title">Selected Works.</h2>
            </div>
            <p className="attention-getter">
            Below, you can find some of my most recent projects.</p>
          </div>
        </div>
        <div className="row folio-entries">
          {/* Portfolio items */}
          <div className="column xl-6 lg-6 md-6 folio-entry">
            <div className="folio-entry__content">
              <div className="folio-entry__bg" style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/folio/gallery/arafat.png)`
              }}></div>
              <a href="https://arafatkofte.com" className="folio-entry__link" target="_blank" rel="noopener noreferrer">
                <div className="folio-entry__text">
                  <div className="folio-entry__cat">Arafat Köfte</div>
                  <div className="folio-entry__title">Business Websites</div>
                </div>
                <div className="folio-entry__counter">01</div>
              </a>
            </div>
          </div>
          <div className="column xl-6 lg-6 md-6 folio-entry">
            <div className="folio-entry__content">
              <div className="folio-entry__bg" style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/folio/gallery/endy.png)`
              }}></div>
              <a href={`${process.env.PUBLIC_URL}/images/folio/gallery/endyfull.png`} className="folio-entry__link glightbox">
                <div className="folio-entry__text">
                  <div className="folio-entry__cat">Endy</div>
                  <div className="folio-entry__title">Crypto Projects</div>
                </div>
                <div className="folio-entry__counter">02</div>
              </a>
            </div>
          </div>
          <div className="column xl-6 lg-6 md-6 folio-entry">
            <div className="folio-entry__content">
              <div className="folio-entry__bg" style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/folio/gallery/coinversation.png)`
              }}></div>
              <a href={`${process.env.PUBLIC_URL}/images/folio/gallery/coinversatiofull.png`} className="folio-entry__link glightbox">
                <div className="folio-entry__text">
                  <div className="folio-entry__cat">Coinversation</div>
                  <div className="folio-entry__title">Crypto Projects</div>
                </div>
                <div className="folio-entry__counter">03</div>
              </a>
            </div>
          </div>
          <div className="column xl-6 lg-6 md-6 folio-entry">
            <div className="folio-entry__content">
              <div className="folio-entry__bg" style={{ 
                backgroundColor: '#fe4b4b',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '102px'
              }}>
                <span>?</span>
              </div>
              <a href="#0" className="folio-entry__link">
                <div className="folio-entry__text">
                  <div className="folio-entry__cat">What's Next?</div>
                  <div className="folio-entry__title">Your Project Here</div>
                </div>
                <div className="folio-entry__counter">04</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer id="footer" className="s-footer target-section" style={{ marginTop: '20rem' }}>
        <div className="row">
          <div className="column lg-12">
            <div className="section-header light-on-dark" data-num="03">
              <h2 className="text-display-title">Get In Touch.</h2>
            </div>
          </div>
        </div>
        <div className="row s-footer__content">
          <div className="column xl-6 md-12 s-footer__block s-footer__about">                    
            <p className="attention-getter">
            I'm always excited to connect with like-minded individuals, collaborate on new projects, and discuss anything related to frontend development and web technologies. Whether you have a project in mind, need assistance, or just want to chat, feel free to reach out!
            </p>               
          </div>
          <div className="column xl-6 md-12 s-footer__block s-footer__site-links">
            <div className="row">
              <div className="column xl-4 lg-5 md-6 tab-12">
                <h5>Follow Me</h5>
                <ul className="link-list">
                  <li><a href="https://www.linkedin.com/in/yyusufunal/">LinkedIn</a></li>
                  <li><a href="https://x.com/Sh1sHHH">X</a></li>
                  <li><a href="https://www.instagram.com/yyusufunal/">Instagram</a></li>
                  
                </ul>
              </div>
              <div className="column xl-6 md-6 tab-12">
                <h5>Contact Me</h5>
                <ul className="link-list">
                  <li><a href="mailto:#0">yyusufunal997@gmail.com</a></li>
                </ul> 
              </div>
            </div>                    
          </div>
        </div>
        <div className="row s-footer__buttons">
          <div className="column xl-12 tab-12" style={{ display: 'flex', justifyContent: 'center' }}>                    
            <a href="#0" className="btn btn--stroke btn--large" style={{ maxWidth: '400px', width: '100%' }}>Get My CV</a>
          </div>
        </div>
        
      </footer>
    </>
  );
};

export default Home; 