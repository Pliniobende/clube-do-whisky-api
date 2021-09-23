const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/user.routes');
const prospectsRoutes = require('./routes/prospects.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/prospects', prospectsRoutes);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))