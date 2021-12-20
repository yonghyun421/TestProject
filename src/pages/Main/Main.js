import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Main = () => {
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    fetch("http://49.50.167.136:9871/api/ethnicity/list", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((res) => {
        console.log(res);
        setPatient(res);
      });
  }, []);

  return <Div>{patient}</Div>;
};

export default Main;

const Div = styled.div``;
