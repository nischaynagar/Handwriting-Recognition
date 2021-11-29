import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";

function AlphabetRecognizer() {
  const [loading, setLoading] = React.useState(false);

  const [imgURL, setImgURL] = useState(
    "https://cdn.pixabay.com/photo/2017/11/10/05/24/select-2935439_960_720.png"
  );

  const [img64, setImg64] = useState('')
  const [img64name, setImg64name] = useState('')
  const [prediction, setPrediction] = useState('?')


  function handleClick() {
    setLoading(true);
    fetch('/data', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 2,
        name: img64name,
        img: img64
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setPrediction(json['Prediction'])
        setLoading(false)
    })
  }


  const imageHandler = (e) => {
    const reader = new FileReader();
    const reader1 = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImgURL(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    

    reader1.onload = function() {
      var arrayBuffer = this.result,
      array = new Uint8Array(arrayBuffer)
      const encodedString = Buffer.from(array).toString('base64');
      console.log(encodedString)
      setImg64(encodedString)
    }
    reader1.readAsArrayBuffer(e.target.files[0]);
    setImg64name(e.target.files[0].name)
  };
  return (
    <div className="py-5 mb-4 d-flex justify-content-center align-items-center flex-column gap-5">
      <h3>Alphabet Recognition</h3>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div>
          <h3>Choose an image</h3>
          <div>
            <img
              src={imgURL}
              alt=""
              id="img"
              style={{ width: 350, objectFit: "cover"}}
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
          <h3>Recognized Alphabet</h3>
          <div className="text-center h-75 d-flex justify-content-center align-items-center font-2">
            {prediction}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlphabetRecognizer;
