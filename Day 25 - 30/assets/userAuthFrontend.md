## Login Screen
### Imports
```
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopScreen from "../../components/TopScreen";
```
### Snippet
```
function LoginScreen() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");


  return (
    <TopScreen title="LOGIN">
      <div
        className="loginContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "20px",
        }}
      >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              //value={email}
              placeholder="Enter email"
              //onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              //value={password}
              placeholder="Password"
              //onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New User? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </TopScreen>
  );
}
```

## Register Screen
## Imports
```
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopScreen from "../../components/TopScreen";
```
## Snippet
```
function RegisterScreen() {
  //const [email, setEmail] = useState("");
  //const [name, setName] = useState("");
  //const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  //const [password, setPassword] = useState("");
  //const [confirmpassword, setConfirmPassword] = useState("");
  //const [message, setMessage] = useState(null);
  //const [picMessage, setPicMessage] = useState(null);

  return (
    <TopScreen title="REGISTER">
      <div className="loginContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "20px",
        }}>        
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              //value={name}
              placeholder="Enter name"
              //onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              //value={email}
              placeholder="Enter email"
              //onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              //value={password}
              placeholder="Password"
              //onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              //value={confirmpassword}
              placeholder="Confirm Password"
              //onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control className="px-3 py-3"  
            // onChange={(e) => postDetails(e.target.files[0])}          
              id='custom-file'
              type="file"                             
              label="Upload Profile Picture"                     
            />
          </Form.Group>
            <br />
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Already a User? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </TopScreen>
  );
}
```
### Post Images
```

//   const postDetails = (pics) => {
//     if (
//       pics ===
//       "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
//     ) {
//       return setPicMessage("Please Select an Image");
//     }
//     setPicMessage(null);
//     if (pics.type === "image/jpeg" || pics.type === "image/png") {
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", "<upload_preset>");
//       data.append("cloud_name", "<cloud_name>");
//       fetch("https://api.cloudinary.com/v1_1/<cloud_name>/image/upload", {
//         method: "post",
//         body: data,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setPic(data.url.toString());
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       return setPicMessage("Please Select an Image");
//     }
//   };
```
