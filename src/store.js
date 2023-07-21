// store.js
import { reactive, readonly } from 'vue';

const state = reactive({
  // Define your global state variables here
  server: {
    hostname: "192.168.1.180",
    port:"3000"
  },
  routes: {
    getAllbooks: "book/getAll",
    image:"image"
  },
  books: [],
  user: null,
  page: {},
  book: {},
  searchText:"",
  search:{
    text: ""
  },
  display: {
    footer: false
  }
});

// Optional: Create functions to modify the state
function setPage(newPage) {
    state.page = newPage;    
}
function setBook(newPage) {
    state.book = newPage;
}
function setBooks(newBooks) {
    state.books = newBooks;
}
function setSearch(text) {
    state.search.text = text;
}
function makeWork(text) {
    state.search.text = text;
    state.searchText = text;
}
function setUser(newUser) {
    state.user = newUser;
}
function updateFooter(page) {
    switch (page) {
        case "page-library":
            state.display.footer = true;
            break;
        default:
            state.display.footer = false;
        break;
    }
    // console.log("display changed!" + page);
}
// function incrementCount() {
//     state.count++;
//   }

// Export the state and functions as read-only to prevent direct modifications
export const store = readonly({
  state,
  setUser,
  setPage,
  setSearch,
  makeWork,
  setBook,
  setBooks,
  updateFooter
});
