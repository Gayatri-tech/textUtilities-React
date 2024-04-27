import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

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
      document.title = "textUtils - light mode";
    } else {
      // If the clicked mode is not active, set it as the active mode
      setMode(modeName);
      // Apply styles for the selected mode
      if (modeName === "dark") {
        document.body.style.backgroundColor = "#000814";
        document.body.style.color = "white";
      } else if (modeName === "green") {
        document.body.style.backgroundColor = "#132a13";
        document.body.style.color = "white";
      } else if (modeName === "purple") {
        document.body.style.backgroundColor = "#3c1642";
        document.body.style.color = "white";
      }
      showAlert(`${modeName} mode has been enabled`, "success");
      document.title = `textUtils - ${modeName} mode`;
    }
  };

  return (
    <>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alert alert={alert} />
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
