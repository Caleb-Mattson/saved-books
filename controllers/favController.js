const axios = require("axios");

function apiRoutes(app) {
    app.get("/api/saved-books/:title", function (req, res) {
        const title = req.params.title;
        const URL = "https://www.googleapis.com/books/v1/volumes?q=" + title
        axios.get(URL)
        .then(function(response) {
            console.log(response.data.items)
            res.json(response.data.items);
        });
    })
}

module.exports = apiRoutes;