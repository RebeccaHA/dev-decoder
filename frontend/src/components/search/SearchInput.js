import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleSetFormData = e => {
    setQuery({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    this.props.searchAcronyms(query);
  };

  return (
    <div>
      <FormControl onSubmit={handleSubmit}>
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
