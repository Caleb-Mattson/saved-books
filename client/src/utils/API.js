import axios from "axios"

export default {
    search: function(title) {
        return axios.get("/api/saved-books/" + title);
    },

    saveBook: function(newBook) {
        return axios.post("/api/books", newBook);
    },

    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    
    deleteBook: function(id) {
        return axios.delete("api/books" + id);
    }
}