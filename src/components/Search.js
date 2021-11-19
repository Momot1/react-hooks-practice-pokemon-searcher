import React from "react";

function Search({onSearch}) {
  function handleSubmit(e){
    if(e.code === "Enter"){
      onSearch(e.target.value)
    }
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
          <input className="prompt" onKeyDown={handleSubmit}/>
          <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
