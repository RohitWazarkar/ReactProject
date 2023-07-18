import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

function LoginPage() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  const [sample, setSample] = useState([]);

  const verification = () => {
    fetch("https://localhost:7108/api/Employee")
      .then(res => res.json())
      .then(data => {
        setSample(data);
        const matchedEmployee = data.find(employee => employee.username === username && employee.password === password);
        if (matchedEmployee) {
          setLoginStatus(true);
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    verification();

    if (loginStatus) {
      alert('Congratulations! You have successfully logged in.');
    }
  };

  return (


    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card style={{ width: '30rem', height: '35rem', backgroundColor: 'pink', border: '10pt', borderRadius: '15pt', textAlign: 'center' }}>
      <Card.Text>{'Employee Login Page'}</Card.Text>
      <Card.Body>
        <Card.Title>Login Page</Card.Title>
        <Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                style={{border:'5pt',borderBlockColor:'red'}}
                onChange={handleUsernameChange}
                name="username"
                placeholder="Enter Username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handlePasswordChange}
                name="password"
                placeholder="Enter Password"
              />
            </Form.Group>
          </Form>
          <Button onClick={handleLogin} variant="outline-success">
            Login
          </Button>{' '}
        </Card.Text>
  
        <Button variant="outline-danger">Register</Button>
      </Card.Body>
    </Card>
  </div>
  

  );
}

export default LoginPage;
