import axios from "axios";


export default {
  
  bookSearch: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  
  getHistoryBooks: function() {
    return axios.get("/api/books");
  },
  
  removeBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
}


