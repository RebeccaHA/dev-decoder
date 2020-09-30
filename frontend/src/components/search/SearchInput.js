import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleSetFormData = e => {
    setQuery({ query: e.target.value });
  };

  return (
    <div>
      <FormControl>
        <Input
          type="text"
          value={query}
          onChange={handleSetFormData}
          name="query"
        />
      </FormControl>
    </div>
  );
};

export default SearchInput;
