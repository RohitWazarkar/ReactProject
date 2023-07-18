import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import AddEmployee from "./AddEmployee";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";

function ListPage() {
  const [employees, setEmployees] = useState([]);
  const [Temp,setTemp]=useState("");
  

  const DelEmp = (id, emp) => {
    if (window.confirm(`Are you sure ?? \n to delete mr/mrs ${emp.name}`)) {
      fetch(`https://localhost:7108/api/Employee/${id}`, { method: "DELETE" })
        .then((res) => init())
        .then(() => alert("Deleted !!!"));
    } else {
      alert("Ok Then !!!");
    }
  };

  const init = (value) => {
    // fetch("https://localhost:7108/api/Employee")
    fetch("http://localhost:3000/customers")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
        
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <div>
        <input name="text" onInput={(e)=>{setTemp=e.target.value}}></input>
      </div>
      <h2 style={{ textAlign: "center" }}>Employees Data...</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Update</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.key}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <a
                  style={{
                    backgroundColor: "yellow",
                    color: "black",
                    borderRadius: "5pt",
                    padding: "3pt",
                    borderBlockColor: "green",
                    width: "110pt",
                  }}
                  href={"/emp/" + emp.id}
                >
                  display
                </a>
              </td>
              <td>
                <a
                  style={{
                    backgroundColor: "yellow",
                    color: "black",
                    borderRadius: "5pt",
                    padding: "3pt",
                    borderBlockColor: "green",
                    width: "110pt",
                  }}
                  href={"/empedit/" + emp.id}
                >
                  Edit
                </a>
              </td>
              <td>
                <button
                  style={{
                    backgroundColor: "yellow",
                    color: "black",
                    borderRadius: "5pt",
                    padding: "3pt",
                    borderBlockColor: "green",
                    width: "110pt",
                  }}
                  onClick={() => DelEmp(emp.id, emp)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        variant="primary"
        href={"createemp"}
        onClick={AddEmployee}
        size="lg"
        className="d-none d-lg-block"
      >
        Add Employee
      </Button>

      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Select Employee
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {employees.map((emp) => (
            <Dropdown.Item key={emp.id} href={"/emp/" + emp.id}>
              {emp.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default ListPage;
