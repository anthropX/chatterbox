const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 3090

/*
  Middleware: express.json
  1. Parses incoming requests with JSON payloads
  2. Populates req with body object containing this parsed data
 */

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log(`Server started listening to port ${port}`)
})
