import React from "react";



function SearchForm(props) {
    // Setting the component's initial state
//   state = {
//     firstName: "",
//     lastName: "",
//     password: ""
//   };

  
    
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="search"
        />
        <button onClick={props.sort} className="btn btn-primary mt-3">
          Sort by name!
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
