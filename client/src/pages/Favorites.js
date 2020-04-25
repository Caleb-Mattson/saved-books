import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import BookCards from "../components/BookCards";
import Axios from "axios";
import FavoritedBooks from "../components/FavoritedBooks";
import Header from "../components/Header";


class Favorited extends Component {
    state = {
        favoritedBooks: []
    };

    componentDidMount() {
        this.getBooks();
    };

    getBooks = () => {
        Axios.get("/api/books")
            .then(res => {
                this.setState({ favoritedBooks: res.data })
            })
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch (err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Header />
                <FavoritedBooks books={this.state.favoritedBooks} />
            </Container>
        )
    };

}

export default Favorited;