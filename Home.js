import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Home() {
  return (
    <div  style={{align:'center'}} >
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="./ListPage">ListPage</Dropdown.Item>
        <Dropdown.Item href="./Home">Home</Dropdown.Item>
        <Dropdown.Item href="./ContactUs">Contact</Dropdown.Item>
        <Dropdown.Item href="/createemp">Add Employee</Dropdown.Item>
        <Dropdown.Item href="/loginpage">login page</Dropdown.Item>
        <Dropdown.Item href="/showbycard">Show By Card</Dropdown.Item>


        


      </Dropdown.Menu>
    </Dropdown>

    
    

    

   

    </div>
  );
}

export default Home;

