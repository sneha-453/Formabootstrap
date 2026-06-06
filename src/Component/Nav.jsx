function Nav() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg fixed-top container">

        <div className="container">

     
          <a className="navbar-brand fw-bold text-light" href="#">
            TECH<span className="text-success">.</span>
          </a>

        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

     
          <div className="collapse navbar-collapse" id="navbarScroll">

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">

              <li className="nav-item">
                <a className="nav-link fw-bold text-light" href="#hero" >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-bold text-light" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-bold text-light" href="#service">
                  Service
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-bold text-light" href="#portfolio">
                  Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-bold text-light" href="#team">
                  Team
                </a>
              </li>

            <li className="nav-item">
                <a className="nav-link fw-bold text-light" href="#testimonials">
                  Testimonials
                </a>
              </li>
              

              <li className="nav-item">
                <a className="nav-link fw-bold text-light" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

        
          <button className="btn py-0 px-3 Started">
              <a href="#about"><p className="mt-1">GET STARTED</p></a>
            </button>

          </div>
        </div>
      </nav>
    </section>
  );
}
export default Nav