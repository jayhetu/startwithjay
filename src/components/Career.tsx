import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fractional CMO</h4>
                <h5>Laser Eye Care and Research Center, Dubai</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Leading the marketing strategy supporting 5M+ annual revenue while
              improving consultation flow, messaging, and conversion performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co Founder</h4>
                <h5>Impact XL</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Helping companies build structured marketing systems that generate
              Sales Qualified Leads and support revenue growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Director of Performance Marketing</h4>
                <h5>Health Before Wealth</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Leading growth strategy and marketing systems focused on sustainable
              growth and long term customer value.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing and Operations Manager</h4>
                <h5>Tech Firefly</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Led B2B client acquisition and marketing for companies in the San
              Francisco Bay Area.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co Founder</h4>
                <h5>HETU Infotech</h5>
              </div>
              <h3>2010</h3>
            </div>
            <p>
              Worked with more than 300 brands and startups helping them build
              their online presence and digital business models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
