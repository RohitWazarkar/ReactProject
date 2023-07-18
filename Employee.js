import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import CardEmployee from './CardEmployee';
export function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("https://localhost:7108/api/Employee/" + id)
        // fetch("http://localhost:8080/emp/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, {});
    return (
        <div align="center">
            {/* <label>Id:</label>
        //     {employee.id}<br />
        //     <label>name:</label>
        //     {employee.name}<br />
        //     <label>Email:</label>
        //     {employee.email}<br />
        //     <label>Department:</label>
        //     {employee.department}<br /> */}
<CardEmployee key={id} myEmp={employee}/>
           { document.title=employee.id +" | "+employee.name +" | "+employee.department}
        </div>
    );
}
export default Employee;
