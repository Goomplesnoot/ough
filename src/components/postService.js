import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import '../App.css'

const PostService = () => {
    
     const [service, setService] = useState("");
     const [description, setDescription] = useState("")
     const [price, setPrice] = useState()
     const [contactinfo, setContactinfo] = useState("")

    return(
        <div className="idgas">
            <h1>Post Service</h1>
            <Form className='mt-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Service</Form.Label>
            <Form.Control type="text" name='service'  placeholder="" />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name='description'  placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price($)</Form.Label>
            <Form.Control type="number" name='price' placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contact Info</Form.Label>
            <Form.Control type="text" name='contact info' placeholder="" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
          </Form>
        </div>
    )
}
export default PostService