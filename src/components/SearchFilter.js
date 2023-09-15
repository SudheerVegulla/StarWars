import React, { useState } from "react";

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = () => {
    onFilter(selectedFilter);
  };
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        <option value="">Filter by...</option>
        <option value="Genre">Genre</option>
        <option value="film">Film</option>
        <option value="releaseDate">Release Date</option>
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default SearchFilter;
