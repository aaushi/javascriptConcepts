
const searchInput=document.querySelector('.search-input');
const searchResults=document.querySelector('.results');
  const ITEMS_API_URL = "http://universities.hipolabs.com/search?country=";
  const DEBOUNCE_DELAY = 500;

    async function showResults(searchInput){
      let searchedResults;

      const getData = await fetch(ITEMS_API_URL + searchInput);
      const data = await getData.json();
      console.log(getData)
      const listItems = data.map(
        (r) => `
      <li>
        <span>${r.name}</span>
        <span>${r.web_pages[0]}</span>
      </li>`
      );
      
      searchResults.innerHTML=listItems.join('')
      console.log('searchedResults');
      console.log(searchedResults);
      return searchedResults;
  }
  
  const debouncing=function(fn,delay){
    let timer;
    return (...args)=>{
      clearTimeout(timer)
      timer=setTimeout(()=>{
      fn.apply(this,args)
    },delay);
    }
  }
  handleChange = debouncing(showResults, DEBOUNCE_DELAY);
  searchInput.addEventListener('input',(e)=>handleChange(e.target.value));
  
  