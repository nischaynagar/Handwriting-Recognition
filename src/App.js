import React from "react";
import FileUploadComponent from "./fileUpload";
import {
  Button,
  Input,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import DigitRecognizer from "./components/DigitRecognizer";
import AlphabetRecognizer from "./components/AlphabetRecognizer";

function App() {
  return (
    // <div className="d-flex w-100 text-center justify-content-center font-02 min-vh-100 flex-column gap-5">
    //   <h3>Handwriting Recognition</h3>
    //   <FileUploadComponent />
    // </div>
    <>
      <div className="container mb-4 pt-5 font-08">
        <Routes>
          <Route exact path="/DigitRecognizer" element={DigitRecognizer()} />
          <Route
            exact
            path="/AlphabetRecognizer"
            element={AlphabetRecognizer()}
          />
          <Route path="/" element={Home()} />
          <Route
            render={function () {
              return <p>Not found</p>;
            }}
          />
        </Routes>
      </div>
      <div className="py-2 bg-black text-white  w-100 position-fixed bottom-0">
        <div className="container text-center font-07">@copyright 2021</div>
      </div>
    </>
  );
}

export default App;
