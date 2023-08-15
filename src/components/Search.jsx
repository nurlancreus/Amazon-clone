import { useEffect, useState } from "react";
import { callAPI } from "../utils/CallApi";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { createSearchParams, useNavigate } from "react-router-dom";

const options = [
  {
    id: 1,
    value: "All",
  },
  {
    id: 2,
    value: "Deals",
  },
  {
    id: 3,
    value: "Amazon",
  },
  {
    id: 4,
    value: "Fashion",
  },
  {
    id: 5,
    value: "Computers",
  },
  {
    id: 6,
    value: "Home",
  },
  {
    id: 7,
    value: "Mobiles",
  },
];
const Search = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const getSuggestions = async () => {
      const data = await callAPI(`data/suggestions.json`);

      if (isMounted) setSuggestions(data);
    };

    getSuggestions();

    return () => (isMounted = false);
  }, []);

  const searchList = suggestions
    .filter((suggestion) => {
      const currentSearchTerm = searchTerm.toLowerCase();
      const title = suggestion.title.toLowerCase();

      return (
        currentSearchTerm &&
        title.startsWith(currentSearchTerm) &&
        title !== currentSearchTerm
      );
    })
    .slice(0, 10);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (category === "All" && !searchTerm) return;

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category,
        searchTerm,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  return (
    <div className="w-[100%]">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center h-10 bg-amazonClone-yellow rounded">
          <select
            name="headerSearch"
            id="headerSearch"
            className="p-2 bg-gray-300 text-black border text-xs xl:text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="flex grow items-center h-[100%] rounded-l text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="w-[45px]">
            <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
          </button>
        </div>
      </form>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {searchList.map((suggestion) => (
            <div
              key={suggestion.id}
              onClick={() => setSearchTerm(suggestion.title)}
            >
              {suggestion.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
