import React, { Component } from "react";

function acronymForm() {
  const [text, setText] = useState("");

  handleChange = () => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={this.handleChange} />
      <input type="submit" />
    </div>
  );
}

export default acronymForm;
