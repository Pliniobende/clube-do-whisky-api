const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))