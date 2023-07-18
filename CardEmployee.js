import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 function CardEmployee({ myEmp }) {
  return (
   <div style={{border:'12pt',backgroundColor:'Bisque'}}>
     <Card style={{ width: '14rem' ,height:'22' ,backgroundColor:'pink',border:'10pt',borderRadius:'10pt' }}>
      <Card.Text>{myEmp.name}</Card.Text>
      <Card.Img variant="top"  style={{width:'100'}} src={`/images/${myEmp.name}.jpg`}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{myEmp.id}</Card.Text>
        <Card.Text>{myEmp.name}</Card.Text>
        <Card.Text>{myEmp.email}</Card.Text>
        <Card.Text>{myEmp.department}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   </div>
  );
}
export default CardEmployee;
