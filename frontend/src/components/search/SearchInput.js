import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { useState } from "react";
import { SearchAcronyms } from "../../redux/SearchActions";
import { connect } from "react-redux";

const SearchInput = ({ SearchAcronyms }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="search-input">
      <FormControl>
        <label>Search the acronym library</label>
        <Input
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            SearchAcronyms(e.target.value);
          }}
          name="query"
        />
      </FormControl>
    </div>
  );
};

export default connect(null, { SearchAcronyms })(SearchInput);
