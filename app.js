const express = require("express");
const app = express();
const port = 3001;

// For Helmet
const helmet = require("helmet");
app.use(helmet());

// For template engine (view engine)
app.set('view engine', 'ejs');
app.use(express.static('public'));

/* {// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
} */


// connect to mongodb & listen for requests 
const mongoose = require("mongoose");
const allArticlesRouter = require("./routes/all-articles");
app.use(express.urlencoded({ extended: true })); //this will helps to get submitted data of form in req.body object

const dbURI = "mongodb+srv://moehormuz:owRJrHr6DijPQRVX@cluster0.sohofpd.mongodb.net/all-data?retryWrites=true&w=majority"
mongoose.connect(dbURI)
  .then((result) => {
    console.log("Database connected,");
    app.listen(process.env.PORT || port, () => {
      console.log(`app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err)
  });





// GET Request
app.get("/", (req, res) => {
  res.redirect("/all-articles");

});

app.get("/add-new-article", (req, res) => {
  res.render("add-new-article", { title: "CREATE NEW ARTICLE" })
});



// all-articles PATH
app.use("/all-articles", allArticlesRouter);



// 404 
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});