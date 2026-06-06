import { FaFacebook, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa"

function Team() {
  return (
    <section className='container-fluid About py-5' id='team'>

      <div className="container">

       
        <div className='text-center'>

          <h6
            className='text-light border border-1 rounded-pill py-2 mx-auto'
            style={{ width: "150px" }}
          >
            Team
          </h6>

          <h1 className='text-light fw-bold mt-4 display-5'>
            Check Our <span className="text-success">Team</span>
          </h1>

        </div>

       
        <div className="row align-items-center mt-5">

          <div className="col-12 col-lg-8 text-center text-lg-start">

            <h1 className="text-white fw-bold">
              Our Professional Team
            </h1>

            <hr className='text-primary fw-bold mb-3 line mx-auto mx-lg-0' />

            <p className='text-light'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
            </p>

          </div>

        </div>

        <div className="row g-4 mt-3">

         
          <div className="col-12 col-sm-6 col-lg-3">

            <div className="team-card position-relative overflow-hidden rounded-4 h-100">

              <img
                src="https://i.pinimg.com/736x/ca/7e/ed/ca7eedd09e00f0cb7286cc6d0ba11765.jpg"
                alt=""
                className="img-fluid w-100"
                style={{
                  height: "400px",
                  objectFit: "cover"
                }}
              />

              <div className="team-overlay">

                <div>

                  <h3 className="text-light fw-bold mb-1">
                    Jena Karlis
                  </h3>

                  <p className="text-light mb-4">
                    UI / UX Designer
                  </p>

                  <div className="d-flex gap-3 justify-content-center justify-content-lg-start">

                    <a href="#" className="social-icon">
                      <FaInstagramSquare />
                    </a>

                    <a href="#" className="social-icon">
                      <FaFacebook />
                    </a>

                    <a href="#" className="social-icon">
                      <FaPhoneAlt />
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

      
          <div className="col-12 col-sm-6 col-lg-3">

            <div className="team-card position-relative overflow-hidden rounded-4 h-100">

              <img
                src="https://i.pinimg.com/736x/47/17/7c/47177c30bbb956e72980c858a2f86e8c.jpg"
                alt=""
                className="img-fluid w-100"
                style={{
                  height: "400px",
                  objectFit: "cover"
                }}
              />

              <div className="team-overlay">

                <div>

                  <h3 className="text-light fw-bold mb-1">
                    Sarah Smith
                  </h3>

                  <p className="text-light mb-4">
                    Frontend Developer
                  </p>

                  <div className="d-flex gap-3 justify-content-center justify-content-lg-start">

                    <a href="#" className="social-icon">
                      <FaInstagramSquare />
                    </a>

                    <a href="#" className="social-icon">
                      <FaFacebook />
                    </a>

                    <a href="#" className="social-icon">
                      <FaPhoneAlt />
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

      
          <div className="col-12 col-sm-6 col-lg-3">

            <div className="team-card position-relative overflow-hidden rounded-4 h-100">

              <img
                src="https://i.pinimg.com/1200x/2b/b6/3e/2bb63eb96b47d44977cf2ba77145f127.jpg"
                alt=""
                className="img-fluid w-100"
                style={{
                  height: "400px",
                  objectFit: "cover"
                }}
              />

              <div className="team-overlay">

                <div>

                  <h3 className="text-light fw-bold mb-1">
                    Alex Brown
                  </h3>

                  <p className="text-light mb-4">
                    Backend Engineer
                  </p>

                  <div className="d-flex gap-3 justify-content-center justify-content-lg-start">

                    <a href="#" className="social-icon">
                      <FaInstagramSquare />
                    </a>

                    <a href="#" className="social-icon">
                      <FaFacebook />
                    </a>

                    <a href="#" className="social-icon">
                      <FaPhoneAlt />
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

          
          <div className="col-12 col-sm-6 col-lg-3">

            <div className="team-card position-relative overflow-hidden rounded-4 h-100">

              <img
                src="https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg"
                alt=""
                className="img-fluid w-100"
                style={{
                  height: "400px",
                  objectFit: "cover"
                }}
              />

              <div className="team-overlay">

                <div>

                  <h3 className="text-light fw-bold mb-1">
                    Emma Wilson
                  </h3>

                  <p className="text-light mb-4">
                    Project Manager
                  </p>

                  <div className="d-flex gap-3 justify-content-center justify-content-lg-start">

                    <a href="#" className="social-icon">
                      <FaInstagramSquare />
                    </a>

                    <a href="#" className="social-icon">
                      <FaFacebook />
                    </a>

                    <a href="#" className="social-icon">
                      <FaPhoneAlt />
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
export default Team