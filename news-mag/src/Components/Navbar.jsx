const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand">
          <span className="badege bg-light text-dark fs-4">MyNews</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("science")}>
                Science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("sports")}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
