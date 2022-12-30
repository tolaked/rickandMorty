import React from "react";
import { Routes, Route } from "react-router-dom";
import CharactersPage from "./components/characters/Characters.js";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CharactersPage/>} />
      </Routes>
    </>
  );
}

