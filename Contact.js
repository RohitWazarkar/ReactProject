import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Contact() {
  return (

    <div style={{border:'12pt',backgroundColor:'Bisque' ,alignContent:'center'}}>
     <Card style={{ width: '14rem' ,height:'22' ,backgroundColor:'pink',border:'10pt',borderRadius:'10pt' }}>
      <Card.Img variant="top"  style={{width:'100'}} src={`/images/Rohit.jpg`}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text><div>
      <h1>Contact us </h1>
      <h3>
        phone number:: <b>8956618546</b><br>
        </br>
        Address::<b>N-11 B53/1 Hudco T.v Centre Chh.Sambhajinagar</b>
      </h3>
    </div></Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   </div>
  );
}

export default Contact;
