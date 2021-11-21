import React from "react";
import FileUploadComponent from "./fileUpload";

function App() {
  return (
    <div className="d-flex w-100 text-center justify-content-center font-02 min-vh-100 flex-column gap-5">
      <h3>Handwriting Recognition</h3>
      <FileUploadComponent />
    </div>
  );
}

export default App;
