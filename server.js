const express = require('express')

const app = express()
app.use(express.json())



app.listen(4000, () => console.log('App is up on 4000'))