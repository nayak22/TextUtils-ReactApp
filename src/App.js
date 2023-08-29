import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("initialState");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          navTitle="TextUtils"
          navAbout="About"
          mode={mode}
          toggleModeTheme={toggleMode}
        ></Navbar>
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
