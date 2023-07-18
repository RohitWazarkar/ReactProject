import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
function AddEmployee(props) {
  const [employee, setEmployee] = useState({});
  let navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEmployee((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    let demo = JSON.stringify(employee);
    console.log(JSON.parse(demo));
    fetch("https://localhost:7108/api/Employee", {
      // fetch("https://localhost:8080/createemp", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: demo,
    })
      .then((r) => r.json())
      .then((data) => data);
    event.preventDefault();
    navigate("/");
    alert(`Employee Added Successfully `);
  };
  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formId">
        <Form.Label>Code:</Form.Label>
        <Form.Control type="text" name="id" onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name" onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" name="email" onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formDepartment">
        <Form.Label>Department:</Form.Label>
        <Form.Control type="text" name="department" onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Control type="submit" value="Submit" />
      </Form.Group>
    </Form>
  );
}
export default AddEmployee;


