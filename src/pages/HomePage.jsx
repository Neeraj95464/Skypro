import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const clients = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div>
      {/* Section 1: Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <video autoPlay muted loop className="hero-video">
          <source src="/src/assets/MainScreenVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container text-center">
          <Slider {...settings}>
            <div>
              <h1>Skypro a fastest growing IT company</h1>
              <p>Recognized by many largest companies</p>
            </div>
            <div>
              <h1>We enable you IT relevant and sample</h1>
            </div>
            <div>
              <h1>IT - Skill - Development</h1>
              <p>People, Process, Technology </p>
            </div>
          </Slider>
        </div>
      </section>

      <section className="service-section">
        <div className="container my-5">
          <div className="row">
            {/* Image Section */}
            <div className="col-md-6 p-0 serviceImage">
              <img
                src="src/assets/serviceImage.png"
                alt="Description"
                className="img-fluid w-100 h-100"
              />
            </div>
            {/* Text Description Section */}
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h1>WHAT WE DO </h1>
                <p>
                  We focus on providing the best IT Infrastructure Services to
                  our clients across India that reduces their total cost of
                  investment. Holding expertise in Planning, Developing,
                  Executing, Maintaining and Managing Infra, we enable
                  businesses to become agile and more responsive, thriving in
                  the digital landscape. We use automation and advanced
                  analytics to intellectually manage critical infra elements. We
                  understand the dynamic scenario of various businesses clearly
                  and hence work towards providing them with cutting-edge
                  solutions. Our experts are backed by certified training and
                  skills from industry-leading vendors.
                </p>
                <ul>
                  <li>
                    <h3>
                      <a href="">IT INFRASTRUCTURE SUPPORT</a>
                    </h3>
                  </li>
                  <li>
                    <h3>STAFFING</h3>
                  </li>
                  <li>
                    <h3>APP DEVELOPMENT</h3>
                  </li>
                  <li>
                    <h3>CLOUD SOLUTIONS</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Box-section d-flex align-items-center">
        <div className="container mt-5">
          <h2 className="section-heading text-center mb-4">
            IT INFRASTRUCTURE SUPPORT
          </h2>
          <p className="section-pragraph text-center mb-4">
            We consider each aspect of your IT environment, not just individual
            components
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card box">
                <div className="card-body">
                  <h5 className="card-title">Box 1</h5>
                  <p className="card-text">Content for Box 1 goes here.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card box">
                <div className="card-body">
                  <h5 className="card-title">Box 2</h5>
                  <p className="card-text">Content for Box 2 goes here.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card box">
                <div className="card-body">
                  <h5 className="card-title">Box 3</h5>
                  <p className="card-text">Content for Box 3 goes here.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card box">
                <div className="card-body">
                  <h5 className="card-title">Box 4</h5>
                  <p className="card-text">Content for Box 4 goes here.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card box">
                <div className="card-body">
                  <h5 className="card-title">Box 5</h5>
                  <p className="card-text">Content for Box 5 goes here.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card box">
                <div className="card-body">
                  <h5 className="card-title">Box 6</h5>
                  <p className="card-text">Content for Box 6 goes here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="staffing">
        <div className="container my-5">
          <div className="row">
            {/* Image Section */}

            {/* Text Description Section */}
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h2>Title of the Section</h2>
                <p>
                  This is a detailed description of the image. You can provide
                  more information about the content displayed in the image,
                  such as context, significance, or any other relevant details.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://toppng.com/uploads/preview/family-clipart-technology-science-and-technology-clipart-11563119821yia1qo8jhg.png"
                alt="Description"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="award-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Award and Recognition</h2>
          <p className="text-center">
            Our school has been honored with various awards and recognition for
            academic excellence and extracurricular achievements.
          </p>
        </div>
      </section>
      <section className="clients">
        <div className="container text-center">
          <Slider {...clients}>
            <div>
              <h1>Skypro a fastest growing IT company</h1>
              <p>Recognized by many largest companies</p>
            </div>
            <div>
              <h1>We enable you IT relevant and sample</h1>
            </div>
            <div>
              <h1>IT - Skill - Development</h1>
              <p>People, Process, Technology </p>
            </div>
          </Slider>
        </div>
      </section>
      <section>
        <h1>Event</h1>
      </section>
      <section>
        <h1>where we are </h1>
      </section>
      <section></section>
    </div>
  );
};

export default HomePage;
