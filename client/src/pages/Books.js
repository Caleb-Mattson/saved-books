import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import BookCards from "../components/BookCards";
import Header from "../components/Header";

class Books extends Component {
    state = {
       bookResults: [],
       search: "",
       title: "", 
       author: "",
       plot: "",
       image: "", 
       link: ""      
       
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value// search:"phil"
        });
        console.log("imput change works", value)
    };
    
   handleFormSubmit = event => {
       event.preventDefault();
       API.search(this.state.search)
       .then(response => {
           this.setState({ books: response.data, title: "", author: "", plot: "", image: "", link: ""})

        console.log("results: ", this.state.books);
           
       }).catch (err => console.log(err));
   };

   saveBook = book => {
       console.log(book);

       let currentBook = this.state.books.find(book => book.id === book);

       API.saveBook({
           title: currentBook.volumeInfo.title,
           author: currentBook.volumeInfo.author[0],
           plot: currentBook.volumeInfo.description,
           image: currentBook.volumeInfo.imageLinks.thumbnail,
           link: currentBook.volumeInfo.previewLink
       })
       .then(res => {
           console.log("book saved: ", res);
       })
       .catch(err => console.log(err));
   };
    componentDidMount() {
        
    };
    render() {
        return (
            <Container>
                <Header />
                <SearchBar search={this.state.search}  handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}  />
                <BookCards books={this.state.books}/>
            </Container>
        )
    };

}


export default Books;