function Search({value, onSearch}) {
    return (
      <div class="container" style={{marginBottom:"3%", marginTop:"3%"}}>
        <form class="form-inline">
          <input class="form-control" id="myInput" type="search" placeholder="Search" aria-label="Search" 
            onInput={() => {onSearch(document.getElementById("myInput").value)}}/>
        </form>
      </div>
    );
  }
  
  export default Search;
  