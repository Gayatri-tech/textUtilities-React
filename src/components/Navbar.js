export default function Navbar(props) {
  const { mode, toggleMode } = props;

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          mode === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            <div className="form-check mx-2 green form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkModeSwitch"
                checked={mode === "dark"}
                onClick={() => toggleMode("dark")}
              />
              <label className="form-check-label" htmlFor="darkModeSwitch">
                Dark
              </label>
            </div>
            <div className="form-check mx-2 form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="greenModeSwitch"
                checked={mode === "green"}
                onClick={() => toggleMode("green")}
              />
              <label className="form-check-label" htmlFor="greenModeSwitch">
                Green
              </label>
            </div>
            <div className="form-check mx-2 form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="purpleModeSwitch"
                checked={mode === "purple"}
                onClick={() => toggleMode("purple")}
              />
              <label className="form-check-label" htmlFor="purpleModeSwitch">
                Purple
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
