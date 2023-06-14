import React, { useState } from "react";
import api from "../api";

function ToyForm({ onAddToy }) {
  const [toyNameValue, setToyNameValue] = useState("");
  const [imageValue, setImageValue] = useState("");

  const handleToyNameValue = (e) => setToyNameValue(e.target.value);

  const handleImageValue = (e) => setImageValue(e.target.value);

  function handleNewToySubmit(e) {
    e.preventDefault();
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: toyNameValue,
        image: imageValue,
        likes: 0,
      }),
    })
      .then((r) => r.json())
      .then((newToy) => onAddToy(newToy));
    setToyNameValue("");
    setImageValue("");
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleNewToySubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleToyNameValue}
          value={toyNameValue}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleImageValue}
          value={imageValue}
        />
        <br />
        <input type="submit" name="submit" value="Create New Toy" className="submit" />
      </form>
    </div>
  );
}

export default ToyForm;
