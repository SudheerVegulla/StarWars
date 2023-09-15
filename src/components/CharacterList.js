import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      <ul>
        {characters.map((character, index) => (
          <li style={{ listStyleType: "none" }} key={index}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
