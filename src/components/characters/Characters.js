import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  getCharacters,
  getCharactersByGender,
  getCharactersByName,
  getCharactersByNameAndGender,
} from "../../api/fetchingAPI";
import CharacterCard from "./CharacterCard";
import _, { debounce } from "lodash";
import Paginate from "../common/pagination/Paginate";
import CustomFilter from "../common/filter/CustomFilter";
import "./container.scss";
const filterParamItems = ["Name", "Status", "Species", "Gender"];

const CharactersPage = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(0);
  const [filterParam, setFilterParam] = useState(filterParamItems[0]);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const name = searchParams.get("name");
  const gender = searchParams.get("gender");
  const pageNumber = Number(searchParams.get("page"));

  const handlePrevious = () => {
    if (pageNumber > 1) {
      searchParams.set("page", pageNumber - 1);
      setSearchParams(searchParams);
    }
  };

  const handleNext = () => {
    if (pages > pageNumber) {
      searchParams.set("page", pageNumber + 1);
      setSearchParams(searchParams);
    }
  };
  const fetchCharacters = React.useCallback(async () => {
    try {
      const { data } = await getCharacters(pageNumber);
      setLoading(false);
      setCharactersData(data.results);
      setPages(data.info.pages);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [pageNumber]);

  const fetchCharactersByNameAndGender = async (name, gender, pageNumber) => {
    const { data } = await getCharactersByNameAndGender(
      name,
      gender,
      pageNumber
    );
    setLoading(true);
    try {
      setLoading(false);
      setCharactersData(data.results);
      setPages(data.info.pages);
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchByGender = async (gender, pageNumber) => {
    const { data } = await getCharactersByGender(gender, pageNumber);
    setLoading(true);
    try {
      setLoading(false);
      setCharactersData(data.results);
      setPages(data.info.pages);
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchCharactersByName = async (name, pageNumber) => {
    const { data } = await getCharactersByName(name, pageNumber);
    setLoading(true);
    try {
      setLoading(false);
      setCharactersData(data.results);
      setPages(data.info.pages);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleRequest = async (name, gender, pageNumber) => {
    if (name && name.length && gender?.length) {
      fetchCharactersByNameAndGender(name, gender, pageNumber);
    } else if (name && name.length) {
      fetchCharactersByName(name, pageNumber);
    }
  };
  // eslint-disable-next-line
  const debounceOnChange = React.useCallback(debounce(handleRequest, 1000), []);

  useEffect(() => {
    debounceOnChange(name, gender, pageNumber);
  }, [debounceOnChange, name, gender, pageNumber]);

  useEffect(() => {
    if (!name?.length && !gender?.length) {
      fetchCharacters(pageNumber);
    } else if (gender?.length && !name?.length) {
      fetchByGender(gender, pageNumber);
    }
  }, [fetchCharacters, pageNumber, name, gender]);
  return (
    <>
      <div className="characters_container">
        <div className="characters__heading-wrapper">
          <h2>Characters</h2>
          <CustomFilter
            filterParamItems={filterParamItems}
            setFilterParam={setFilterParam}
            filterParam={filterParam}
            debounceOnChange={debounceOnChange}
            setSearchParams={setSearchParams}
            searchParams={searchParams}
          />
        </div>
        {loading ? (
          <Skeleton count={20} />
        ) : (
          <>
            {charactersData?.length ? (
              <>
                <div className="characters__main__list-wrapper">
                  {charactersData &&
                    charactersData.map((characterData, index) => (
                      <CharacterCard key={index} {...{ characterData }} />
                    ))}
                </div>
                <Paginate
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                  pageNumber={pageNumber}
                  isDisabled={pages === pageNumber}
                />
              </>
            ) : (
              <h2>Nothing here</h2>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CharactersPage;
