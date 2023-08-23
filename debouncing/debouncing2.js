const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".results");
const DEBOUNCE_DELAY = 200;
let count=0;

 function showResults(searchInput) {
  count++;
  console.log(searchInput  + count);
}

const debouncing = function (fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
handleChange = debouncing(showResults, DEBOUNCE_DELAY);
searchInput.addEventListener("input", (e) => handleChange(e.target.value));
