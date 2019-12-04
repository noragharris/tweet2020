const express = require('express')

const app = express()

//Index Route
app.get('/', (req, res) => {
  res.send('index')
})

const port = 3000

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
}) 