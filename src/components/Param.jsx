import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Card from "./shared/Card";

function Param() {
  //const { id, name } = useParams();
  const status = 400;
  if (status === 404) {
    return <Navigate to={{ pathname: "/about" }}></Navigate>;
  }
  return (
    <div>
      <Card>
        {/* <h1>{id}</h1>
        <h1>{name}</h1> */}
        <h1>rahul</h1>
        <Routes>
          <Route path="/show" element={<h1>rahul king</h1>}></Route>
        </Routes>
      </Card>
    </div>
  );
}

export default Param;
