import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (modeName) => {
    // If the clicked mode is already active, toggle it off (set to light mode)
    if (mode === modeName) {
      setMode("light");

      // Reset body styles for light mode
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#000814";
      showAlert("Light mode has been enabled", "success");
    } else {
      // If the clicked mode is not active, set it as the active mode
      setMode(modeName);

      // Apply styles for the selected mode
      if (modeName === "dark") {
        document.body.style.backgroundColor = "#000814";
        document.body.style.color = "white";
      } else if (modeName === "green") {
        document.body.style.backgroundColor = "#1e3e1e";
        document.body.style.color = "white";
      } else if (modeName === "purple") {
        document.body.style.backgroundColor = "#3c1642";
        document.body.style.color = "white";
      }
      showAlert(`${modeName} mode has been enabled`, "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="textUtils"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About Us"
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route
              exact
              path="/about"
              element={<About mode={mode} toggleMode={toggleMode} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
