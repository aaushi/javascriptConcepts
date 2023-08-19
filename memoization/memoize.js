const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".results");
const ITEMS_API_URL = "http://universities.hipolabs.com/search?country=";
const DEBOUNCE_DELAY = 500;

async function showResults(searchInput) {
  const getData = await fetch(ITEMS_API_URL + searchInput);
  const data = await getData.json();
  const listItems = data.map(
    (r) => `
      <li>
        <span>${r.name}</span>
        <span>${r.web_pages[0]}</span>
      </li>`
  );
  searchResults.innerHTML = listItems.join("");
  return data;
}

function memoize(fn){
    const cache=new Map();
    return async (...args) => {
      const key = args[0];
      console.log(cache);
      if (cache.has(key)) {
        console.log("giving memoized result");
        return cache.get(key);
      } else {
        console.log("calculating");
        const res = await fn.apply(this, args);
        console.log(res);
        cache.set(key, res);
      }
    };
}
handleChange = memoize(showResults);
searchInput.addEventListener("input", (e) => handleChange(e.target.value));
