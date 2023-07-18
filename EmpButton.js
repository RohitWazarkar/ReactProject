import React from 'react';
import { useState, useEffect } from "react";
function init2  () {
   // const [employee, setEmployee] = useState([]);
    fetch("https://localhost:7108/api/Employee")
      .then((res) => res.json())
      .then((result) => {
       console.log(result);     
      });
  };
  export default init2;