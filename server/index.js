const express = require('express')
const path = require('path')

const app = express()

//endpoint for html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

//if there is a port number or use 4545
const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}!`))