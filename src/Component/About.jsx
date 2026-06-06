
function About() {
  return (
    <section className="container-fluid About py-5 overflow-hidden" id='about'>

      <div className="container">

        <div className="row align-items-center gy-5">

         
          <div className="col-12 col-lg-6">

         
            <p
              className="text-light border border-1 rounded-pill text-center px-3 py-2"
              style={{ width: "140px" }}
            >
              About us
            </p>

          
            <h1 className="fw-bold text-light About-title my-4">
              We Build Digital Products
              <br />
              That Drive Growth
            </h1>

            <p className="text-light fs-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>

           
            <div className="Numbers rounded-4 p-4 mt-4">

              <div className="row text-center gy-4">

                <div className="col-6">
                  <h2 className="text-success fw-bold">12+</h2>
                  <p className="text-light mb-0">
                    Years Experience
                  </p>
                </div>

                <div className="col-6">
                  <h2 className="text-success fw-bold">95%</h2>
                  <p className="text-light mb-0">
                    Client Retention
                  </p>
                </div>

                <div className="col-6">
                  <h2 className="text-success fw-bold">150+</h2>
                  <p className="text-light mb-0">
                    Projects Delivered
                  </p>
                </div>

                <div className="col-6">
                  <h2 className="text-success fw-bold">85+</h2>
                  <p className="text-light mb-0">
                    Happy Clients
                  </p>
                </div>

              </div>
            </div>

         
            <div className="d-flex gap-3 mt-5">

              <div className="fs-2">
                ⚡
              </div>

              <div>
                <h4 className="text-light fw-bold">
                  Fast Delivery
                </h4>

                <p className="text-light">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </p>
              </div>

            </div>

           
            <div className="d-flex gap-3 mt-3">

              <div className="fs-2">
                🛡️
              </div>

              <div>
                <h4 className="text-light fw-bold">
                  Quality Assured
                </h4>

                <p className="text-light">
                  Sed quia consequuntur magni dolores eos qui ratione.
                </p>
              </div>

            </div>

            
            <div className="d-flex flex-column flex-sm-row gap-3 mt-5">

              <button className="btn btn-success px-4 py-3 fw-bold">
                Start Your Project
              </button>

              <button className="btn border border-1 border-light text-light px-4 py-3 fw-bold">
                View Portfolio
              </button>

            </div>

          </div>

         
          <div className="col-12 col-lg-6">

            <div className="position-relative d-flex justify-content-center">

         
              <img
                src="https://i.pinimg.com/1200x/19/fc/b9/19fcb9584c8a9748e3a69e09889ab6f0.jpg"
                className="img-fluid rounded-5 eye shadow"
                alt="About"
              />

             
              <img
                src="https://i.pinimg.com/736x/f9/fe/20/f9fe20b3149b3374e8ae7afc87c4d01f.jpg"
                className="eye1 rounded-4 shadow position-absolute"
                alt="Team"
              />

           
              <div className="Award position-absolute d-flex align-items-center gap-3 p-3 rounded-4">

                <h2 className="mb-0">
                  ✨
                </h2>

                <div>
                  <p className="text-light fw-bold mb-0">
                    Award Winning
                  </p>

                  <p className="text-light mb-0">
                    Digital Agency 2024
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
export default About