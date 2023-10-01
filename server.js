require('dotenv').config();
const cors = require('cors')
const express = require('express');
const morgan = require('morgan');
const app = express()

app.use(cors()) //
app.use(morgan("dev"))
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})