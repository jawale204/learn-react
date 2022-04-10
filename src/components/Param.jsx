import React from "react";
import { useParams } from "react-router-dom";
import Card from "./shared/Card";

function Param() {
  const { id, name } = useParams();
  return (
    <div>
      <Card>
        <h1>{id}</h1>
        <h1>{name}</h1>
      </Card>
    </div>
  );
}

export default Param;
