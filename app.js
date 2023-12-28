const path  = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const app = express();

// app.engine('.hbs', expressHbs.engine({ extname: '.hbs', defaultLayout: 'main-layout'}));

// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const { get404Page } = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(get404Page)

app.listen(3000);
