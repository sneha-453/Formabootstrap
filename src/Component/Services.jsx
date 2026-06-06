function Services() {
  return (
    <>
    <section className="container-fluid hero py-5 overflow-hidden " id='service'>

      <div className="container">

        
        <div className="text-center">

          <p
            className="text-light border border-1 rounded-pill text-center py-2 mx-auto"
            style={{ width: "120px" }}
          >
            Services
          </p>

          <h1 className="text-light fw-bold Services-title">
            Check Our <span className="text-success">Services</span>
          </h1>

        </div>

        
        <div className="row align-items-center mt-5 gy-4">

          <div className="col-12 col-lg-8">

            <h1 className="text-light fw-bold">
              Comprehensive Digital Solutions
            </h1>

            <p className="text-light mt-3">
              We deliver end-to-end digital services that drive growth,
              enhance user experience, and transform your business vision
              into reality.
            </p>

          </div>

          <div className="col-12 col-lg-4 text-lg-end">

            <a
              href="#"
              className="text-success fw-bold text-decoration-none"
            >
              View all services →
            </a>

          </div>

        </div>

        
        <div className="row mt-5 g-4">

        
          <div className="col-12 col-md-6 col-xl-4">

            <div className="card card-Services h-100 p-4 rounded-4 border-0">

              <div className="d-flex justify-content-between align-items-start">

                <div
                  className="rounded-4 d-flex justify-content-center align-items-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#0c3b12"
                  }}
                >
                  <h2 className="text-light mb-0">🎨</h2>
                </div>

                <span
                  className="badge text-dark rounded-pill px-3 py-2"
                  style={{ background: "#cdff5975" }}
                >
                  POPULAR
                </span>

              </div>

              <h3 className="text-light fw-bold mt-4">
                Brand Identity Design
              </h3>

              <p className="text-secondary mt-3">
                Create memorable brand experiences with strategic
                design that resonates with your audience.
              </p>

              <div className="mt-3">
                <p className="text-light">✅ Logo & Visual Identity</p>
                <p className="text-light">✅ Brand Guidelines</p>
                <p className="text-light">✅ Marketing Materials</p>
              </div>

              <a
                href="#"
                className="text-success fw-bold text-decoration-none mt-3"
              >
                Explore Service →
              </a>

            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4">

            <div className="card card-Services h-100 p-4 rounded-4 border-0">

              <div
                className="rounded-4 d-flex justify-content-center align-items-center"
                style={{
                  width: "70px",
                  height: "70px",
                  background: "#0c3b12"
                }}
              >
                <h2 className="text-light mb-0">💻</h2>
              </div>

              <h3 className="text-light fw-bold mt-4">
                UI/UX Design
              </h3>

              <p className="text-secondary mt-3">
                Design intuitive interfaces that improve user
                engagement and digital experiences.
              </p>

              <div className="mt-3">
                <p className="text-light">✅ User Research</p>
                <p className="text-light">✅ Wireframing</p>
                <p className="text-light">✅ Interaction Design</p>
              </div>

              <a
                href="#"
                className="text-success fw-bold text-decoration-none mt-3"
              >
                Explore Service →
              </a>

            </div>
          </div>

        
          <div className="col-12 col-md-6 col-xl-4">

            <div className="card card-Services h-100 p-4 rounded-4 border-0">

              <div
                className="rounded-4 d-flex justify-content-center align-items-center"
                style={{
                  width: "70px",
                  height: "70px",
                  background: "#0c3b12"
                }}
              >
                <h2 className="text-light mb-0">🚀</h2>
              </div>

              <h3 className="text-light fw-bold mt-4">
                Web Development
              </h3>

              <p className="text-secondary mt-3">
                Build fast, scalable, and responsive websites for
                modern businesses.
              </p>

              <div className="mt-3">
                <p className="text-light">✅ Responsive Websites</p>
                <p className="text-light">✅ React Development</p>
                <p className="text-light">✅ SEO Friendly</p>
              </div>

              <a
                href="#"
                className="text-success fw-bold text-decoration-none mt-3"
              >
                Explore Service →
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  );
}
export default Services