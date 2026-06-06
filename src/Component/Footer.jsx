import { FaFacebook, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa"

function Footer() {
  return (
    <div className="container-fluid hero py-5">

      <div className="container">

        <div className="row g-5">

          <div className="col-12 col-md-6 col-lg-4 text-light text-center text-lg-start">

            <h1 className="fw-bold text-success">
              TECH
            </h1>

            <p className="mt-3">
              Cras fermentum odio eu feugiat lide par naso tierra.
              Justo eget nada terra videa magna derita valies darta
              donna mare fermentum iaculis eu non diam phasellus.
            </p>

            <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">

              <a href="#contact" className="social-icon" >
                <FaInstagramSquare />
              </a>

              <a href="#contact" className="social-icon">
                <FaFacebook />
              </a>

              <a href="#contact" className="social-icon">
                <FaPhoneAlt />
              </a>

            </div>

          </div>

        
          <div className="col-6 col-md-3 col-lg-2 text-center text-lg-start">

            <h5 className='text-light mb-4'>
              Useful Links
            </h5>

            <a href="#hero" className="text-decoration-none">
              <p>Home</p>
            </a>

            <a href="#about" className="text-decoration-none">
              <p>About Us</p>
            </a>

            <a href="#service" className="text-decoration-none">
              <p>Services</p>
            </a>

            <a href="" className="text-decoration-none">
              <p>Terms of Service</p>
            </a>

            <a href="" className="text-decoration-none">
              <p>Privacy Policy</p>
            </a>

          </div>

          
          <div className="col-6 col-md-3 col-lg-3 text-center text-lg-start">

            <h5 className='text-light mb-4'>
              Our Services
            </h5>

            <a href="" className="text-decoration-none">
              <p>Web Design</p>
            </a>

            <a href="" className="text-decoration-none">
              <p>Web Development</p>
            </a>

            <a href="" className="text-decoration-none">
              <p>Product Management</p>
            </a>

            <a href="" className="text-decoration-none">
              <p>Marketing</p>
            </a>

            <a href="" className="text-decoration-none">
              <p>Graphic Design</p>
            </a>

          </div>


          <div className="col-12 col-md-6 col-lg-3 text-center text-lg-start">

            <h5 className='text-light mb-4'>
              Contact Us
            </h5>

            <p className="text-light">
              A108 Adam Street <br />
              New York, NY 535022 <br />
              United States
            </p>

            <p className="text-light mt-4 mb-1">
              <strong>Phone:</strong> +1 5589 55488 55
            </p>

            <p className="text-light">
              <strong>Email:</strong> info@example.com
            </p>

          </div>

        </div>

        <div className="container mt-5 py-2 last rounded-4">

          <h6 className='text-center text-light mb-1'>
            © Copyright Forma All Rights Reserved
          </h6>

          <p className='text-center text-light mb-0'>
            Designed by BootstrapMade
          </p>

        </div>
      </div>

    </div>
  )
}
export default Footer