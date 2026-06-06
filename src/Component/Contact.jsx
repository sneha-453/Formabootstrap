import { FaPhoneAlt } from "react-icons/fa"
import { HiBuildingOffice } from "react-icons/hi2"
import { MdEmail } from "react-icons/md"

function Contact() {
  return (
    <>
      <section className='container-fluid About py-5' id='contact'>

        
        <div className="container text-center">

          <h6
            className='text-light border border-1 rounded-pill py-2 mx-auto'
            style={{ width: "120px" }}
          >
            CONTACT
          </h6>

          <h1 className='text-light fw-bold mt-4 display-5'>
            Need Help ? <span className="text-success">Contact Us</span>
          </h1>

        </div>

      
        <div className='container mt-5'>

          <div className="row g-5 align-items-start">

            
            <div className="col-12 col-xl-6">

              <p
                className='text-light border border-1 rounded-pill py-2 px-3 text-center text-md-start'
                style={{ maxWidth: "260px" }}
              >
                Let's Build Something Amazing
              </p>

              <h1 className='text-light fw-bold mt-4 display-6'>
                Ready to Transform Your Digital Presence?
              </h1>

              <p className='text-white mt-3'>
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium,
                totam rem aperiam.
              </p>

            
              <div className="contact-card rounded-4 p-4 mb-4 mt-5">

                <div className="d-flex align-items-center gap-3 flex-column flex-sm-row text-center text-sm-start">

                  <div className="contact-icon">
                    <MdEmail />
                  </div>

                  <div>

                    <h5 className="text-light fw-bold mb-1">
                      Email
                    </h5>

                    <h6 className="text-light fw-semibold">
                      hello@example.com
                    </h6>

                    <p className="text-secondary mb-0">
                      We reply within 4 hours
                    </p>

                  </div>

                </div>

              </div>

              <div className="contact-card rounded-4 p-4 mb-4">

                <div className="d-flex align-items-center gap-3 flex-column flex-sm-row text-center text-sm-start">

                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>

                  <div>

                    <h5 className="text-light fw-bold mb-1">
                      Phone
                    </h5>

                    <h6 className="text-light fw-semibold">
                      +1 (555) 234-5678
                    </h6>

                    <p className="text-secondary mb-0">
                      Mon-Fri, 9AM-6PM EST
                    </p>

                  </div>

                </div>

              </div>

              
              <div className="contact-card rounded-4 p-4 mb-4">

                <div className="d-flex align-items-center gap-3 flex-column flex-sm-row text-center text-sm-start">

                  <div className="contact-icon">
                    <HiBuildingOffice />
                  </div>

                  <div>

                    <h5 className="text-light fw-bold mb-1">
                      Office
                    </h5>

                    <h6 className="text-light fw-semibold">
                      5632 Market Street, San Francisco
                    </h6>

                    <p className="text-secondary mb-0">
                      Visit us anytime
                    </p>

                  </div>

                </div>

              </div>

       
              <div className="contact-card rounded-4 py-4 px-3">

                <div className="row text-center g-4">

                  <div className="col-12 col-md-4">

                    <h3 className="text-success fw-bold">
                      2.5k+
                    </h3>

                    <p className="text-light mb-0">
                      Happy Clients
                    </p>

                  </div>

                  <div className="col-12 col-md-4 border-md-start border-md-end border-secondary">

                    <h3 className="text-success fw-bold">
                      4.9/5
                    </h3>

                    <p className="text-light mb-0">
                      Client Rating
                    </p>

                  </div>

                  <div className="col-12 col-md-4">

                    <h3 className="text-success fw-bold">
                      15min
                    </h3>

                    <p className="text-light mb-0">
                      Avg Response
                    </p>

                  </div>

                </div>

              </div>

            </div>

        
            <div className="col-12 col-xl-6">

              <div className='startproject rounded-4 p-4 p-md-5'>

                <h1 className='text-light fw-bold'>
                  Start your project
                </h1>

                <p className='text-light mt-3'>
                  Tell us about your project and we'll get back
                  to you with a tailored solution.
                </p>

                <form>

             
                  <div className="mb-4">

                    <label
                      htmlFor="name"
                      className='form-label text-light'
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      placeholder="Enter your full name"
                    />

                  </div>

                  <div className="mb-4">

                    <label
                      htmlFor="email"
                      className='form-label text-light'
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="Enter your email"
                    />

                  </div>

                  
                  <div className="mb-4">

                    <label
                      htmlFor="sub"
                      className='form-label text-light'
                    >
                      Subject
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="sub"
                      placeholder="Enter subject"
                    />

                  </div>

                  
                  <div className="mb-4">

                    <label className="form-label text-light">
                      Message
                    </label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Enter your message"
                    >
                    </textarea>

                  </div>

               
                  <button
                    type="submit"
                    className="btn btn-success py-3 fw-bold w-100"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}
export default Contact