import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const [fname, setFName] = useState("");

  const [description, setDescription] = useState("");

  const [file, setFile] = useState("");

  const history = useNavigate();

  const setdata = (e) => {
    const { value } = e.target;
    setFName(value);
  }

   const setdatas = (e) => {
     const { value } = e.target;
     setDescription(value)
     console.log(setdatas)
   }

  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }

  // adduser data

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", fname);
    formData.append("description", description)

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const res = await axios.post("/register", formData, config);

    if (res.data.status === 401 || !res.data) {
      console.log("errror")
    } else {
      history("/")
    }
  }

  return (
    <>
      <div className="container mt-3">
        <h1>Upload Your Img Here</h1>

        <Form className='mt-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" name='fname' onChange={setdata} placeholder="" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>description</Form.Label>
            <Form.Control type="text" name='description' onChange={setdatas} placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control type="file" onChange={setimgfile} name='photo' placeholder="" />
          </Form.Group>
          <Button variant="dark" type="submit" onClick={addUserData}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Register