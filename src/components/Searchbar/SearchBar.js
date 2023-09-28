import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchBar() {
  return (
    <div>
      <FontAwesomeIcon icon={faSearch} size="xl" />
    </div>
  );
}

export default SearchBar;
