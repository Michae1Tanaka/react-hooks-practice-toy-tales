import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import api from "../api";

function App() {
  const [toyDisplay, setToyDisplay] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((r) => r.json())
      .then((toyData) => {
        setToyDisplay(toyData);
      });
  }, []);

  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToyDisplay([...toyDisplay, newToy]);
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyDisplay={toyDisplay} setToyDisplay={setToyDisplay} />
    </>
  );
}

export default App;
