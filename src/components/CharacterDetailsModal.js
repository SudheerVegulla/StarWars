import React from "react";
import ReactModal from "react-modal";

const CharacterDetailsModal = ({ character, isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Character Details"
    >
      <h2>Character Details</h2>
      <p>Name: {character.name}</p>
      <p>Height: {character.height} meters</p>
      <p>Mass: {character.mass} kg</p>

      <button onClick={onRequestClose}>Close</button>
    </ReactModal>
  );
};

export default CharacterDetailsModal;
