function Hero() {
  return (
    <section className="container-fluid hero py-5 overflow-hidden" id='hero'>

      <div className="container py-5">

        <div className="row align-items-center gy-5">


          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">

            <p
              className="text-light border border-1 rounded-pill text-center px-3 py-2"
             style={{
  width: "300px",
  background: "linear-gradient(135deg, #15220b94, rgba(180, 194, 172, 0.49))"
}}
            >
              ✨ Build Smarter. Grow Faster.
            </p>

            <h1 className="text-light fw-bold display-4 my-3">
              Unlock the Power of Innovation
            </h1>

            <p className="text-light fs-5">
             Transform the way your team works with an intelligent SaaS 
             solution designed for speed, scalability, and productivity. 
             Trusted by thousands of modern businesses worldwide.
            </p>


            <div className="d-flex flex-column flex-sm-row gap-3 mt-3">

              <button
                className="btn btn-success fw-bold px-4 py-2"
                type="button"
              >
                Start Free Trial
              </button>

              <button
                className="btn border border-1 border-light text-light fw-bold px-4 py-2"
                type="button"
              >
                Watch Demo
              </button>

            </div>
          </div>


          <div className="col-12 col-lg-6">

            <div className="position-relative d-flex justify-content-center">


              <img
                src="https://i.pinimg.com/736x/93/d3/32/93d33279a24ae4a924d3bbfe44848989.jpg"
                className="img-fluid rounded-4 shadow Tech"
                alt="Tech"
              />


              <div className="Glass position-absolute float1 p-3 rounded">

                <div className="d-flex align-items-center gap-3">
                  <div>✉️</div>

                  <div>
                    <h6 className="text-light fw-bold mb-0">127%</h6>

                    <p
                      className="text-light mb-0"
                      style={{ fontSize: "12px" }}
                    >
                      Revenue Growth
                    </p>
                  </div>
                </div>
              </div>


              <div className="Glass1 position-absolute float2 p-3 rounded">

                <div className="d-flex align-items-center gap-3">
                  <div>📈</div>

                  <div>
                    <h6 className="text-light fw-bold mb-0">40%</h6>

                    <p
                      className="text-light mb-0"
                      style={{ fontSize: "12px" }}
                    >
                      Productivity Boost
                    </p>
                  </div>
                </div>
              </div>


              <div className="Glass2 position-absolute float3 p-3 rounded">

                <div className="d-flex align-items-center gap-3">
                  <div>🚀</div>

                  <div>
                    <h6 className="text-light fw-bold mb-0">10K+</h6>

                    <p
                      className="text-light mb-0"
                      style={{ fontSize: "12px" }}
                    >
                      Active Companies
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Hero