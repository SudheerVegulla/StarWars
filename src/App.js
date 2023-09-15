import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CharacterList from "./components/CharacterList"; // Import the CharacterList component
import Pagination from "./components/Pagination";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [currentPage, searchTerm, selectedFilter]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchTerm) => {
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCharacters(filteredCharacters);
  };

  const handleFilter = () => {
    const filteredCharacters = characters.filter((character) => {
      switch (selectedFilter) {
      }
    });
  };

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      <SearchFilter
        onSearch={handleSearch}
        onFilter={handleFilter}
        setSearchTerm={setSearchTerm}
        setSelectedFilter={setSelectedFilter}
      />

      {loading ? <p>Loading...</p> : <CharacterList characters={characters} />}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
