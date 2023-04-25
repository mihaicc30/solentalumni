const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();


app.use(express.static(__dirname));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => res.render('index'));
app.get('/update-acc-alumni', (req, res) => res.render('update-acc-alumni'));
app.get('/support', (req, res) => res.render('support'));
app.get('/findus', (req, res) => res.render('findus'));
app.get('/courses', (req, res) => res.render('courses'));
app.get('/networkinghub', (req, res) => res.render('networkinghub'));
app.get('/jobs', (req, res) => res.render('jobs'));
app.get('/Bookanopenday', (req, res) => res.render('Bookanopenday'));

app.use('/config', express.static('./config'));

app.use('/img', express.static('./img'));

app.all("*", (req, res) => {
	res.render("./page_not_found.ejs");
});

if(!process.env.PORT)console.log("http://localhost:4445/");
app.listen(process.env.PORT || 4445, console.log("Server Online!"));
