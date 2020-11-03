import React, { useRef } from "react";
import S3 from "react-aws-s3";
import Button from 'react-bootstrap/Button'
import Converter from './Converter'
function ConvertPage() {

// FFMPEG Part !


  return (
    <>
        <br />
        <Button onClick={Converter}>Upload</Button>
    </>
  );
}

export default ConvertPage;
