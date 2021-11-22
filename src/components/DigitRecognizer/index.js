import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";

function DigitRecognizer() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  const [imgURL, setImgURL] = useState(
    "https://cdn.pixabay.com/photo/2017/11/10/05/24/select-2935439_960_720.png"
  );

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImgURL(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="py-5 mb-4 d-flex justify-content-center align-items-center flex-column gap-5">
      <h3>Digit Recognition</h3>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div>
          <h3>Choose an image</h3>
          <div>
            <img
              src={imgURL}
              alt=""
              id="img"
              style={{ width: 350, objectFit: "cover" }}
            />
            <input
              type="file"
              name="image-upload"
              id="input"
              accept="image/*"
              className="d-none"
              onChange={imageHandler}
            />
            <div>
              <label
                htmlFor="input"
                className="d-flex align-items-end justify-content-center"
              >
                <i className="material-icons">add_photo_alternate</i>
                Choose your photo
              </label>
            </div>
          </div>
        </div>
        <LoadingButton
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Recognize
        </LoadingButton>
        <div>
          <h3>Recognized Digit</h3>
          <div className="text-center h-75 d-flex justify-content-center align-items-center font-2">
            1
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitRecognizer;
