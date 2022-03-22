const express = require('express')    //npm install express

const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 8000
const sassMiddleware = require('node-sass-middleware'); // for using css with help of scss



//setting up scss middleware for css
app.use(sassMiddleware({
  /* Options */
  src: './assets/scss',
  dest: './assets/css',
  debug: true,
  outputStyle: 'extended',
  prefix: '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));




// connect static directory
app.use(express.static('./assets'));

// expess layout npm install express-ejs-layouts)
app.use(expressLayouts);

//extract style and script from webpages into the layout
app.set('layout extractStyles',true)  //  add <%- style %> in layout
app.set('layout extractScripts',true) //add  <%- script %> in layout


// set up the view engine using npm install ejs
app.set('view engine', 'ejs');
app.set('views', './views');






// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
  if (err){
      console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
