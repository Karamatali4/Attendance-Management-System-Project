import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1>Why Choose Our Attendance Management System?</h1>
              <p>
                **Efficiency**: Our system streamlines the attendance tracking process, saving time and reducing manual errors.
              </p>
              <p>
                **Customization**: Tailored to meet the specific needs of your organization, whether you're a small business, a school, or a large corporation.
              </p>
              <p>
                **Real-Time Monitoring**: Stay updated with real-time data, ensuring accurate attendance records and timely insights.
              </p>
              <p>
                **User-Friendly Interface**: Designed with simplicity in mind, making it easy for both administrators and users to navigate and manage.
              </p>
              <p>
                **Security**: We prioritize the security of your data, implementing robust measures to protect sensitive information.
              </p>
              <p>
                **Scalability**: Our system is designed to grow with your organization, handling increasing numbers of users and data without compromising performance.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Get Started</button>
                </NavLink>
                <button className="btn secondary-btn">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/attendance-management.png"
                alt="Attendance Management System"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
