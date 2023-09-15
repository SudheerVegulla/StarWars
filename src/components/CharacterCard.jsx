import React, { useState } from 'react';
import CharacterDetailsModal from './CharacterDetailsModal';

const CharacterCard = ({ character }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <button style={{backgroundColor:'beige'}}onClick={openModal}>View Details</button>
      <CharacterDetailsModal
        character={character}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default CharacterCard;