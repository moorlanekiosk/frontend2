// store.js
import { reactive, readonly } from 'vue';

const state = reactive({
  // Define your global state variables here
  server: {
    hostname: "192.168.1.10",
    port:"3000"
  },
  routes: {
    getAllbooks: "book/getAll",
    image:"image",
    getAllgenres: "genre/getAll"
  },
  books: [],
  genres: [],
  shelves: [],
  user: {
    name:"Yehoshua Lewis",
    icon:"",
    status:"Off",
    sid:"",
    cids:[]
  },
  page: {},
  book: {},
  searchText:"",
  search:{
    text: ""
  },
  display: {
    keyboard: true,
    footer: false
  }
});
function toggleKeyboard() {
  state.display.keyboard = !state.display.keyboard;
}
function showKeyboard() {
  return state.display.keyboard;
}
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
function setGenres(newGenres) {
    state.genres = newGenres;
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
function setUserName(name) {
  state.user.name = name;
}
function toggleUserStatus() {
  state.user.status = state.user.status == "On" ? "Off" : "On";
}
function UserStatus() {
  return state.user.status;
}
function UserName() {
  return state.user.name + " " + state.user.icon;
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
}
function filteredBooks() {
  if (!state.searchText) {
    return state.books;
  }  
  const searchTextLower = state.searchText.toLowerCase();
  return state.books.filter(book => {
      console.log(book.title, book.author);
      if(book.author === undefined){
        return book.title.toLowerCase().includes(searchTextLower)
      }else{
        return book.title.toLowerCase().includes(searchTextLower) || book.author.toLowerCase().includes(searchTextLower)
      }
    }
  );
}
function hasContents(gid) {
  return filteredBooksByGenre(gid).length > 0 ? true : filteredGenres(gid).length > 0 ? true : false;
}
function filteredBooksByGenre(gid) {
  return state.books.filter(book => {
      // console.log(book.title, book.author);
      return book.genre?.includes(gid);
    }
  );
}
function filteredGenres(gid) {
  return state.genres.filter(genre => {
        return genre.parent == gid;
      }
  );
}
function getRoute(name) {
  return `http://${state.server.hostname}:${state.server.port}/api/${state.routes[name]}`
}
// Export the state and functions as read-only to prevent direct modifications
export const store = readonly({
  state,
  setUser, setUserName, toggleUserStatus, UserStatus, UserName,
  setPage,
  setSearch,
  makeWork,
  setBook,
  setBooks,
  setGenres,
  updateFooter,
  toggleKeyboard, showKeyboard,
  filteredBooks, filteredBooksByGenre, hasContents,
  filteredGenres,
  getRoute
});
