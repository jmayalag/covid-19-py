import React from "react";
import "./App.css";

import CedulaForm from "./Forms/CedulaForm";
import PersonalDataForm from "./Forms/PersonalDataForm";

function App() {
  return (
    <div>
      <div style={{ padding: "20px", border: "1px solid gray" }}>
        <CedulaForm />
      </div>
      <div style={{ padding: "20px", border: "1px solid gray" }}>
        <PersonalDataForm />
      </div>
    </div>
  );
}

export default App;
