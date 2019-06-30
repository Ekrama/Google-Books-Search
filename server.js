const express = require("./node_modules/express");
const path = require("path");
const PORT = process.env.PORT || 3002;
const app = express();
const mongoose = require("mongoose");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
}

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true })

.then(() => { 
  console.log( "🌎 ==> Successfully connected to mongoDB."); 
}) 
.catch((err) =>{ 
  console.log(`Error connecting to mongoDB: ${err}`); 
});

// Define API routes here

require  ("./routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

  