import { useRef, useState, useEffect } from 'react';
import './App.css';
import {uploadFile} from './services/api';

function App() {
  const [file, setFile] = useState(null);
  const [result,setResult] = useState(''); // Use useState instead of useRef
  const fileInputRef = useRef();

  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);
      try{ let response = await uploadFile(data);
       if(response && response.path) {
        setResult(response.path);
       }else{
        console.error("Invalid response from uploadFile:", response);

       }}catch(error){
        console.error("Error uploading file:", error);
       } }
    }
    getImage();
    // You can add any side effects related to file here
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  console.log(file);

  return (
    <div className='container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link</p>

        <button onClick={onUploadClick}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href = {result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
