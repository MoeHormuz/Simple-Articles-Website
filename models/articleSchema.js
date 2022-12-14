const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Define the Schema (the structure of the article)
const articleSchema = new Schema({
    title: String,
    summary: String,
    body: String,
});


// Creating a model based on that schema
const Article = mongoose.model("Article", articleSchema);


// Export the model
module.exports = Article;