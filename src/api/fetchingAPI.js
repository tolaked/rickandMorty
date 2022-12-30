import { axiosGetConfig } from "./axiosConfig";

const url = "https://rickandmortyapi.com/api/character"

export const getCharacters = (pageNumber) => {
  return axiosGetConfig(`${url}?page=${pageNumber}`, null);
};

export const getCharactersByName = (name,pageNumber=1) => {
  return axiosGetConfig(`${url}?page=${pageNumber}&name=${name}`, null);
};

export const getCharactersByNameAndGender = (name,gender,pageNumber=1) => {
  return axiosGetConfig(`${url}?page=${pageNumber}&name=${name}&gender=${gender}`, null);
};

export const getCharactersByGender = (gender,pageNumber=1) => {
  return axiosGetConfig(`${url}?page=${pageNumber}&gender=${gender}`, null);
};


