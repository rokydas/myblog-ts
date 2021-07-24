import React from "react";

const SearchBlog = () => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <input className="search-input" type="text" placeholder="Search..." />
      <button className="btn btn-primary">Search</button>
    </div>
  );
};

export default SearchBlog;
