import { useState } from "react";

const ANIMALS = ["Bird", "Cat", "Dog", "Pig"];
const BREEDS = [];

const SearchParams = () => {
  const [location, setLocation] = useState("Monterrey, N.L.");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            type="text"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={e=>setAnimal(e.target.value)}
          >
              <option />
              {
                  ANIMALS.map(animal=>{
                      return(
                          <option value={animal} key={animal}>{animal}</option>
                      )
                  })
              }
          </select>
        </label>
        <label htmlFor="animal">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={e=>setBreed(e.target.value)}
          >
              <option />
              {
                  BREEDS.map(breed=>{
                      return(
                          <option value={breed} key={breed}>{breed}</option>
                      )
                  })
              }
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
