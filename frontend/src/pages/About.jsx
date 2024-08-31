import { NavLink } from "react-router-dom";
import ams from "../assets/images/ams.jpg"
const About = () => {
  return (
    <>
      <main className="max-w-[20.5rem] sm:max-w-[40rem] lg:max-w-[50rem] xl:max-w-[75rem] mx-auto overflow-hidden mt-5 lg:mt-10 ">
        <section className="section-hero">
          <div className="container flex flex-col justify-evenly items-center lg:justify-between">
            <div className="hero-content w-[20rem] sm:w-[100%] sm:text-2xl items-center">
              <h1 className="text-[#1e293b] text-xl font-bold w-80 sm:w-[100%] py-5 sm:text-4xl ">Why Choose Our Attendance Management System?</h1>
              <p className="">
                <b>Efficiency:</b> Our system streamlines the attendance tracking process, saving time and reducing manual errors.
              </p>
              <p className="py-5">
                <b>Customization: </b>  Tailored to meet the specific needs of your organization, whether you're a small business, a school, or a large corporation.
              </p>
              <p className="py-5">
              <b> Real-Time Monitoring:</b> Stay updated with real-time data, ensuring accurate attendance records and timely insights.
              </p>
              <p>
              <b> User-Friendly Interface:</b> Designed with simplicity in mind, making it easy for both administrators and users to navigate and manage.
              </p>
              <p className="py-5">
              <b>Security: </b> We prioritize the security of your data, implementing robust measures to protect sensitive information.
              </p>
              <p>
              <b>Scalability: </b>  Our system is designed to grow with your organization, handling increasing numbers of users and data without compromising performance.
              </p>
              
            </div>
            <div className="hero-image items-center lg:mt-5 self-center">
              <img
                src={ams}
                className="lg:w-[38rem] xl:w-[45rem] "
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
