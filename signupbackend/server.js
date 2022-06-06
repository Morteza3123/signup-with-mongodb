const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

app.listen(4000, () => console.log("Server is up running."))