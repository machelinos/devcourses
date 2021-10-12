import { useState } from "react";

const SearchParams = () => {
  // without destructuring
  // const locationTuple = useState("Seattle, WA");
  // const location = locationTuple[0];
  // const setLocation = locationTuple[1];
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location.toUpperCase()}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
