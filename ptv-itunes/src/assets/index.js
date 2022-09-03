const { createApp, reactive } = window.PetiteVue;


const store = reactive({
  term: "",
  results: "",
  msg: "No results to show"
});

const SearchBox = function () {
  return {
    $template: "#search",
    async search() {
      if (store.term.length > 1) {
        store.msg = "loading...";
        const url = `https://itunes.apple.com/search?term=${store.term}&entity=album`;
        const tracks = await fetch(url).then((r) => r.json());
        store.results = tracks.results;
        if (tracks.results.length > 1) {
          store.msg = `Results for: ${store.term}`;
          store.term = "";
        }
      } else {
        store.msg = "Please type something";
      }
      console.log(store.results);
    }
  };
};

const Results = function () {
  return {
    $template: "#results",
    shorten(str, maxLen, separator = " ") {
      if (str.length <= maxLen) return str;
      return str.substr(0, str.lastIndexOf(separator, maxLen));
    }
  };
};

createApp({
  SearchBox,
  Results,
  store
}).mount();
