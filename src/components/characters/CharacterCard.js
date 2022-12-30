import React, { useState } from "react";
import CharacterModal from "../modal/components/CharacterModal";

const CharacterCard = ({ characterData }) => {
  const { image, name, gender, species, status } = characterData;
  const [modalOpen, setModalOpen] = useState(false);
  const [characterDetails, setCharacterDetails] = useState({});

  const handleButtonClick = () => {
    setModalOpen(true);
    setCharacterDetails(characterData);
  };

  return (
    <>
      <div className="character-wrapper">
        <div className="characters__card__image-wrapper">
          <img src={image} alt={`${name} pic`} />
        </div>
        <div className="characters__card__text-wrapper">
          <h4>{name}</h4>
          <p>{gender}</p>
          <p>{species}</p>
          <p>{status}</p>
        </div>
        <button onClick={handleButtonClick}>See more details</button>
      </div>
      <CharacterModal
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        characterDetails={characterDetails}
      />
    </>
  );
};

export default CharacterCard;
