import React from "react";
import ToyCard from "./ToyCard";
import { v4 as uuid } from "uuid";
import api from "../api";

function ToyContainer({ toyDisplay, setToyDisplay }) {
  function handleDonateToy(id, toy) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json)
      .then(() =>
        setToyDisplay(
          toyDisplay.filter((toys) => {
            return toys.id !== toy.id;
          })
        )
      );
  }

  function handleLikes(id, toy) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: ++toy.likes }),
    })
      .then((r) => r.json())
      .then((updatedToy) => {
        const updatedToys = toyDisplay.map((toys) => {
          if (toys.id === updatedToy.id) {
            return updatedToy;
          } else return toys;
        });
        setToyDisplay(updatedToys);
      });
  }

  const toyDisplayMap = toyDisplay.map((toy) => {
    return <ToyCard toy={toy} key={uuid()} onDonate={handleDonateToy} onLike={handleLikes} />;
  });

  return <div id="toy-collection">{toyDisplayMap}</div>;
}

export default ToyContainer;
