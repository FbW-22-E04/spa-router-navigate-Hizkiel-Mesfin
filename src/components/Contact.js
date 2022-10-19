import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const nav = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={() => nav("/home")}>Submit</button>
    </div>
  );
};

export default Contact;
