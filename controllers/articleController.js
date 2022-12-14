const Article = require("../models/articleSchema");



const article_index_get = (req, res) => {

    Article.find()
        .then((result) => {
            res.render("index", { title: "HOME", arrArticle: result }); // In .find() method result = all data inside mongo DataBase (Array of objects)
        })
        .catch((err) => {
            console.log(err);
        })

};




const article_details_get = (req, res) => {

    Article.findById(req.params.id)
        .then((result) => {
            res.render("details", { title: "ARTICLE DETAILS", objArticle: result }); // In .findById() method result = one document data inside mongo DataBase (Object)
        })
        .catch((err) => {
            console.log(err);
        })
};




const article_post = (req, res) => {
    const article = new Article(req.body);
    article
        .save()
        .then((result) => { res.redirect("/all-articles") })
        .catch((err) => { console.log(err) })
};




const article_delete = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then((params) => {
            res.json({ mylink: "/all-articles" })
        })
        .catch((err) => {
            console.log(err);
        })
};




module.exports = {
    article_index_get,
    article_details_get,
    article_post,
    article_delete,
}