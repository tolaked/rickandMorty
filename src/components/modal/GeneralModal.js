import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { backCaret } from "../../assets/Icons";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    border: "1px solid rgba(219, 220, 224, 0.5)",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
    background: "#ffffff",
    boxShadow: "15px 30px 40px rgba(64, 25, 109, 0.07)",
    overflow: "hidden",
  },
  overlay: { backgroundColor: "rgba(64, 25, 109, 0.2)" },
};

const GeneralModal = ({ modalOpen, closeModal, children }) => {
  return (
    <Modal style={customStyles} isOpen={modalOpen} onRequestClose={closeModal}>
      <BackButton onClick={closeModal}>
        <div>{backCaret}</div>
        <p>Back</p>
      </BackButton>
      {children}
    </Modal>
  );
};

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #57bd38;
    margin-left: 10px;
  }
`;

export default GeneralModal;
