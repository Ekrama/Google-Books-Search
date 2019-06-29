require ("dotenv").config();

const axios = require ("axios");

const path = require ("path");

module.exports = function (app){

    app.get("/api/books", function(req, res) {
        


    });

      app.post("/api/books", function (req,res){

    });

      app.delete("/api/books/:id", function (req,res){

    });
    
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

}