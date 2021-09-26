const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

const userRoutes = require('./routes/user.routes');
const prospectsRoutes = require('./routes/prospects.routes');
const categoriesRoutes = require('./routes/categories.routes')

app.use(session({
    secret: 'wisky',
    resave: true,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/prospects', prospectsRoutes);

app.use('/categories', categoriesRoutes);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))