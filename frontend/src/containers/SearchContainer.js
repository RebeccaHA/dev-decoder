import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}
const SearchContainer = query => {
  return (
    <div>
      <SearchInput />
    </div>
  );
};

export default connect(mapStateToProps)(SearchContainer);
