import React, { useEffect, useState } from "react";

export const SearchUI = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isresVisisble, setIsResVisible] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const s = setTimeout(() => {
      fetchData();
    }, 200)

    return () => clearTimeout(s);
    
  }, [query]);
  const fetchData = async () => {
     //if data is in cache don't call API
     if(cache[query]) {
      setSearchResult(cache[query]);
     }
     //If data is not in cache then only call the API
     else {
      const data = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${query}`
      );
      const json = await data.json();
      //console.log(json);
      cache[query] = json?.[1];
      setSearchResult(json?.[1]);
     }
    
  };

  console.log(searchResult);
  return (
    <div>
      <input
        type="text"
        className="border border-black m-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsResVisible(true)}
        onBlur={() => setIsResVisible(false)}
      />
      <ul className="border border-black mx-5">
        {searchResult.length > 1 && isresVisisble && searchResult?.map((item) => (
          <li> {item}</li>
        ))}
      </ul>
    </div>
  );
};
