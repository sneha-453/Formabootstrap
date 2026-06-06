function Testimonials() {
  return (
    <section className="container-fluid hero py-5 overflow-hidden" id='testimonials'>

     
      <div className="container text-center">

        <h6
          className="text-light border border-1 rounded-pill py-2 mx-auto"
          style={{ width: "150px" }}
        >
          Testimonials
        </h6>

        <h1 className="text-light fw-bold mt-4 Testimonials-title">
          Check Our <span className="text-success">Testimonials</span>
        </h1>

      </div>

    
      <div className="container py-5 position-relative">

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >

          <div className="carousel-inner">

          
            <div className="carousel-item active">

              <div className="row box1 rounded-4 p-4 align-items-center gy-5">

              
                <div className="col-12 col-lg-8">

                  <h2 className="text-light fw-bold">
                    Float and Clearfix
                  </h2>

                  <p className="text-light mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur facilis, facere aspernatur consequatur.
                  </p>

                  <p className="text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

             
                  <div className="d-flex align-items-center gap-3 mt-5 flex-wrap">

                    <img
                      src="https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg"
                      alt="client"
                      className="rounded-circle testimonial-user"
                    />

                    <div>

                      <h4 className="text-light mb-1">
                        Jena Karlis
                      </h4>

                      <p className="text-secondary mb-0">
                        Store Owner
                      </p>

                    </div>

                  </div>

                </div>

            
                <div className="col-12 col-lg-4 text-center">

                  <img
                    src="https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg"
                    alt="testimonial"
                    className="img-fluid testimonial-main-img rounded-4"
                  />

                </div>

              </div>

            </div>

          
            <div className="carousel-item">

              <div className="row box1 rounded-4 p-4 align-items-center gy-5">

                <div className="col-12 col-lg-8">

                  <h2 className="text-light fw-bold">
                    Modern Web Design
                  </h2>

                  <p className="text-light mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit cumque neque.
                  </p>

                  <p className="text-light">
                    Building scalable and beautiful user interfaces.
                  </p>

                  <div className="d-flex align-items-center gap-3 mt-5 flex-wrap">

                    <img
                      src="https://i.pinimg.com/1200x/e8/09/8a/e8098a3d487b4fd7b8d591d7d9db32bb.jpg"
                      alt="client"
                      className="rounded-circle testimonial-user"
                    />

                    <div>

                      <h4 className="text-light mb-1">
                        Sarah Smith
                      </h4>

                      <p className="text-secondary mb-0">
                        UI Designer
                      </p>

                    </div>

                  </div>

                </div>

                <div className="col-12 col-lg-4 text-center">

                  <img
                    src="https://i.pinimg.com/1200x/e8/09/8a/e8098a3d487b4fd7b8d591d7d9db32bb.jpg"
                    alt="testimonial"
                    className="img-fluid testimonial-main-img rounded-4"
                  />

                </div>

              </div>

            </div>

     
            <div className="carousel-item">

              <div className="row box1 rounded-4 p-4 align-items-center gy-5">

                <div className="col-12 col-lg-8">

                  <h2 className="text-light fw-bold">
                    Creative Branding
                  </h2>

                  <p className="text-light mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores magnam officiis.
                  </p>

                  <p className="text-light">
                    Helping brands stand out in the digital world.
                  </p>

                  <div className="d-flex align-items-center gap-3 mt-5 flex-wrap">

                    <img
                      src="https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg"
                      alt="client"
                      className="rounded-circle testimonial-user"
                    />

                    <div>

                      <h4 className="text-light mb-1">
                        Alex Brown
                      </h4>

                      <p className="text-secondary mb-0">
                        Marketing Head
                      </p>

                    </div>

                  </div>

                </div>

                <div className="col-12 col-lg-4 text-center">

                  <img
                    src="https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg"
                    alt="testimonial"
                    className="img-fluid testimonial-main-img rounded-4"
                  />

                </div>

              </div>

            </div>

          </div>

   
          <button
            className="carousel-control-prev custom-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          
          <button
            className="carousel-control-next custom-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>

      </div>

    </section>
  );
}
export default Testimonials